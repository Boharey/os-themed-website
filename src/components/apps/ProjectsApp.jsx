import React from 'react';
import { mockData } from '../../mock';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsApp = () => {
  return (
    <div className="h-full overflow-auto">
      {/* Browser Header */}
      <div className="bg-gray-100 dark:bg-[#2C2C2C] border-b border-gray-300 dark:border-gray-700 p-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] rounded px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400">
          boharey.dev/projects
        </div>
      </div>

      {/* Projects Content */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">A collection of my recent work and contributions</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockData.projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-[#2C2C2C] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#E95420]/10 text-[#E95420] rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    className="flex-1 bg-[#E95420] hover:bg-[#DD4814] text-white rounded px-3 py-2 flex items-center justify-center gap-2 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded px-3 py-2 flex items-center justify-center transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsApp;
