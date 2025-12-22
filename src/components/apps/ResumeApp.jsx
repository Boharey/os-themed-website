import React from 'react';
import { Download, FileText } from 'lucide-react';
import { mockData } from '../../mock';

const ResumeApp = () => {
  const handleDownload = () => {
    alert('Resume download would be triggered here.');
  };

  return (
    // 🔑 ROOT CONTAINER: mobile = fullscreen, desktop = normal
    <div
      className="
        fixed inset-0 md:relative
        h-[100dvh] md:h-full
        flex flex-col
        overflow-hidden md:overflow-visible
      "
    >
      {/* Toolbar (sticky on mobile) */}
      <div
        className="
          bg-gray-100 dark:bg-[#2C2C2C]
          border-b border-gray-300 dark:border-gray-700
          p-3 flex items-center justify-between
          sticky top-0 z-10
        "
      >
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Resume — {mockData.user.name}
          </span>
        </div>

        <button
          onClick={handleDownload}
          className="
            bg-[#E95420] hover:bg-[#DD4814]
            text-white px-4 py-2 rounded
            flex items-center gap-2
            transition-colors text-sm font-medium
          "
        >
          <Download className="w-4 h-4" />
          Download CV
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 bg-gray-50 dark:bg-[#1E1E1E]">
        <div
          className="
            max-w-4xl mx-auto
            bg-white dark:bg-[#2C2C2C]
            shadow-lg rounded-lg
            p-6 md:p-12
          "
        >
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b-2 border-[#E95420]">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {mockData.user.name}
            </h1>

            <p className="text-lg md:text-xl text-[#E95420] font-medium mb-4">
              {mockData.user.title}
            </p>

            <div
              className="
                flex flex-col md:flex-row
                items-center justify-center
                gap-2 md:gap-6
                text-sm text-gray-600 dark:text-gray-400
              "
            >
              <span>{mockData.user.email}</span>
              <span className="hidden md:inline">•</span>
              <span>{mockData.user.phone}</span>
              <span className="hidden md:inline">•</span>
              <span>{mockData.user.location}</span>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2
              className="
                text-xl md:text-2xl font-bold
                text-gray-900 dark:text-white
                mb-3 flex items-center gap-2
              "
            >
              <div className="w-2 h-6 md:h-8 bg-[#E95420] rounded" />
              Professional Summary
            </h2>

            <p
              className="
                text-gray-700 dark:text-gray-300
                leading-relaxed text-sm md:text-base
              "
            >
              {mockData.user.bio}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2
              className="
                text-xl md:text-2xl font-bold
                text-gray-900 dark:text-white
                mb-4 flex items-center gap-2
              "
            >
              <div className="w-2 h-6 md:h-8 bg-[#E95420] rounded" />
              Work Experience
            </h2>

            <div className="space-y-6">
              {mockData.timeline
                .filter(item => item.type === 'work')
                .map(item => (
                  <div key={item.id}>
                    <div
                      className="
                        flex flex-col md:flex-row
                        md:justify-between md:items-start
                        gap-1 mb-1
                      "
                    >
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.company}
                        </p>
                      </div>

                      <span className="text-sm text-[#E95420] font-medium">
                        {item.period}
                      </span>
                    </div>

                    <p
                      className="
                        text-gray-700 dark:text-gray-300
                        text-sm md:text-base leading-relaxed
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2
              className="
                text-xl md:text-2xl font-bold
                text-gray-900 dark:text-white
                mb-4 flex items-center gap-2
              "
            >
              <div className="w-2 h-6 md:h-8 bg-[#E95420] rounded" />
              Education
            </h2>

            <div className="space-y-6">
              {mockData.timeline
                .filter(item => item.type === 'education')
                .map(item => (
                  <div key={item.id}>
                    <div
                      className="
                        flex flex-col md:flex-row
                        md:justify-between md:items-start
                        gap-1 mb-1
                      "
                    >
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.company}
                        </p>
                      </div>

                      <span className="text-sm text-[#E95420] font-medium">
                        {item.period}
                      </span>
                    </div>

                    <p
                      className="
                        text-gray-700 dark:text-gray-300
                        text-sm md:text-base leading-relaxed
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2
              className="
                text-xl md:text-2xl font-bold
                text-gray-900 dark:text-white
                mb-4 flex items-center gap-2
              "
            >
              <div className="w-2 h-6 md:h-8 bg-[#E95420] rounded" />
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockData.skills.map((group, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    {group.category}
                  </h4>
                  <p
                    className="
                      text-gray-700 dark:text-gray-300
                      text-sm leading-relaxed
                    "
                  >
                    {group.items.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;
