import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react";
import { getCarouselImages } from "@/lib/data";
import { getImgLink } from "@/lib/data";
import Image from "next/image";
import ucekImage from "@/public/img/ucek.jpeg";


export function HeroSlider() {

  const [images, setImages] = useState<string[][]>([]);

  useEffect(() => {
    getCarouselImages().then((data) => {
      setImages(data);
    });
  }, []);
  
  return (
    <section className="w-full sm:mt-3 md:mt-0">
      <Carousel className="w-full" plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
        
      <CarouselContent>
        <CarouselItem>
          <div className="relative">
              <Image
                src={ucekImage}
                width={1920}
                height={1080}
                alt="University College of Engineering Kariavattom"
                className="h-[656px] w-full object-cover"
              />
               <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
                <div className="space-y-2 text-center text-primary-foreground">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    {"University College of Engineering"}
                  </h2>
                  <p className="text-lg md:text-xl text-white">Kariavattom</p>
                </div>
              </div>
            </div>
            </CarouselItem>
            {images.map((image, index) => (
              <CarouselItem key={index}>
               <div className="relative">
                <Image
                  src={getImgLink(image[0])}
                  width={1920}
                  height={1080}
                  alt={image[1]}
                  className="h-[656px] w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]">
                <div className="space-y-2 text-center text-primary-foreground">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    {image[1]}
                  </h2>
                  <p className="text-lg md:text-xl text-white">{image[2]}</p>
                </div>
              </div>
              </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
