import React, { useState, useRef, useEffect } from 'react';
import { mockData } from '../../mock';

const SkillsApp = () => {
  const [lines, setLines] = useState([
    { type: 'output', text: 'Welcome to Boharey Portfolio Terminal' },
    { type: 'output', text: 'Type "help" to see available commands\n' }
  ]);

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showSkills, setShowSkills] = useState(false);
  const [input, setInput] = useState('');

  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  // ---------------- Commands ----------------

  const availableCommands = [
    { cmd: 'help', desc: 'Show available commands' },
    { cmd: 'whoami', desc: 'Display user information' },
    { cmd: 'about', desc: 'Show about information' },
    { cmd: 'skills', desc: 'List all skills and expertise' },
    { cmd: 'experience', desc: 'Show work experience' },
    { cmd: 'clear', desc: 'Clear terminal screen' }
  ];

  // ---------------- Effects ----------------

  useEffect(() => {
    terminalRef.current?.scrollTo(
      0,
      terminalRef.current.scrollHeight
    );
  }, [lines, showSkills]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ---------------- Command Logic ----------------

  const executeCommand = (command) => {
    const cmd = command.trim().toLowerCase();

    setLines(prev => [...prev, { type: 'command', text: `$ ${command}` }]);

    switch (cmd) {
      case 'help':
        setLines(prev => [
          ...prev,
          { type: 'output', text: '\nAvailable Commands:' },
          ...availableCommands.map(c => ({
            type: 'output',
            text: `  ${c.cmd.padEnd(15)} - ${c.desc}`
          })),
          { type: 'output', text: '' }
        ]);
        break;

      case 'whoami':
        setLines(prev => [
          ...prev,
          { type: 'output', text: mockData.user?.name || 'boharey' },
          { type: 'output', text: '' }
        ]);
        break;

      case 'about':
        setLines(prev => [
          ...prev,
          { type: 'output', text: mockData.user?.title },
          { type: 'output', text: '' }
        ]);
        break;

      case 'skills':
        setShowSkills(true);
        setLines(prev => [
          ...prev,
          { type: 'output', text: '\nSkills & Expertise:' },
          { type: 'output', text: '─────────────────────────────────────\n' }
        ]);
        break;

      case 'experience':
        const workExp = mockData.timeline.filter(t => t.type === 'work');
        setLines(prev => [
          ...prev,
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
          { type: 'output', text: 'Type "help" to see available commands\n' }
        ]);
        setShowSkills(false);
        break;

      case '':
        setLines(prev => [...prev, { type: 'output', text: '' }]);
        break;

      default:
        setLines(prev => [
          ...prev,
          { type: 'output', text: `Command not found: ${cmd}` },
          { type: 'output', text: 'Type "help" for available commands\n' }
        ]);
    }
  };

  // ---------------- Autocomplete ----------------

  const handleAutocomplete = () => {
    const value = input.trim();
    if (!value) return;

    const matches = availableCommands
      .map(c => c.cmd)
      .filter(cmd => cmd.startsWith(value));

    if (matches.length === 1) {
      setInput(matches[0]);
    }

    if (matches.length > 1) {
      setLines(prev => [
        ...prev,
        { type: 'output', text: '' },
        ...matches.map(m => ({ type: 'output', text: m })),
        { type: 'output', text: '' }
      ]);
    }
  };

  // ---------------- Keyboard Handling ----------------

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        setHistory(prev =>
          prev[prev.length - 1] === input ? prev : [...prev, input]
        );
      }
      setHistoryIndex(-1);
      executeCommand(input);
      setInput('');
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;

      const idx =
        historyIndex === -1
          ? history.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(idx);
      setInput(history[idx]);
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!history.length) return;

      const idx =
        historyIndex === history.length - 1 ? -1 : historyIndex + 1;

      setHistoryIndex(idx);
      setInput(idx === -1 ? '' : history[idx]);
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      handleAutocomplete();
    }
  };

  // ---------------- UI ----------------

  return (
    <div
      ref={terminalRef}
      className="h-full bg-[#300A24] text-white font-mono text-sm p-4 overflow-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="mb-4 pb-2 border-b border-purple-700/30">
        <div className="text-green-400">boharey@portfolio:~$</div>
        <div className="text-gray-400 text-xs mt-1">
          Terminal - Skills & Expertise
        </div>
      </div>

      <div className="space-y-1">
        {lines.map((line, idx) => (
          <div
            key={idx}
            className={line.type === 'command' ? 'text-green-400' : 'text-white/90'}
          >
            {line.text}
          </div>
        ))}
      </div>

      {showSkills && (
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockData.skills.map((group, idx) => (
            <div
              key={idx}
              className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/30"
            >
              <h3 className="text-[#E95420] font-bold mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded border border-green-500/30 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center mt-2">
        <span className="text-green-400 mr-2">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white caret-green-400"
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default SkillsApp;
