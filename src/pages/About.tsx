export default function AboutPage() {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center flex-col p-5"
    >
      <div className="flex flex-col justify-center text-center lg:w-7/12">
        <h1 className="text-2xl lg:text-4xl font-bold mb-10">About</h1>

        <div className="flex gap-8 lg:gap-14 items-center flex-col lg:flex-row">
          <div className="flex justify-center w-full lg:hidden">
            <img
              src="src/assets/about2.jpg"
              alt="about"
              className="w-[150px]"
            />
          </div>

          <div className="text-left lg:text-xl">
            <p className="mb-5">
              I have been fascinated by the world of IT since I was 12 years
              old. It all started when I stumbled upon a book about the Linux
              Ubuntu operating system at the city library. From that moment, my
              curiosity and passion for technology were ignited.
            </p>

            <p>
              Fast forward to today, I am currently a Computer Science
              undergraduate student at the Del Institute of Technology.
              Throughout my academic journey, I have been fortunate to explore
              various aspects of IT, from programming and software development
              to networking and database management.
            </p>
          </div>
          <img
            src="src/assets/about2.jpg"
            alt="about"
            className="w-[300px] hidden lg:inline"
          />
        </div>
      </div>
    </section>
  );
}
