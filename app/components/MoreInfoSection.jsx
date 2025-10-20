"use client";

import { LuCircleGauge } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { PiUserFocusBold } from "react-icons/pi";
import { RiBubbleChartFill } from "react-icons/ri";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { initTextSplit } from "../util/gsap";

export default function MoreInfoSection() {
  const carouselCards = [
    {
      image: "/img_1.jpg",
      amount: "80",
      unit: "nmol/L",
      nutrient: "Vitamin D",
      nutrientName: "(25(OH)D)",
      level: 5,
      desc: "Regulates your immune system, mood and bones. Essential in early development",
    },
    {
      image: "/img_2.jpg",
      amount: "0.93",
      unit: "nmol/L",
      nutrient: "Magnesium",
      nutrientName: "Serum magnesium",
      level: 4,
      desc: "Helps regulate your nervous system, supports better sleep, and reduces muscle tension.",
    },
    {
      image: "/img_3.jpg",
      amount: "74",
      unit: "ng/mL",
      nutrient: "Ferritin",
      nutrientName: "Serium Ferritin",
      level: 4,
      desc: "Reflecs how much usable iron your body has stored - affecting energy, concentration, and thyroid function.",
    },
  ];

  const featureCards = [
    {
      icon: LuCircleGauge,
      title: "No Appointments. No waiting.",
      desc: "Get actionable insights in minutes - no needles, no labs, no delays",
    },
    {
      icon: LuBrainCircuit,
      title: "Smarter Than Guesswork",
      desc: "We process 2,000+ medical references and millions of data points to predict your health risks - clearly and intelligently.",
    },
    {
      icon: PiUserFocusBold,
      title: "Tailored to You",
      desc: "Every scan adapts to your biofeedback, lifestyle and unique markers - not generic checklists.",
    },
    {
      icon: RiBubbleChartFill,
      title: "Always-On Awareness",
      desc: "With each scan, patterns emerge. You see what's changing",
    },
  ];

  const container = useRef(null);
  useGSAP(
    () => {
      initTextSplit(container, ".text-up");
      gsap.utils.toArray(".line span").forEach((item) => {
        gsap.from(item, {
          duration: 1.2,
          ease: "expo.out",
          yPercent: 100,
          opacity: 0,
          stagger: 0.25,
          scrollTrigger: {
            trigger: item,
            start: "-100% 60%",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <main className="w-full bg-cream" ref={container}>
      <section className="site-width py-16 pb-0 text-zinc-900 flex flex-col gap-16">
        <p className="uppercase font-semibold text-up">
          Ready to see what your body's been <br />
          trying to tell you?
        </p>
        <h2 className="max-w-4xl text-7xl font-bold tracking-tighter leading-[125%] text-up">
          A Predictive, Personalised Health Platform - for People and
          Practitioners.
        </h2>

        {/* Carousel */}
        <div className="carousel flex gap-4">
          {carouselCards.map((card, i) => {
            return (
              <div
                key={card.desc}
                className="text-white flex relative aspect-4/5 grow overflow-hidden  rounded-lg bg-black"
              >
                <div className="flex flex-col justify-between absolute z-1 inset-0 px-4 pb-6">
                  <div className="w-full flex border-b border-b-white/30">
                    <div className="flex gap-4 items-start border-r border-r-white/30 pt-2 pb-4 pr-4">
                      <span className="text-4xl font-semibold">
                        {card.amount}
                      </span>
                      <span className="text-sm">{card.unit}</span>
                    </div>

                    <div className="flex grow pt-1 pl-4 justify-between items-start">
                      <div className="flex flex-col">
                        <span className="text-lg font-medium">
                          {card.nutrient}
                        </span>
                        <span className="text-xs">{card.nutrientName}</span>
                      </div>
                      <div className="flex gap-0.5 h-fit pt-2">
                        {[...Array(5).keys()].map((l) => {
                          return (
                            <div
                              key={l}
                              className={
                                `${
                                  l < card.level ? "bg-white/80" : "bg-white/20"
                                } ` + "h-[10px] w-[10px]"
                              }
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="max-w-sm text-sm px-2">{card.desc}</div>
                </div>

                <img
                  src={"carousel/" + card.image}
                  className="inset-0 absolute object-cover rounded-lg  opacity-90"
                  alt=""
                />
              </div>
            );
          })}
        </div>

        {/*  */}
        <div className="flex flex-col gap-12 mt-6">
          <h2 className="text-6xl tracking-tight leading-[125%] font-semibold text-zinc-800 text-up">
            Anyone. Anywhere.
            <br /> 290+ markers, 160+ patterns.
          </h2>

          <div className="flex w-full border-t border-t-zinc-400 border-dashed">
            {featureCards.map((card, i) => {
              return (
                <div
                  key={card.title + i}
                  className="p-8 border-r border-r-zinc-400 border-dashed flex-1 flex flex-col gap-20 last-of-type:border-r-0"
                >
                  <card.icon size={48} className="text-zinc-700" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg  font-semibold text-up">
                      {card.title}
                    </h2>
                    <p className="text-sm font-semibold text-up">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
