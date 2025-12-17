import React from 'react';
import { Download, FileText } from 'lucide-react';
import { mockData } from '../../mock';

const ResumeApp = () => {
  const handleDownload = () => {
    // Placeholder for download functionality
    alert('Resume download would be triggered here. Please upload your actual CV file.');
  };

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-gray-100 dark:bg-[#2C2C2C] border-b border-gray-300 dark:border-gray-700 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Resume - {mockData.user.name}
          </span>
        </div>
        <button
          onClick={handleDownload}
          className="bg-[#E95420] hover:bg-[#DD4814] text-white px-4 py-2 rounded flex items-center gap-2 transition-colors text-sm font-medium"
        >
          <Download className="w-4 h-4" />
          Download CV
        </button>
      </div>

      {/* Resume Content */}
      <div className="flex-1 overflow-auto p-8 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#2C2C2C] shadow-lg rounded-lg p-12">
          {/* Header */}
          <div className="text-center mb-8 pb-8 border-b-2 border-[#E95420]">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {mockData.user.name}
            </h1>
            <p className="text-xl text-[#E95420] font-medium mb-4">{mockData.user.title}</p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <span>{mockData.user.email}</span>
              <span>•</span>
              <span>{mockData.user.phone}</span>
              <span>•</span>
              <span>{mockData.user.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#E95420] rounded"></div>
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {mockData.user.bio}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#E95420] rounded"></div>
              Work Experience
            </h2>
            <div className="space-y-6">
              {mockData.timeline.filter(item => item.type === 'work').map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                    </div>
                    <span className="text-sm text-[#E95420] font-medium">{item.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#E95420] rounded"></div>
              Education
            </h2>
            <div className="space-y-6">
              {mockData.timeline.filter(item => item.type === 'education').map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                    </div>
                    <span className="text-sm text-[#E95420] font-medium">{item.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#E95420] rounded"></div>
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {mockData.skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{skillGroup.category}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {skillGroup.items.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;
