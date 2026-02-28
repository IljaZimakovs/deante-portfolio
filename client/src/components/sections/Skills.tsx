import { Cpu, Monitor, Wifi, CircuitBoard, Bug } from "lucide-react";

const skillCategories = [
  {
    category: "Embedded Software",
    icon: Cpu,
    color: "cyan",
    skills: ["C/C++", "FreeRTOS", "Zephyr", "Low-level Drivers", "Bootloaders", "OTA Updates", "Memory Management"],
  },
  {
    category: "Embedded Linux",
    icon: Monitor,
    color: "violet",
    skills: ["Yocto", "Buildroot", "Device Tree", "Kernel Modules", "U-Boot", "Systemd", "Bash/Python Scripts"],
  },
  {
    category: "Connectivity & IoT",
    icon: Wifi,
    color: "emerald",
    skills: ["BLE", "Wi-Fi", "LoRa", "MQTT", "CoAP", "TLS/SSL", "Protobuf/CBOR", "REST APIs"],
  },
  {
    category: "Hardware Engineering",
    icon: CircuitBoard,
    color: "amber",
    skills: ["MCU/SoC Integration", "Altium Designer", "KiCad", "High-Speed Layout", "Gerbers", "BOM Sourcing"],
  },
  {
    category: "Debugging & Test",
    icon: Bug,
    color: "rose",
    skills: ["JTAG/SWD", "Oscilloscopes", "Logic Analyzers", "Hardware Bring-Up", "Factory Flashing", "Python PyTest"],
  },
];

const colorMap: Record<string, { tag: string; dot: string; border: string; icon: string; headerBorder: string }> = {
  cyan: {
    tag: "bg-cyan-500/8 text-cyan-400 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/15 hover:shadow-[0_0_12px_-3px_rgba(6,182,212,0.3)]",
    dot: "bg-cyan-400",
    border: "border-cyan-500/30",
    icon: "text-cyan-400",
    headerBorder: "from-cyan-500/60 to-transparent",
  },
  violet: {
    tag: "bg-violet-500/8 text-violet-400 border-violet-500/20 hover:border-violet-400/50 hover:bg-violet-500/15 hover:shadow-[0_0_12px_-3px_rgba(139,92,246,0.3)]",
    dot: "bg-violet-400",
    border: "border-violet-500/30",
    icon: "text-violet-400",
    headerBorder: "from-violet-500/60 to-transparent",
  },
  emerald: {
    tag: "bg-emerald-500/8 text-emerald-400 border-emerald-500/20 hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:shadow-[0_0_12px_-3px_rgba(16,185,129,0.3)]",
    dot: "bg-emerald-400",
    border: "border-emerald-500/30",
    icon: "text-emerald-400",
    headerBorder: "from-emerald-500/60 to-transparent",
  },
  amber: {
    tag: "bg-amber-500/8 text-amber-400 border-amber-500/20 hover:border-amber-400/50 hover:bg-amber-500/15 hover:shadow-[0_0_12px_-3px_rgba(245,158,11,0.3)]",
    dot: "bg-amber-400",
    border: "border-amber-500/30",
    icon: "text-amber-400",
    headerBorder: "from-amber-500/60 to-transparent",
  },
  rose: {
    tag: "bg-rose-500/8 text-rose-400 border-rose-500/20 hover:border-rose-400/50 hover:bg-rose-500/15 hover:shadow-[0_0_12px_-3px_rgba(244,63,94,0.3)]",
    dot: "bg-rose-400",
    border: "border-rose-500/30",
    icon: "text-rose-400",
    headerBorder: "from-rose-500/60 to-transparent",
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative border-y border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technical <span className="text-primary">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              The tools, frameworks, and protocols utilized to build robust systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => {
            const colors = colorMap[group.color];
            const Icon = group.icon;
            return (
              <div
                key={idx}
                data-testid={`card-skill-category-${idx}`}
                className={`bg-card/60 backdrop-blur-sm rounded-xl border border-border/40 p-6 transition-all duration-300 hover:border-opacity-60 ${colors.border}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg bg-background/80 border border-border/50 flex items-center justify-center ${colors.icon}`}>
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-foreground/90 tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <div className={`h-px w-full bg-gradient-to-r ${colors.headerBorder} mb-5`} />
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      data-testid={`tag-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      className={`inline-flex items-center gap-1.5 font-mono text-xs py-1.5 px-3 rounded-md border transition-all duration-200 cursor-default select-none ${colors.tag}`}
                    >
                      <span className={`w-1 h-1 rounded-full ${colors.dot} opacity-70`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
