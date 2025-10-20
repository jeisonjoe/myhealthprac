"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function WhatIfSection() {
  const features = [
    {
      title: "Instant",
      desc: "What once took months, now happens in moments",
    },
    {
      title: "Predictive",
      desc: "So you never had to wait for symptoms",
    },
    {
      title: "Accessible",
      desc: "No longer limited by geographical location and availability",
    },
    {
      title: "Intelligent",
      desc: "Where data tells your story - and changes your outcome.",
    },
    {
      title: "Designed for you",
      desc: "Because you're not a checkbox or a protocol",
    },
  ];

  const container = useRef(null);

  const rotationPerStep = 72;
  const totalItems = 5;

  useGSAP(
    () => {
      let lastIndex = -1;
      const listItems = document.querySelectorAll(".scroll-list-item");
      const detailsEl = document.querySelectorAll(".list-item-detail");

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        scrub: true,
        onEnter: (self) => {
          gsap.to(".rotating-list", {
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(".rotating-list", {
            rotate: 0,
            scale: 0.85,
            duration: 1.2,
            ease: "expo.out",
          });
        },
        onEnterBack: (self) => {
          gsap.to(".rotating-list", {
            scale: 1,
            duration: 2,
            ease: "power4.out",
          });
        },
        onLeave: (self) => {
          gsap.to(".rotating-list", {
            scale: 0.85,
            duration: 1.2,
            ease: "expo.out",
          });
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const step = Math.min(
            Math.round(progress * (totalItems - 1)),
            totalItems - 1
          );

          if (step !== lastIndex) {
            lastIndex = step;

            gsap.to(".rotating-list", {
              rotate: -rotationPerStep * step,
              duration: 1.2,
              ease: "expo.out",
            });

            listItems.forEach((item, i) => {
              const detail = item.querySelector(".list-item-detail");
              if (i === step) {
                gsap.to(detail, {
                  opacity: 1,
                  duration: 0.6,
                  delay: 0.5,
                  ease: "power2.out",
                });
              } else {
                gsap.to(detail, {
                  opacity: 0,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
            });
          }
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      className="w-full bg-black py-8 h-screen overflow-hidden"
      ref={container}
    >
      <div className="site-width py-8">
        <h1 className="text-6xl tracking-tight leading-[120%]">
          What If <br />
          Health Was...
        </h1>
      </div>
      <div className="h-[42em] w-[90%] flex-none m-auto mt-32">
        <div className="w-full h-full pt-[100%] relative">
          <div className="rotating-list text-center border border-zinc-50/40 w-full h-full rounded-full absolute inset-0 scale-[0.85]">
            <div className="list-wrapper w-full h-full">
              <div className="list-features flex w-full h-full items-center justify-center flex-col relative">
                {features.map((item, i) => {
                  const rotation = i * 72;
                  return (
                    <div
                      key={item.title + i}
                      className={`flex flex-col h-full absolute scroll-list-item`}
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      <div className="flex items-center flex-col gap-4 -mt-[5.5rem]">
                        <div className="flex flex-col gap-6 items-center">
                          <div className="p-4 px-6 border border-zinc-50/50 rounded-full">
                            {i + 1}
                          </div>
                          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        </div>

                        <div className="flex flex-col gap-4 items-center opacity-0  list-item-detail">
                          <div className="line w-[1px] h-[6rem] bg-zinc-50/30"></div>
                          <h2 className="text-2xl font-semibold">
                            {item.title}
                          </h2>
                          <p className="w-3xs text-sm -mt-1 leading-[175%]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
