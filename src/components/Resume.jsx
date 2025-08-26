import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Cloud,
  Terminal,
  Database,
  GitBranch,
} from "lucide-react";
import Navbar from "./Navbar";

export default function Resume() {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-indigo-300">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-gray-100 shadow-2xl rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Motivated and detail-oriented aspiring DevOps Engineer with
              hands-on experience in infrastructure automation using Terraform
              and AWS services. Seeking a DevOps Internship to apply my skills
              in cloud infrastructure, CI/CD, and infrastructure as code in a
              real-world environment.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Terminal className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-800">DevOps Tools</h3>
                </div>
                <p className="text-gray-700">
                  Terraform, Git, GitHub, GitHub Actions
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Cloud className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-800">
                    Cloud Platforms
                  </h3>
                </div>
                <p className="text-gray-700">AWS, Azure</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <GitBranch className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-800">CI/CD</h3>
                </div>
                <p className="text-gray-700">
                  GitHub Actions (basic), Shell scripting
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Database className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-800">Networking</h3>
                </div>
                <p className="text-gray-700">
                  Subnets, Route Tables, NAT, Internet Gateway
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">
                  Operating Systems
                </h4>
                <p className="text-sm text-gray-600">
                  Linux (Amazon Linux, Ubuntu), Windows
                </p>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">
                  Version Control
                </h4>
                <p className="text-sm text-gray-600">Git, GitHub</p>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">Scripting</h4>
                <p className="text-sm text-gray-600">Bash</p>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-1">
                Additional Skills
              </h4>
              <p className="text-sm text-gray-600">
                Docker (basic), Ansible (beginner)
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Projects
            </h2>
            <div className="bg-white border-l-4 border-blue-600 shadow-md rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  AWS Infrastructure Automation with Terraform
                </h3>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    DevOps Engineer
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Tools:</strong> Terraform, AWS (EC2, VPC, IGW, Route
                  Tables), Git
                </p>
              </div>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Created a custom VPC (10.25.0.0/16) with two public subnets
                    in us-east-1a
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Automated provisioning of Internet Gateway, Route Table, and
                    subnet associations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Defined security groups to allow SSH and ICMP traffic and
                    all outbound traffic
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Fetched the latest Amazon Linux 2023 AMI dynamically using
                    Terraform data sources
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Deployed a t2.micro EC2 instance with a key pair and
                    attached it to the public subnet
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Applied best practices in tagging, modular design, and
                    infrastructure security
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Education & Credentials
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Cloud Architecture and Administration
                    </h3>
                    <p className="text-gray-600">
                      Seneca College | Toronto, ON
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded">
                      2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Cyber Security & Threat Management
                    </h3>
                    <p className="text-gray-600">
                      Seneca College | Toronto, ON
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                      2024
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Bachelors in Computer Science & Information Technology
                    </h3>
                    <p className="text-gray-600">
                      Tribhuwan University | Kathmandu, Nepal
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded">
                      2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
