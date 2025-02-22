"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowDownLong,
} from "react-icons/fa6";
import { BsCapsulePill } from "react-icons/bs";
import { GiGooeyMolecule } from "react-icons/gi";
import { GiMicroscope } from "react-icons/gi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Service from "@/components/service";
import Drug from "@/components/drug";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import CarouselCards from "@/components/carousel";


export default function Home() {


  return (
    <>
      {/* banner */}

      <section className="">
        <div className="bg-[url(/gradient2.jpg)] w-full h-full py-12">
          {/* Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20">
            {/* Paragraph */}
            <p className="ml-[10rem] text-gray-600">
              Medical breakthroughs through
              <br />
              research and innovative solutions
            </p>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side: h1 Tag */}
              <div>
                <h1 className="md:text-[70px] font-bold text-gray-900 text-[40px] ">
                  Advancing
                  <br />
                  Medicine for a
                  <br />
                  Healthier Future
                </h1>
                <Link href={"/"}>
                  <FaArrowDownLong className="mt-8" size={30} />
                </Link>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center">
                <Image
                  src="/capsule.webp"
                  alt="Banner Image"
                  width={700}
                  height={700}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* marquee */}

      <section>
        <marquee
          speed="100"
          behavior="infinite"
          direction="left"
          className="py-6 border border-black"
        >
          <div className="flex gap-20 ">
            <span className="h-2 w-2 p-2 rounded-full bg-gray-300 mt-5"></span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="h-2 w-2 p-2 rounded-full bg-gray-300 mt-5"></span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="h-2 w-2 p-2 rounded-full bg-gray-300 mt-5"></span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="h-2 w-2 p-2 rounded-full bg-gray-300 mt-5"></span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="h-2 w-2 p-2 rounded-full bg-gray-300 mt-5"></span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
          </div>
        </marquee>
      </section>

      <Service />

      {/* about-us */}

      <div className="min-h-screen bg-gray-50">
        <section className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-6 relative">
            {/* Left Sticky Section */}
            <div className="lg:sticky lg:top-24 h-fit space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-500 rounded-xl p-6 transition-transform hover:scale-[1.02]">
                  <h5 className="text-white font-medium">Who We Are</h5>
                  <p className="text-white mt-8 text-2xl font-semibold leading-relaxed">
                    Breakthrough technologies driving drug discovery
                  </p>
                </div>
                <div className="relative h-[250px] sm:h-full rounded-xl overflow-hidden">
                  <Image
                    src="/about.webp"
                    alt="About Us"
                    fill
                    className="object-contain rounded-xl transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source
                    src="https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-drugs-video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Scrolling Section */}
            <div className="space-y-8 lg:min-h-[800px]">
              <div className="bg-gradient-to-r from-white to-green-50 rounded-xl p-8">
                <span className=" font-semibold">About Us</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                  Pioneering innovation in drug discovery
                </h2>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus ut perspic iatis
                  unde omnis iste perspiciatis ut perspiciatis unde omnis iste
                  natus. Sed ut perspiciatis unde omnis iste natus.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Perspic iatis unde omnis iste perspiciatis ut perspiciatis
                  unde omnis iste natus. Sed ut perspiciatis.
                </p>

                {/* Feature Cards */}
                <div className="mt-12 space-y-8">
                  {[
                    {
                      icon: BsCapsulePill,
                      title: "AI in drug design",
                      description:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis.",
                    },
                    {
                      icon: GiGooeyMolecule,
                      title: "Molecular modeling",
                      description:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis.",
                    },
                    {
                      icon: GiMicroscope,
                      title: "Automated high-throughput screening",
                      description:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row items-start gap-6 p-6 bg-white/50 rounded-xl hover:bg-white/80 transition-all"
                    >
                      <div className="p-4 bg-red-50 rounded-xl text-red-500 text-3xl">
                        <feature.icon />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Drug />

      {/* image */}

      <section className="py-16">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Card 1 */}
            <div className="relative group overflow-hidden shadow-lg">
              <Image
                src="/image.jpg"
                alt="Image 1"
                width={400}
                height={300}
                className="w-full h-90 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition duration-500 group-hover:bg-black/60">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold opacity-100 transform group-hover:scale-105 transition duration-500">
                  Oncology
                </h3>
                <p className="text-sm sm:text-base opacity-100 group-hover:text-white/90 transition duration-500">
                  Sed ut perspiciatis unde
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden shadow-lg">
              <Image
                src="/image-1.jpg"
                alt="Image 2"
                width={400}
                height={300}
                className="w-full h-90 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition duration-500 group-hover:bg-black/60">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold opacity-100 transform group-hover:scale-105 transition duration-500">
                  Neurology
                </h3>
                <p className="text-sm sm:text-base opacity-100 group-hover:text-white/90 transition duration-500">
                  Sed ut perspiciatis unde
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group overflow-hidden shadow-lg">
              <Image
                src="/image-2.jpg"
                alt="Image 3"
                width={400}
                height={300}
                className="w-full h-90 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition duration-500 group-hover:bg-black/60">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold opacity-100 transform group-hover:scale-105 transition duration-500">
                  Infectious Diseases
                </h3>
                <p className="text-sm sm:text-base opacity-100 group-hover:text-white/90 transition duration-500">
                  Sed ut perspiciatis unde
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group overflow-hidden shadow-lg">
              <Image
                src="/image-3.jpg"
                alt="Image 4"
                width={400}
                height={300}
                className="w-full h-90 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition duration-500 group-hover:bg-black/60">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold opacity-100 transform group-hover:scale-105 transition duration-500">
                  Immunology
                </h3>
                <p className="text-sm sm:text-base opacity-100 group-hover:text-white/90 transition duration-500">
                  Sed ut perspiciatis unde
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* marquee */}

      <section className="-mt-[30px] py-3">
        <marquee
          speed="100"
          behavior="infinite"
          direction="left"
          className="-mt-[40px]"
        >
          <div className="flex gap-20 ">
            <span className="text-2xl font-bold">#</span>
            <h3 className="text-2xl font-bold">AREA OF FOCUS</h3>
            <span className="text-2xl font-bold">#</span>
            <h3 className="text-2xl font-bold">AREA OF FOCUS</h3>
            <span className="text-2xl font-bold">#</span>
            <h3 className="text-2xl font-bold">AREA OF FOCUS</h3>
            <span className="text-2xl font-bold">#</span>
            <h3 className="text-2xl font-bold">AREA OF FOCUS</h3>
            <span className="text-2xl font-bold">#</span>
            <h3 className="text-2xl font-bold">AREA OF FOCUS</h3>
          </div>
        </marquee>
      </section>

      {/* contact */}

      <section className="py-16 bg-[url(/gradient2.jpg)] w-full h-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: 3D Image */}
            <div className="relative group">
              <div className="w-full h-96 transform transition duration-500 group-hover:rotate-3 group-hover:scale-105">
                <Image
                  src="/contact-image.png"
                  alt="Contact-Us"
                  width={600}
                  height={500}

                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-8">
              <p className="text-gray-600 text-lg">Contact Us</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                Have questions? Get in touch!
              </h2>

              {/* Form */}
              <Suspense fallback={<div>Loading...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <CarouselCards/>
      {/* client */}

      <section className=" bg-gray-100 flex justify-center">
        <div className="flex flex-col items-center max-w-lg mx-auto p-4">
          <div className="w-full">
            <Image
              src="/client.webp"
              alt="client Image"
              width={400}
              height={300}
              className="w-[400] h-[]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-auto p-4">
          <div className="w-full">
            <Image
              src="/client1.webp"
              alt="client Image"
              width={400}
              height={300}
              className="w-[400] h-[]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-auto p-4">
          <div className="w-full">
            <Image
              src="/client2.webp"
              alt="client Image"
              width={400}
              height={300}
              className="w-[400] h-[]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-auto p-4">
          <div className="w-full">
            <Image
              src="/client3.webp"
              alt="client Image"
              width={400}
              height={300}
              className="w-[400] h-[]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-auto p-4">
          <div className="w-full">
            <Image
              src="/client4.webp"
              alt="client Image"
              width={400}
              height={300}
              className="w-[400] h-[]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
