import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="w-full flex justify-center px-10 h-screen items-center flex-col gap-10"
    >
      <div className="w-[calc(100%-80px)] flex flex-col items-center">
        {/* <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">
          Contact Me
        </h1> */}

        <div className="flex items-center gap-10 flex-wrap">
          <div className="flex flex-col gap-5">
            <span className="text-2xl lg:text-4xl font-bold">
              Are you interested in collaborating with me?
            </span>
            <span className="text-xl lg:text-2xl">
              I am open to collaboration in projects and partnerships.
            </span>

            <img
              src="src/assets/contact-me.jpg"
              alt="contact-me"
              className="w-[350px] lg:hidden"
            />

            <Button className="mt-5" asChild>
              <a href="mailto:gabrielhutagalung970@gmail.com">
                <Phone />
                Contact Me
              </a>
            </Button>
          </div>

          <img
            src="src/assets/contact-me.jpg"
            alt="contact-me"
            className="w-[350px] hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
