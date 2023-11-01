const About = () => {
  return (
    <section id="about">
      <div className="pt-16"></div>
      <div className="flex flex-col gap-3 md:flex-row items-center justify-center rounded-md shadow-xl shadow-sky-200">
        <div className="mx-auto w-full flex justify-center flex-col space-y-2 py-3">
          <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
            About Us
          </h1>
          <p className="text-left md:px-10 px-2 text-sm md:text-base">
            HiTalent is an online programming training platform that is on a
            mission to help students learn programming
            <strong className="text-sky-600"> free of cost</strong>. We deliver
            our training through an
            <a href="/#:~:text=a%20suitable%20company.-,Internship%20Program,-(3%2D6%20Months">
              {" "}
              <strong className="hover:text-sky-800 underline">
                internship
              </strong>{" "}
            </a>
            program of 3-6 months and an
            <a href="/#:~:text=Apprenticeship%20Program">
              {" "}
              <strong className="hover:text-sky-800 underline">
                apprenticeship
              </strong>{" "}
            </a>
            program of 6-9 months , which equips the talents with the necessary
            programming skills to become a programmer. Our end goal is that
            after the internship or apprenticeship, the talent will be able to
            get a job as a software developer and we will help them to get
            placed in a suitable company.
          </p>
          <small className="mx-auto w-full text-center">******</small>
          <p className="text-left md:px-10 px-2 text-sm">
            <strong className="text-xl">Mentor</strong> <br /> \li:dar \ . Noun{" "}
            <br /> - Someone who shares their knowledge and experience to help
            inspire others to dream more, learn more, and do more. <br />- A
            person who knows the way, goes the way, and shows the way. <br />-
            Someone who rises by lifting others.
          </p>
        </div>
        <img
          src="/images/about.jpeg"
          alt="about image"
          width={400}
          className="hidden lg:block rounded-md hover:-translate-x-1 hover:-translate-y-1 m-3"
        />
      </div>
    </section>
  );
};

export default About;
