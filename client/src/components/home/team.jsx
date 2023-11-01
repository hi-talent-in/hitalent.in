const Team = () => {
  const persons = [
    {
      image: "/images/team/madan.jpg",
      name: "Madan Meena",
      linkedin: "https://www.linkedin.com/in/mmmiitr/",
      role: "Acting CEO",
    },
    {
      image: "/images/team/iliyas.jpg",
      name: "Iliyas Shaik",
      linkedin: "https://www.linkedin.com/in/s-iliyas/",
      role: "Admin",
    },
  ];

  return (
    <section id="team" className="min-h-[30rem]">
      <div className="pt-20"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
          Our Team
        </h1>
        <br />
        <div className="items-center justify-center flex flex-wrap gap-5">
          {persons.map((person, index) => (
            <div
              className="min-h-[15rem] min-w-[10rem] rounded-md shadow-xl shadow-sky-200 p-4 flex flex-col items-center justify-center"
              key={index}
            >
              <img
                src={person.image}
                alt={person.name}
                className="rounded-full mx-auto"
                width={100}
                height={100}
              />
              <h2 className="text-lg font-semibold text-center py-2 text-sky-800">
                {person.name}
              </h2>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-700 underline text-sm"
              >
                LinkedIn
              </a>
              <br />
              <p className="text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
