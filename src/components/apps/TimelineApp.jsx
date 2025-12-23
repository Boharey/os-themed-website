import React from 'react';
import { mockData } from '../../mock';
import { Briefcase, GraduationCap, ExternalLink, Star } from 'lucide-react';

const TimelineApp = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto overflow-auto h-full">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Career Timeline</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">My professional journey and education</p>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E95420] to-[#DD4814]"></div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {mockData.timeline.map((item) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            const bgColor = item.type === 'work' ? 'bg-[#E95420]' : 'bg-blue-500';

            return (
              <div key={item.id} className="relative pl-20">
                {/* Icon */}
                <div className={`absolute left-0 w-16 h-16 ${bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content Card */}
                <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-start gap-1">
                      {item.title}
                      {item.period.includes('Present') && (
                        <Star className="w-4 h-4 text-[#E95420] mt-1" fill="currentColor" />
                      )}
                    </h3>
                    <span className="text-sm font-medium text-[#E95420] bg-[#E95420]/10 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-3 flex items-center gap-1">
                    <a
                      href={item.company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#E95420] hover:underline transition-colors inline-flex items-center gap-1"
                    >
                      {item.company.name}
                      <ExternalLink size={14} />
                    </a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineApp;
