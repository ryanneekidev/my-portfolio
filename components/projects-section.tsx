import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Users,
  Smartphone,
  Code,
  TreePine,
  Hash,
  LinkIcon,
  Search,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "RLine",
      description:
        "A full-stack social media platform where users can create posts, interact with content, and engage with the community. Built with modern web technologies and responsive design principles.",
      image: "/rline.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "CSS3",
        "Responsive Design",
      ],
      features: [
        "User authentication and profiles",
        "Real-time post creation and interaction",
        "Mobile-responsive design",
        "Social engagement features",
      ],
      githubUrl: "https://github.com/ryanneekidev/",
      liveUrl: "https://rline.ryanneeki.xyz/",
      category: "Full Stack",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const dsaProjects = [
    {
      title: "Linked Lists Implementation",
      description:
        "Custom implementation of singly and doubly linked lists with various operations including insertion, deletion, and traversal methods.",
      technologies: ["JavaScript", "Data Structures", "Algorithms"],
      algorithms: ["Traversal", "Insertion", "Deletion"],
      githubUrl: "https://github.com/ryanneekidev/linked-list-js",
      icon: <LinkIcon className="h-5 w-5" />,
    },
    {
      title: "Hash Maps & Hash Tables",
      description:
        "Efficient hash map implementation with collision handling, dynamic resizing, and optimized lookup operations.",
      technologies: ["JavaScript", "Hash Functions", "Collision Resolution"],
      algorithms: ["Hashing", "Linear Probing", "Chaining"],
      githubUrl: "https://github.com/ryanneekidev/hash-map-js",
      icon: <Hash className="h-5 w-5" />,
    },
    {
      title: "Binary Search Trees",
      description:
        "Complete BST implementation with insertion, deletion, search operations, and tree traversal algorithms.",
      technologies: ["JavaScript", "Tree Structures", "Recursion"],
      algorithms: ["BFS", "DFS", "In-order", "Pre-order", "Post-order"],
      githubUrl: "https://github.com/ryanneekidev/linked-list-js",
      icon: <TreePine className="h-5 w-5" />,
    },
    {
      title: "Graph Traversal Algorithms",
      description:
        "Implementation of Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms for graph traversal and pathfinding.",
      technologies: ["JavaScript", "Graph Theory", "Queue", "Stack"],
      algorithms: ["BFS", "DFS", "Pathfinding"],
      githubUrl: "https://github.com/ryanneekidev/linked-list-js",
      icon: <Search className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my development work, from full-stack applications to
              data structures and algorithms implementations.
            </p>
          </div>
        </div>

        {/* Main Projects */}
        <div className="mx-auto grid max-w-6xl gap-6 py-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      {project.icon}
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Smartphone className="h-4 w-4 mr-2" />
                        Key Features
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 mt-6">
                    <Button asChild size="sm">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* DSA Projects Section */}
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
              <Code className="h-6 w-6 mr-2" />
              Data Structures & Algorithms
            </h3>
            <p className="text-muted-foreground">
              Implementations of fundamental computer science concepts and
              algorithms in JavaScript
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {dsaProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {project.icon}
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">
                      Algorithms Implemented
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.algorithms.map((algorithm, algIndex) => (
                        <Badge
                          key={algIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {algorithm}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild size="sm" className="w-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Implementation
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button asChild size="lg">
            <a
              href="https://github.com/ryanneekidev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
