import React, { useState, useRef, useEffect } from "react";
import { mockData } from "../../mock";

const SkillsApp = () => {
  const USER = "boharey";
  const HOST = "portfolio";
  const PROMPT = `${USER}@${HOST}:~$`;

  const [lines, setLines] = useState([
    { type: "output", text: "Welcome to Ubuntu Portfolio Terminal" },
    { type: "output", text: `Type "help" to get started\n` },
  ]);

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showSkills, setShowSkills] = useState(false);

  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  // ---------------- Auto scroll ----------------
  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [lines, showSkills]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ---------------- System info (neofetch) ----------------
  const getSystemInfo = async () => {
  let ip = "Unavailable";

  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    ip = data.ip;
  } catch (e) {}

  return {
    ip,
    os: navigator.userAgentData?.platform || navigator.platform,
    browser: navigator.userAgent,
    language: navigator.language,
    screen: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    memory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "N/A",
  };
};

const pad = (label, value) =>
  `${label.padEnd(12)} ${value}`;

const neofetch = async () => {
  const info = await getSystemInfo();

  return [
    "             .-/+oossssoo+/-.",
    "         `:+ssssssssssssssssss+:`",
    "      -+ssssssssssssssssssyyssss+-",
    "    .ossssssssssssssssssdMMMNysssso.",
    "",

    pad("OS:", "Ubuntu Portfolio"),
    pad("Host:", HOST),
    pad("User:", USER),
    pad("Kernel:", "React 18"),
    pad("Browser:", info.browser.split(" ")[0]),
    pad("OS Type:", info.os),
    pad("Screen:", info.screen),
    pad("Language:", info.language),
    pad("Timezone:", info.timezone),
    pad("Memory:", info.memory),
    pad("IP:", info.ip),
    "",
  ];
};

  // ---------------- Commands ----------------
  const availableCommands = [
    { cmd: "help", desc: "Show available commands" },
    { cmd: "whoami", desc: "Show user" },
    { cmd: "about", desc: "About me" },
    { cmd: "skills", desc: "Show skills" },
    { cmd: "experience", desc: "Show experience" },
    { cmd: "neofetch", desc: "System information" },
    { cmd: "clear", desc: "Clear terminal" },
  ];

  const getCommandSuggestions = (value) => {
  if (!value) return [];

  return availableCommands
    .map((c) => c.cmd)
    .filter((cmd) => cmd.startsWith(value.toLowerCase()));
  };

  const executeCommand = async (command) => {
    const cmd = command.trim().toLowerCase();

    setLines((prev) => [
      ...prev,
      { type: "command", text: `${PROMPT} ${command}` },
    ]);

    switch (cmd) {
      case "help":
        setLines((prev) => [
          ...prev,
          { type: "output", text: "\nAvailable commands:\n" },
          ...availableCommands.map((c) => ({
            type: "output",
            text: `${c.cmd.padEnd(15)} - ${c.desc}`,
          })),
          { type: "output", text: "" },
        ]);
        break;

      case "whoami":
        setLines((prev) => [
          ...prev,
          { type: "output", text: USER },
          { type: "output", text: "" },
        ]);
        break;

      case "about":
        setLines((prev) => [
          ...prev,
          { type: "output", text: mockData.user?.title || "Developer" },
          { type: "output", text: "" },
        ]);
        break;

      case "skills":
        setShowSkills(true);
        setLines((prev) => [
          ...prev,
          { type: "output", text: "\nSkills loaded...\n" },
        ]);
        break;

      case "experience":
        const work = mockData.timeline.filter((t) => t.type === "work");

        setLines((prev) => [
          ...prev,
          { type: "output", text: "\nExperience:\n" },
          ...work.map((e) => ({
            type: "output",
            text: `${e.title} @ ${e.company} (${e.period})`,
          })),
          { type: "output", text: "" },
        ]);
        break;

      case "neofetch":
        const data = await neofetch();

        setLines((prev) => [
          ...prev,
          { type: "output", text: "\n" + data.join("\n") },
        ]);
        break;

      case "clear":
        setLines([
          { type: "output", text: "Type \"help\" to get started\n" },
        ]);
        setShowSkills(false);
        break;

      case "":
        break;

      default:
        setLines((prev) => [
          ...prev,
          { type: "output", text: `command not found: ${cmd}` },
          { type: "output", text: "" },
        ]);
    }
  };

  // ---------------- Keyboard ----------------
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        setHistory((prev) =>
          prev[prev.length - 1] === input ? prev : [...prev, input]
        );
      }

      setHistoryIndex(-1);
      executeCommand(input);
      setInput("");
    }

    if (e.key === "Tab") {
  e.preventDefault();

  const value = input.trim();
  const matches = getCommandSuggestions(value);

  if (matches.length === 1) {
    setInput(matches[0]);
  } else if (matches.length > 1) {
    setLines((prev) => [
      ...prev,
      { type: "output", text: "" },
      { type: "output", text: matches.join("   ") },
      { type: "output", text: "" },
    ]);
  }
  }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;

      const idx =
        historyIndex === -1 ? history.length - 1 : Math.max(historyIndex - 1, 0);

      setHistoryIndex(idx);
      setInput(history[idx]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!history.length) return;

      const idx =
        historyIndex === history.length - 1 ? -1 : historyIndex + 1;

      setHistoryIndex(idx);
      setInput(idx === -1 ? "" : history[idx]);
    }
  };

  // ---------------- UI ----------------
  return (
    <div
      ref={terminalRef}
      className="h-full bg-[#300A24] text-white font-mono text-sm overflow-auto rounded-lg"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Ubuntu window header */}
      <div className="bg-[#3B4252] h-9 flex items-center px-3 rounded-t-lg">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="flex-1 text-center text-xs text-gray-300">
          {USER}@{HOST}: ~
        </div>
      </div>

      {/* Output */}
      <div className="p-4 space-y-1">
        {lines.map((line, idx) => (
          <div key={idx}>
            {typeof line.text === "string"
              ? line.text.split("\n").map((l, i) => (
                  <div key={i}>{l}</div>
                ))
              : line.text}
          </div>
        ))}

        {/* Skills UI */}
        {showSkills && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {mockData.skills.map((group, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-3 rounded"
              >
                <div className="text-[#E95420] font-bold mb-2">
                  {group.category}
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((s, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex items-center mt-3">
          <span className="text-green-400 mr-2">{PROMPT}</span>

          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white caret-green-400"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;