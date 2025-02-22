import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import Image from 'next/image'
import { CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel } from './ui/carousel';

const CarouselCards = () => {

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
      
  return (
    <div>
       {/* Testimonials */}
      
            <section className="py-10 bg-gray-100 text-center">
              <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a
                autem, veritatis nesciunt quis dolor sequi.
              </p>
              <Carousel
                className="max-w-7xl mx-auto"
                plugins={[
                  AutoScroll({ orientation: "horizontal" }),
                  Autoplay({ delay: 3000 }),
                ]}
              >
                <CarouselContent className="-ml-1">
                  {testimonials.map((data, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 ">
                        <Card className="">
                          <CardContent className="flex flex-col items-center gap-4 justify-center h-[250px]">
                            <Image
                              src={data.Image}
                              alt={data.title}
                              width={300}
                              height={100}
                              className=" w-16 h-16 rounded-full"
                            />
                            <CardTitle>{data.title}</CardTitle>
                            <CardDescription className="">
                              {data.content}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>     
              </Carousel>
            </section>
    </div>
  )
}

export default CarouselCards
