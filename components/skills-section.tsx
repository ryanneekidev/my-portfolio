import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Cloud,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Docker", "Vercel", "GitHub Actions"],
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="h-5 w-5" />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "Jasmine",
        "Webpack",
        "Vite",
      ],
    },
    {
      title: "Design",
      icon: <Palette className="h-5 w-5" />,
      skills: ["Responsive Design", "Prototyping", "Wireframing"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technologies I Work With
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive overview of the technologies, frameworks, and
              tools I use to build modern applications and software.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  {category.icon}
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Problem Solving", icon: <Code2 className="h-4 w-4" /> },
              {
                name: "Database Design",
                icon: <Database className="h-4 w-4" />,
              },
              { name: "API Development", icon: <Server className="h-4 w-4" /> },
              {
                name: "Version Control",
                icon: <GitBranch className="h-4 w-4" />,
              },
            ].map((competency, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                {competency.icon}
                <span className="text-sm font-medium">{competency.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
