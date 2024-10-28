import { Button } from "@/components/ui/button";
import profileImage from "../assets/images/profile.jpg";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="h-[calc(100vh-120px)] md:h-screen">
      <div className="mt-[56px] md:mt-[0px] flex content-center md:items-center flex-wrap justify-center h-full gap-10 lg:gap-24">
        <img
          className="rounded-full w-64 h-64 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] border-4 border-black"
          src={profileImage}
          alt="profile"
        />

        <div className="flex flex-col gap-5">
          <span className="text-4xl lg:text-6xl  font-bold">
            Hii... <span className="">👋</span>
          </span>
          <span className="text-2xl lg:text-4xl">I'm Gabriel Hutagalung</span>
          <span className="text-2xl lg:text-4xl text-blue-600">
            Student at Infinite Learning
          </span>

          <div id="tempat-button">
            <Button asChild={true}>
              <a href="https://github.com/gabrielhtg" target="_blank">
                <Github />
                Github
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
