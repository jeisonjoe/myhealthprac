"use client";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function JoinWaitlistSection() {
  const container = useRef(null);
  useGSAP(
    () => {
      const footer = document.querySelector("footer");
      gsap.to(container.current, {
        scale: 0.75,
        opacity: 0.5,
        borderRadius: 32,
        overflow: "hidden",
        ease: "expo.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          end: "top top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <section className="w-full h-screen flex" ref={container}>
      <div className=" w-1/2">
        <img
          src="/carousel/joinwaitlist.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between p-8 bg-[#c5b197] text-zinc-800">
        <h2 className="text-5xl tracking-tight leading-[125%] font-semibold">
          Everyone. <br /> Everywhere.
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-3xl tracking-tight leading-[150%] font-semibold">
            Health shouldn't be limited by time, location, or income. Health
            should be in your hands.
          </p>
          <div className="flex items-center gap-12 bg-zinc-800 text-zinc-50 px-6 py-1 pr-1 rounded-full text-sm font-semibold w-fit">
            Join the Waitlist
            <div className="text-zinc-900 bg-white p-5 rounded-full">
              <TfiArrowTopRight className="" size={12} strokeWidth={0.75} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
