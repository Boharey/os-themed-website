import React, { useState } from 'react';
import { mockData } from '../../mock';

const SkillsApp = () => {
  const [lines, setLines] = useState([
    { type: 'output', text: 'Welcome to Boharey Portfolio Terminal' },
    { type: 'output', text: 'Type "help" to see available commands\n' }
  ]);
  const [showSkills, setShowSkills] = useState(false);

  const availableCommands = [
    { cmd: 'help', desc: 'Show available commands' },
    { cmd: 'whoami', desc: 'Display user information' },
    { cmd: 'about', desc: 'Show about information' },
    { cmd: 'skills', desc: 'List all skills and expertise' },
    { cmd: 'experience', desc: 'Show work experience' },
    { cmd: 'clear', desc: 'Clear terminal screen' }
  ];

  const executeCommand = (command) => {
    const cmd = command.trim().toLowerCase();
    
    // Add command to history
    setLines(prev => [...prev, { type: 'command', text: `$ ${command}` }]);

    switch(cmd) {
      case 'help':
        setLines(prev => [...prev, 
          { type: 'output', text: '\nAvailable Commands:' },
          ...availableCommands.map(c => ({ 
            type: 'output', 
            text: `  ${c.cmd.padEnd(15)} - ${c.desc}` 
          })),
          { type: 'output', text: '' }
        ]);
        break;

      case 'whoami':
        const whoamiCmd = mockData.terminalCommands.find(c => c.command === 'whoami');
        setLines(prev => [...prev, 
          { type: 'output', text: whoamiCmd?.output || 'boharey' },
          { type: 'output', text: '' }
        ]);
        break;

      case 'about':
        const aboutCmd = mockData.terminalCommands.find(c => c.command === 'cat about.txt');
        setLines(prev => [...prev, 
          { type: 'output', text: aboutCmd?.output || mockData.user.title },
          { type: 'output', text: '' }
        ]);
        break;

      case 'skills':
        setShowSkills(true);
        setLines(prev => [...prev, 
          { type: 'output', text: '\nSkills & Expertise:' },
          { type: 'output', text: '─────────────────────────────────────\n' }
        ]);
        break;

      case 'experience':
        const workExp = mockData.timeline.filter(t => t.type === 'work');
        setLines(prev => [...prev, 
          { type: 'output', text: '\nWork Experience:' },
          { type: 'output', text: '─────────────────────────────────────' },
          ...workExp.map(exp => ({ 
            type: 'output', 
            text: `${exp.title} @ ${exp.company} (${exp.period})` 
          })),
          { type: 'output', text: '' }
        ]);
        break;

      case 'clear':
        setLines([
          { type: 'output', text: 'Welcome to Boharey Portfolio Terminal' },
          { type: 'output', text: 'Type "help" to see available commands\n' }
        ]);
        setShowSkills(false);
        break;

      case '':
        setLines(prev => [...prev, { type: 'output', text: '' }]);
        break;

      default:
        setLines(prev => [...prev, 
          { type: 'output', text: `Command not found: ${cmd}` },
          { type: 'output', text: 'Type "help" for available commands\n' }
        ]);
    }
  };

  const handleCommandClick = (cmd) => {
    executeCommand(cmd);
  };

  return (
    <div className="h-full bg-[#300A24] text-white font-mono text-sm p-4 overflow-auto">
      {/* Terminal Header */}
      <div className="mb-4 pb-2 border-b border-purple-700/30">
        <div className="text-green-400">boharey@portfolio:~$</div>
        <div className="text-gray-400 text-xs mt-1">Terminal - Skills & Expertise</div>
      </div>

      {/* Terminal Output */}
      <div className="space-y-1 mb-4">
        {lines.map((line, idx) => (
          <div key={idx} className={`${
            line.type === 'command' ? 'text-green-400' : 'text-white/90'
          }`}>
            {line.text}
          </div>
        ))}
      </div>

      {/* Skills Grid - Shows after skills command */}
      {showSkills && (
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockData.skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/30">
                <h3 className="text-[#E95420] font-bold mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-green-500/20 text-green-300 rounded border border-green-500/30 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-white/90"></div>
        </div>
      )}

      {/* Command Buttons */}
      <div className="mt-4 pt-4 border-t border-purple-700/30">
        <div className="text-gray-400 text-xs mb-3">Click a command to execute:</div>
        <div className="flex flex-wrap gap-2">
          {availableCommands.map((cmd, idx) => (
            <button
              key={idx}
              onClick={() => handleCommandClick(cmd.cmd)}
              className="px-4 py-2 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-700/50 rounded text-green-400 text-sm transition-colors hover:border-green-500/50"
            >
              {cmd.cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;
