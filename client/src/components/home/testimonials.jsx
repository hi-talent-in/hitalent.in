import { useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      content: `There's a saying that says, Never Forget your First Company,
      that gave you the chance to start your career. HiTalent
      trained me and guided me to become a Backend Developer. So,
      when I honed my skills, then I started to mentor talents
      here, when I'm free from work.`,
      author: "Iliyas",
      linkedin: "https://www.linkedin.com/in/s-iliyas/",
      position: "Backend Developer",
      program: "Internship",
    },
    {
      content: `I'm thankful to be part of HiTalent. It was a great pleasure
      and learning to work here, I worked as an employee of the
      first batch when this company started. This company has
      given me strong motivation and support, as they hire me
      based on skills and not experience. I had a great learning
      on technical skills related to ongoing market demand like
      Docker, GCP, Agile, DRF and many more. As a Fresher, I even
      developed a great team bonding skill as we used to have
      weekly update stand up where we had healthy interaction with
      the entire team. As an Alumni I would love to stay connected
      with team. I wish the organization grows well.`,
      author: "Himanshi",
      linkedin: "https://www.linkedin.com/in/himanshi-v-b35581225/",
      position: "Python Developer",
      program: "Internship",
    },
    {
      content: ` I had an incredible experience learning the fundamentals of
        Java programming language. The hands-on training and
        guidance from my mentors helped me develop a strong
        foundation in Java syntax, object-oriented programming
        concepts, and software development principles.`,
      author: "Aman",
      linkedin: "https://www.linkedin.com/in/aman-kulhar-38205a1b9/",
      position: "Java Developer",
      program: "Apprenticeship",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const carousel = setInterval(nextTestimonial, 2500);
    return () => {
      clearInterval(carousel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = (
    <strong
      className="hover:-translate-x-1 hover:cursor-pointer text-white bg-sky-700 rounded-full px-[0.6rem] text-xl py-1"
      onClick={prevTestimonial}
    >
      {"<"}
    </strong>
  );

  const next = (
    <strong
      className="hover:translate-x-1 hover:cursor-pointer text-white bg-sky-700 rounded-full px-[0.6rem] text-xl py-1"
      onClick={nextTestimonial}
    >
      {">"}
    </strong>
  );

  return (
    <section id="testimonials" className="min-h-[25rem]">
      <div className="pt-20"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
          Alumni Testimonials
        </h1>
        <br />
        <div className="md:hidden flex flex-row gap-5">
          {prev}
          {next}
        </div>
        <br />
        <div className="flex gap-3 px-3 min-h-[20rem] flex-row items-start justify-around rounded-md shadow-xl shadow-sky-200 w-full transition-transform duration-300 ease-in-out transform">
          <div className="md:block hidden h-full my-auto ">{prev}</div>
          {testimonials.map(
            (testimonial, index) =>
              index === currentIndex && (
                <div
                  key={index}
                  className="w-[80%] mx-auto py-3 flex flex-col items-center justify-center"
                >
                  <p className="font-bold text-2xl">{testimonial.author}</p>
                  <small className="text-lg">{testimonial.position}</small>
                  <small>{testimonial.program} Program</small>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-700 underline text-sm"
                  >
                    LinkedIn
                  </a>
                  <br />
                  <p>{testimonial.content}</p>
                </div>
              )
          )}
          <div className="md:block hidden h-full my-auto ">{next}</div>
        </div>
        <br />
      </div>
    </section>
  );
};

export default Testimonials;
