import Link from "next/link";
import React from "react";

export default function Footer() {
  const links = [
    {
      title: "Information",
      items: [
        {
          url: "#",
          name: "What's included",
        },
        {
          url: "#",
          name: "Health conditions",
        },
        {
          url: "#",
          name: "For you",
        },
        {
          url: "#",
          name: "For professionals",
        },
        {
          url: "#",
          name: "FAQ",
        },
      ],
    },
    {
      title: "Social Media",
      items: [
        {
          url: "#",
          name: "Instagram",
        },
        {
          url: "#",
          name: "LinkedIn",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          url: "#",
          name: "info@myhealthprac.com",
        },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black">
      <div className="px-12 flex flex-col gap-42 pt-12">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">MyHealthPrac</h2>
          </div>

          <div className="flex-2 flex flex-col gap-1">
            <p className="text-xl font-semibold">Be the first to know</p>
            <p className="text-sm text-zinc-400">
              We'll send you only what matters - no noise, no spam
            </p>
            <div className="flex gap-1 mt-4">
              <input
                type="text"
                className="w-sm rounded-full border border-zinc-500 p-3 px-6"
                placeholder="Enter e-mail address"
              />
              <button className="p-4 px-5 border border-zinc-400 rounded-full">
                Ok
              </button>
            </div>
          </div>

          <div className="flex-2 flex gap-12 flex-wrap">
            {links.map((group) => {
              return (
                <div key={group.title} className="w-xs">
                  <span className="text-zinc-500 font-semibold">
                    {group.title}
                  </span>
                  <div className="flex flex-col mt-2">
                    {group.items.map((item) => {
                      return (
                        <Link key={item.name} className="py-1" href={item.url}>
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex py-6 border-t border-t-zinc-600 border-dashed">
          <div className="">© 2025. MyHealthPrac. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
