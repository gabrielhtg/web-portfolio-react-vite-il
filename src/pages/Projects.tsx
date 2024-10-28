import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectData } from "@/data/ProjectData";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";
import React from "react";

export default function Projects() {
  const projectData = ProjectData;
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnMouseEnter: true })
  );

  return (
    <section
      id="projects"
      className="w-full flex justify-center px-10 h-screen items-center flex-col"
    >
      <div className="w-[calc(100%-80px)]">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-16">
          My Projects
        </h1>

        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseLeave={() => {
            plugin.current.play();
          }}
        >
          <CarouselContent>
            {projectData.map((e, index) => {
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>{e.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={e.image}
                        alt="gambar-card"
                        className="w-[450px] border border-black rounded-sm"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant={"outline"} className="w-full">
                        <a href={e.link} target="_blank">
                          Open
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <p className="mt-5 lg:hidden">Do you want to see more???</p>

      <Button asChild className="mt-3 lg:mt-10">
        <a href="https://github.com/gabrielhtg?tab=repositories">
          <ExternalLink />
          See More
        </a>
      </Button>
    </section>
  );
}
