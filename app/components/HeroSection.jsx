"use client";

import Image from "next/image";
import Link from "next/link";
import { TbFileAnalytics } from "react-icons/tb";
import { LuRibbon } from "react-icons/lu";
import { TbHealthRecognition } from "react-icons/tb";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { initTextSplit } from "../util/gsap";

export default function HeroSection() {
  const navItems = [
    {
      name: "What's included",
    },
    {
      name: "Health conditions",
    },
    {
      name: "For you",
    },
    {
      name: "For professionals",
    },
    {
      name: "FAQ",
    },
  ];

  const featuresList = [
    {
      icon: TbFileAnalytics,
      title: "Real-Time Analysis",
      desc: "Fast, actionable insights without long wait times.",
    },
    {
      icon: LuRibbon,
      title: "Personalised Health Insights",
      desc: "Tailored recommendations based on your unique biomarkers.",
    },
    {
      icon: TbHealthRecognition,
      title: "Holistic Health Monitoring",
      desc: "Combining physical, nutritional, and mental data for a complete picture.",
    },
  ];

  const container = useRef(null);
  useGSAP(
    () => {
      initTextSplit(container, ".text-up");

      gsap.from(".line span", {
        yPercent: 100,
        duration: 2,
        ease: "power4.out",
        stagger: 0.1,
      });
    },
    { scope: container }
  );

  return (
    <main className="w-full h-screen relative pb-10" ref={container}>
      <div className="absolute  inset-0 bg-black -z-1">
        <Image
          src={"/hero.jpg"}
          width={"1920"}
          height={"1080"}
          className="w-full h-full object-cover opacity-40 "
          alt="hero image"
        />
      </div>

      <section className="h-full flex flex-col justify-between site-width">
        {/* Header part */}
        <div className="flex flex-col gap-12">
          {/* level 1 */}
          <div className="flex items-center  justify-between py-6">
            <h1 className="text-white text-lg font-medium ">MyHealthPrac</h1>
            {/* Nav items cta */}
            <div className="flex gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item, i) => {
                  return (
                    <Link
                      key={item.name + i}
                      href={"#"}
                      className="text-sm font-light"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-4 bg-white text-gray-950 px-4 py-0.5 pr-0.5 rounded-full text-sm font-semibold w-fit h-fit">
                Join the Waitlist
                <div className="text-white bg-black p-3 rounded-full">
                  <TfiArrowTopRight className="" size={12} strokeWidth={0.75} />
                </div>
              </div>
            </div>
          </div>

          {/* main Title */}
          <div className="">
            <h1 className="text-6xl leading-[125%] font-medium text-white/90 tracking-tight text-up">
              See Beyond. <br />
              Unlock Your Health
            </h1>
          </div>
        </div>

        {/* Bottom serctoin */}
        <div className="flex w-full">
          <div className="flex flex-col gap-6 flex-1">
            {featuresList.map((feature, i) => {
              return (
                <div
                  key={feature.title + i}
                  className="flex gap-5 items-center"
                >
                  <feature.icon className="size-10" strokeWidth={1} />
                  <div className="flex flex-col gap-1">
                    <h2 className="text-up">{feature.title}</h2>
                    <p className="text-up text-sm text-white/60 w-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-5xl leading-[120%] font-medium text-white/90 tracking-tight text-up">
              Your body holds the answers <br />- we help you see them.
            </h2>
            <div className="flex items-center gap-12 bg-white text-gray-950 px-6 py-1 pr-1 rounded-full text-sm font-semibold w-fit">
              Join the Waitlist
              <div className="text-white bg-black p-3 rounded-full">
                <TfiArrowTopRight className="" size={12} strokeWidth={0.75} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
