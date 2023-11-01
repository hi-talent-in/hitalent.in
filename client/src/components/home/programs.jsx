const Programs = () => {
  return (
    <section id="programs" className="min-h-screen">
      <div className="pt-20"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
          Our Programs
        </h1>
        <small className="text-center">
          Our expertly designed curriculum is consistent between all programs.
          <br />
          Choose the option that works best for you.
        </small>
        <br />
        <br />
        <div className="flex md:w-[75%] justify-center md:flex-row flex-col md:items-center w-full gap-3 items-center">
          <div className="flex items-center md:w-[75%] min-h-[40rem] text-left p-2 px-4 justify-start rounded-md shadow-xl text-[14px] shadow-sky-200 flex-col space-y-1">
            <br />
            <strong className="text-xl">Internship Program</strong>
            <span>(3-6 Months)</span>
            <br />
            <p>
              This program aims to bridge the gap between theoretical knowledge
              and practical application for candidates in the computer science
              field or those with diverse backgrounds but exposure to software.
              Over the 3 to 6 months, participants undergo rigorous training in
              our carefully crafted curriculum, refining their programming
              fundamentals. The inclusion of live projects enhances their
              understanding by providing hands-on experience in real-world
              scenarios. This industry-oriented approach not only hones their
              technical skills but also instills a deep understanding of
              industry practices and demands, ensuring they are well-equipped to
              excel in the dynamic landscape of software development.
              Participants emerge not just with academic knowledge but also with
              the confidence and competence to tackle complex challenges in the
              software industry.
            </p>
            <br />
            <div className="mr-auto">
              <strong>Roadmap of Talent:</strong>
              <li>FreeCodeCamp Course </li>
              <li>Practical Projects </li>
              <li>Problem Solving </li>
              <li>Interview Preparation </li>
            </div>
          </div>
          <div className="flex items-center md:w-[75%] min-h-[40rem] text-left p-2 px-4 justify-start rounded-md shadow-xl text-[14px] shadow-sky-200 flex-col space-y-1">
            <br />
            <strong className="text-xl">Apprenticeship Program</strong>{" "}
            <span>(6-9 Months)</span>
            <br />
            <p>
              This extended program serves as a valuable gateway for individuals
              outside the computer science realm, allowing them to venture into
              the world of programming without prior experience. Designed as an
              extension of our Internship program, it caters specifically to
              those keen on transitioning into the tech industry or developing
              their programming skills from scratch. Over the course of 6 to 9
              months, participants undergo comprehensive training, covering both
              foundational and advanced programming concepts. Emphasizing a
              hands-on approach, the program provides ample opportunities for
              practical application through live projects. This practical
              exposure proves instrumental, enabling participants to not only
              comprehend theoretical concepts but also implement them in
              real-world scenarios. Moreover, the program fosters a supportive
              learning environment where participants receive personalized
              guidance from experienced mentors. This mentorship plays a pivotal
              role in nurturing their skills and confidence, paving the way for
              a seamless transition into the tech industry. By the end of the
              program, participants emerge not only proficient in programming
              but also equipped with a profound understanding of industry
              practices, positioning them as competitive and skilled
              professionals in the ever-evolving field of computer science and
              software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
