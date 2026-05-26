import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Mypcot Infotech Pvt Ltd",
    duration: "Apr 2025 – Dec 2025",

    description:
      "Worked on scalable full-stack applications, multilingual systems, real-time communication, and high-performance backend solutions.",

    responsibilities: [
  "Built and maintained full-stack applications using Node.js, React.js, and Express.js with testing using Jest and code quality analysis through SonarQube",
  
  "Designed multilingual translation systems with optimized database schema management",

  "Worked with MongoDB, MySQL, and PostgreSQL for scalable database solutions",

  "Developed real-time chat using Redis adapters, tested for 10,000 concurrent users, and implemented reverse proxy routing across Dockerized services",
],

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS",
      "Docker",
      "Jest",
      "SonarQube",

    ],
  },

  {
  role: "MERN Stack Developer",
  company: "Freelance Project",
  duration: "Jan 2025 – Mar 2025",

  description:
    "Worked with a team of developers to build and successfully deliver a fully functional job portal for a client with scalable backend APIs and efficient state management.",

  responsibilities: [
    "Developed a job portal application for a client with a team of five developers, delivering features aligned with client requirements",

    "Built responsive applications using React.js, Tailwind CSS, and Redux for efficient state management",

    "Developed RESTful APIs using Node.js, Express.js, and MongoDB",
  ],

  techStack: [
    "React.js",
    "Redux",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
  ],
},
];

const Experience = () => {
  return (
    <section className="py-20 bg-muted/30" id="experience">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience building scalable full-stack applications, real-time systems, and production-ready web solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

              <div className="md:ml-20 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>

                      {exp.company === "Mypcot Infotech Pvt Ltd" ? (
  <a
    href="https://mypcot.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 font-medium hover:underline"
  >
    {exp.company}
  </a>
) : (
  <p className="text-primary font-medium">
    {exp.company}
  </p>
)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Key Responsibilities
                  </h4>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />

                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;