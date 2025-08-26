import React from "react";
import {
  Cloud,
  Server,
  Code,
  Database,
  GitBranch,
  Monitor,
  Shield,
  Zap,
  Container,
  Settings,
} from "lucide-react";
import Navbar from "./Navbar";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "AWS", level: 85, color: "bg-orange-500" },
        { name: "Azure", level: 75, color: "bg-blue-500" },
        { name: "Google Cloud", level: 70, color: "bg-green-500" },
        { name: "DigitalOcean", level: 80, color: "bg-blue-400" },
      ],
    },
    {
      title: "DevOps Tools",
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: "Docker", level: 90, color: "bg-blue-600" },
        { name: "Kubernetes", level: 85, color: "bg-indigo-500" },
        { name: "Jenkins", level: 80, color: "bg-red-500" },
        { name: "GitLab CI/CD", level: 85, color: "bg-orange-600" },
      ],
    },
    {
      title: "Infrastructure as Code",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Terraform", level: 88, color: "bg-purple-500" },
        { name: "Ansible", level: 82, color: "bg-red-600" },
        { name: "CloudFormation", level: 75, color: "bg-orange-500" },
        { name: "Pulumi", level: 65, color: "bg-indigo-400" },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 90, color: "bg-yellow-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-400" },
        { name: "Go", level: 75, color: "bg-cyan-500" },
        { name: "Bash", level: 88, color: "bg-gray-600" },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 85, color: "bg-blue-600" },
        { name: "MySQL", level: 80, color: "bg-orange-500" },
        { name: "MongoDB", level: 75, color: "bg-green-500" },
        { name: "Redis", level: 82, color: "bg-red-500" },
      ],
    },
    {
      title: "Monitoring & Security",
      icon: <Shield className="w-8 h-8" />,
      skills: [
        { name: "Prometheus", level: 85, color: "bg-orange-500" },
        { name: "Grafana", level: 80, color: "bg-orange-400" },
        { name: "ELK Stack", level: 78, color: "bg-yellow-600" },
        { name: "Vault", level: 70, color: "bg-gray-700" },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-200 to-indigo-300">
      <Navbar />
      <div className="min-h-screen  py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive expertise in cloud technologies, DevOps practices,
              and modern development tools to build scalable, reliable, and
              secure infrastructure solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg text-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animation: `slideIn 1.5s ease-out ${
                              skillIndex * 0.1
                            }s both`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Fast Deployment
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automated CI/CD pipelines for rapid, reliable deployments
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Container className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Containerization
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Expert in Docker and Kubernetes orchestration
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Monitoring
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive observability and performance tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              width: 0%;
            }
            to {
              width: var(--target-width);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Skills;
