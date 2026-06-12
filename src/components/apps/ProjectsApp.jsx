import React, { useState } from 'react';
import { mockData } from '../../mock';
import { ExternalLink, Github, Search } from 'lucide-react';

const ProjectsApp = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = mockData.projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="h-full overflow-auto bg-white dark:bg-[#1E1E1E]">
      {/* Browser Header */}
      <div className="bg-gray-100 dark:bg-[#2C2C2C] border-b border-gray-300 dark:border-gray-700 p-3 sticky top-0 z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:opacity-80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:opacity-80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:opacity-80"></div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] rounded px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 font-mono">
          boharey.dev/projects
        </div>
      </div>

      {/* Projects Content */}
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Projects</h1>
          <p className="text-gray-600 dark:text-gray-400">A collection of my recent work and contributions</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects by name, description, or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-[#2C2C2C] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:border-[#E95420] focus:outline-none transition-colors"
            aria-label="Search projects"
          />
        </div>

        {/* Project Count */}
        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredProjects.length} of {mockData.projects.length} projects
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-[#2C2C2C] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-[#E95420] transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#E95420] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#E95420]/10 text-[#E95420] rounded text-xs font-medium transition-colors hover:bg-[#E95420]/20"
                        title={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      className="flex-1 bg-[#E95420] hover:bg-[#DD4814] text-white rounded px-3 py-2 flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </a>
                    <a
                      href={project.github}
                      className="bg-gray-800 hover:bg-gray-700 text-white rounded px-3 py-2 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      title="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">No projects found</p>
            <p className="text-gray-500 dark:text-gray-500">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsApp;
