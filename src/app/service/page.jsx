"use client";

import { useState } from "react";
import {
  ArrowRight,
  Globe,
  FlaskConical,
  Heart,
  LucideBrainCircuit,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { FaCapsules } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import CarouselCards from "@/components/carousel";


const testimonials = [
  {
    Image: "/logo.webp",
    title: "Great Service!",
    content:
      "I had an amazing experience. The team was very professional and helpful.",
  },
  {
    Image: "/logo.webp",
    title: "Highly Recommend",
    content:
      "The quality of work exceeded my expectations. Would definitely recommend!",
  },
  {
    Image: "/logo.webp",
    title: "Fantastic Support",
    content:
      "Quick responses and very supportive team. Loved working with them!",
  },
  {
    Image: "/logo.webp",
    title: "Fantastic Support",
    content:
      "Quick responses and very supportive team. Loved working with them!",
  },
  {
    Image: "/logo.webp",
    title: "Fantastic Support",
    content:
      "Quick responses and very supportive team. Loved working with them!",
  },
  {
    Image: "/logo.webp",
    title: "Fantastic Support",
    content:
      "Quick responses and very supportive team. Loved working with them!",
  },
  {
    Image: "/logo.webp",
    title: "Fantastic Support",
    content:
      "Quick responses and very supportive team. Loved working with them!",
  },
  {
    Image: "/logo.webp",
    title: "Fantastic Support",
    content:
      "Quick responses and very supportive team. Loved working with them!",
  },
  {
    Image: "/logo.webp",
    title: "Fantastic Support",
    content:
      "Quick responses and very supportive team. Loved working with them!",
  },
];


const servicesdata = [
  {
    icon: <FlaskConical size={32} />,
    title: "Complete blood count",
    description:
      "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut perspiciatis unde.",
  },
  {
    icon: <HeartPulse size={32} />,
    title: "Cholestrol test",
    description:
      "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut perspiciatis unde.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Thyroid function test",
    description:
      "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut perspiciatis unde.",
  },
  {
    icon: <HeartPulse size={32} />,
    title: "STD Panel",
    description:
      "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut perspiciatis unde.",
  },
];
const Service = () => {
  const data = [
    {
      image: "/a.jpg",
      icon: <Globe size={40} className="text-white" />,
      text: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut perspiciatis unde.",
    },
    {
      image: "/b.jpg",
      icon: <LucideBrainCircuit size={40} className="text-white" />,
      text: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut perspiciatis unde.",
    },
    {
      image: "/c.jpg",
      icon: <FaCapsules size={40} className="text-white" />,
      text: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut perspiciatis unde.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <>
      {/* marquee */}
      <section className="py-3 gap-4 mt-32">
        <marquee
          speed="100"
          behavior="infinite"
          direction="left"
          className="-mt-[40px]"
        >
          <div className="flex gap-20 ">
            <span className="text-[90px] font-bold">#</span>
            <h3 className="text-[90px] font-bold">WHY CHOOSE US</h3>
            <span className="text-[90px] font-bold">#</span>
            <h3 className="text-[90px] font-bold">WHY CHOOSE US</h3>
            <span className="text-[90px] font-bold">#</span>
            <h3 className="text-[90px] font-bold">WHY CHOOSE US</h3>
            <span className="text-[90px] font-bold">#</span>
            <h3 className="text-[90px] font-bold">WHY CHOOSE US</h3>
            <span className="text-[90px] font-bold">#</span>
            <h3 className="text-[90px] font-bold">WHY CHOOSE US</h3>
            <span className="text-[90px] font-bold">#</span>
            <h3 className="text-[90px] font-bold">WHY CHOOSE US</h3>
            <span className="text-[90px] font-bold">#</span>
            <h3 className="text-[90px] font-bold">WHY CHOOSE US</h3>
          </div>
        </marquee>
      </section>

      {/* section 2 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
        {/* Left Side: Image & Overlay Card */}
        <div className="relative">
          <Image
            src={data[currentIndex].image}
            alt="Dynamic Image"
            width={700}
            height={700}
            className="w-full h-[400px] object-cover rounded-xl transition-all duration-300"
          />
          {/* Overlay Card */}
          <div className="absolute -bottom-[60px] right-10 bg-black bg-opacity-90 text-white p-6 rounded-lg flex items-center flex-col gap-3 shadow-lg w-[300px] h-[200px]">
            {data[currentIndex].icon}
            <p className="text-sm flex-1">{data[currentIndex].text}</p>
            <ArrowRight size={20} className="text-white" />
          </div>
        </div>

        {/* Right Side: Paragraph & Buttons */}
        <div>
          <p className="text-gray-700 text-lg mb-6"></p>
          Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis
          iste perspiciatis ut perspiciatis unde omnis iste natus.Sed ut
          perspiciatis unde omnis iste natus.
          {/* Buttons */}
          <div className="flex flex-col items-start gap-4 mt-10">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${currentIndex === index ? "" : ""
                  }`}
              >
                Artificial Intelligence
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* section-3 */}

      <section className="p-8 text-center mt-16">
        {/* Subtitle & Heading */}
        <span className="font-semibold text-lg flex items-start">
          What we do
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 flex items-start">
          Popular health tests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 ">
          {servicesdata.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 text-gray-800 border border-gray-200 transition-all duration-300 hover:text-blue-600 h-[320px]"
            >
              {/* Icon */}
              <div className="text-blue-600 flex items-center justify-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-2">{service.description}</p>

              {/* Arrow Icon + Hover Effect */}
              <div className="flex items-center justify-center gap-2 mt-4 text-blue-600 font-semibold duration-300">
                <span>Read More</span>
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section-4 */}

      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Grid - Image with Overlay */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/d.jpg"
              alt="Portfolio"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 text-center">
              <span className="text-sm uppercase tracking-wide font-semibold">
                Science
              </span>
              <h2 className=" lg:text-5xl md:text-4xl font-bold mt-2">
                AI & agriculture
              </h2>
              <button className="mt-4 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300 uppercase">
                Portfolio
              </button>
            </div>
          </div>

          {/* Right Grid - Text Content (Optional) */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/e.jpg"
              alt="Portfolio"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 text-center">
              <span className="text-sm uppercase tracking-wide font-semibold">
                News
              </span>
              <h2 className="lg:text-5xl md:text-4xl font-bold mt-2">
                Neuroscience
                <br />
                breakthroughs
              </h2>
              <button className="uppercase mt-4 px-6 py-2 border border-white text-white rounded-lg hover:bg-white duration-300 hover:text-black transition">
                about us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section-5 */}

      <section className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Card */}
          <div className="relative text-black p-8 flex items-center justify-center after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-[2px] after:bg-gray-300 lg:after:block after:hidden">
            <h2 className="text-[100px] font-bold opacity-5 absolute">98</h2>
            <span className="text-xl font-semibold relative">Projects</span>
          </div>

          {/* Second Card */}
          <div className="relative text-black p-8 flex items-center justify-center after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-[2px] after:bg-gray-300 lg:after:block after:hidden">
            <h2 className="text-[100px] font-bold opacity-5 absolute">65</h2>
            <span className="text-xl font-semibold relative">People</span>
          </div>

          {/* Third Card */}
          <div className="relative text-black p-8 flex items-center justify-center after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-[2px] after:bg-gray-300 lg:after:block after:hidden">
            <h2 className="text-[100px] font-bold opacity-5 absolute">10</h2>
            <span className="text-xl font-semibold relative">Year</span>
          </div>

          {/* Fourth Card */}
          <div className="relative text-black p-8 flex items-center justify-center">
            <h2 className="text-[100px] font-bold opacity-5 absolute">15</h2>
            <span className="text-xl font-semibold relative">Officers</span>
          </div>
        </div>
      </section>

      {/* section-6 */}

     <CarouselCards />
    </>
  );
};

export default Service;
