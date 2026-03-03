import { Cpu, Monitor, Wifi, CircuitBoard, Bug } from "lucide-react";

const skillCategories = [
  {
    category: "Embedded Software",
    icon: Cpu,
    skills: ["C/C++", "FreeRTOS", "Zephyr", "Low-level Drivers", "Bootloaders", "OTA Updates", "Memory Management"],
  },
  {
    category: "Embedded Linux",
    icon: Monitor,
    skills: ["Yocto", "Buildroot", "Device Tree", "Kernel Modules", "U-Boot", "Systemd", "Bash/Python Scripts"],
  },
  {
    category: "Connectivity & IoT",
    icon: Wifi,
    skills: ["BLE", "Wi-Fi", "LoRa", "MQTT", "CoAP", "TLS/SSL", "Protobuf/CBOR", "REST APIs"],
  },
  {
    category: "Hardware Engineering",
    icon: CircuitBoard,
    skills: ["MCU/SoC Integration", "Altium Designer", "KiCad", "High-Speed Layout", "Gerbers", "BOM Sourcing"],
  },
  {
    category: "Debugging & Test",
    icon: Bug,
    skills: ["JTAG/SWD", "Oscilloscopes", "Logic Analyzers", "Hardware Bring-Up", "Factory Flashing", "Python PyTest"],
  },
];

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
            const Icon = group.icon;
            return (
              <div
                key={idx}
                data-testid={`card-skill-category-${idx}`}
                className="bg-card/60 backdrop-blur-sm rounded-xl border border-border/40 p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-foreground/90 tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent mb-5" />
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      data-testid={`tag-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs py-1.5 px-3 rounded-md border border-border/50 bg-background/60 text-muted-foreground select-none"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60" />
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
