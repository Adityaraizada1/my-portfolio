"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getCalApi } from "@calcom/embed-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  // preload Cal.com modal
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleCalClick = () => {
    const btn = document.querySelector<HTMLButtonElement>(
      '[data-cal-namespace="30min"]'
    );
    btn?.click(); // open modal
  };

  return (
    <div
      className={cn(
        "flex max-w-fit fixed top-6 inset-x-0 mx-auto rounded-full backdrop-blur-md bg-black/60 border border-white/20 shadow-md z-[5000] py-1 px-3 items-center justify-center space-x-3",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link-${idx}`}
          href={navItem.link}
          className="flex items-center space-x-1 text-white hover:text-gray-300 text-sm"
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block">{navItem.name}</span>
        </Link>
      ))}

      {/* Contact button triggers Cal.com modal */}
      <div
        onClick={handleCalClick}
        className="flex items-center border border-white/30 px-3 py-1 rounded-full bg-black/40 text-white text-sm font-medium cursor-pointer relative backdrop-blur-sm hover:bg-black/60 transition"
      >
        <span className="mr-1">Contact</span>
        <span
          className="inline-block animate-wave"
          style={{ display: "inline-block", transformOrigin: "70% 70%" }}
        >
          👋
        </span>
      </div>

      {/* Hidden Cal.com trigger button */}
      <button
        data-cal-namespace="30min"
        data-cal-link="aditya-dev/30min" // 🔗 your Cal.com event link
        data-cal-config='{"layout":"month_view"}'
        className="hidden"
      />

      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          45% { transform: rotate(14deg); }
          60% { transform: rotate(-4deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-wave {
          animation: wave 2s infinite;
        }
      `}</style>
    </div>
  );
};
