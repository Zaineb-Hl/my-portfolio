import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "IoT Monitoring Platform",
    description:
      "A full-stack web application for managing and supervising embedded systems, built during my end-of-studies internship. Features role-based access control, a per-sensor rule engine for threshold monitoring and automatic alerts, measurement quality validation before persistence, and an in-memory caching layer for fast access to recent data.",
    image: "/projects/iot-monitor.png",
    tags: ["Angular 19", "Spring Boot", "Spring Security", "JWT", "Hazelcast", "MySQL"],
    githubBackend: "https://github.com/Zaineb-Hl/Embedded-Systems-Management-Web-Application---Backend",
    githubFrontend: "https://github.com/Zaineb-Hl/Embedded-Systems-Management-Web-Application---Frontend",
  },
  {
    title: "Yummy Restaurant",
    description:
      "A full-stack restaurant management application with modules for dishes, chefs, users, testimonials, and reservations, including a full reservation tracking and status system. Secured with JWT authentication and role-based access for Admin and Client users.",
    image: "/projects/yummy-restaurant.png",
    tags: ["Angular 19", "Spring Boot", "Spring Security", "Hibernate/JPA", "MySQL"],
    githubBackend: "https://github.com/Zaineb-Hl/Yummy-restaurant---Backend",
    githubFrontend: "https://github.com/Zaineb-Hl/Yummy-restaurant---Frontend",
  },
  {
    title: "Deluxe Hotels",
    description:
      "A hotel booking web application with separate Admin and User interfaces, secure JWT authentication, image uploads via Multer and Cloudinary, and real-time user notifications.",
    image: "/projects/deluxe-hotels.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "",
    githubBackend: "https://github.com/Zaineb-Hl/Hotel-Reservation-Backend",
    githubFrontend: "",
  },
  {
    title: "Car Rental Management API",
    description:
      "A REST API for managing a car rental business — clients, cars, and reservations, with search by client or by car. Includes a business-rule guard preventing deletion of cars tied to active reservations.",
    image: "/projects/car-rental-api.png",
    tags: ["Node.js", "Express", "MySQL"],
    link: "#",
    githubBackend: "https://github.com/Zaineb-Hl/gestion-voitures-api",
    githubFrontend: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubBackend}
                    title="Backend repo"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      title="Frontend repo"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};