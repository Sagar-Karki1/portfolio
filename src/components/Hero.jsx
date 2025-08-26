import { Download, Eye } from "lucide-react";
import profileImage from "../assets/profile.png";

export default function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-br from-slate-600 to-blue-500 bg-clip-text text-transparent">
                Cloud Engineer
              </span>
              <br />
              & DevOps
              <br />
              Associate
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Building scalable infrastructure and automating deployment
              pipelines for modern applications. Passionate about cloud
              technologies and continuous integration.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 font-medium shadow-lg hover:shadow-xl">
                <Download size={20} />
                Download CV
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2 font-medium">
                <Eye size={20} />
                View Projects
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={profileImage}
                alt="DevOps Engineer working with multiple monitors showing cloud infrastructure dashboards"
                className="w-full h-auto object-cover"
              />

              {/* Available Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">
                    Available for hire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
