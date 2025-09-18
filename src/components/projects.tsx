import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Filter } from "lucide-react";
import { PageState } from "../App";
import { useState } from "react";

interface ProjectsProps {
  onProjectClick: (page: PageState, project: any) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const projects = [
    {
      id: 1,
      title: "Smart Mirror with Fashion AI",
      description:
        "Two-way mirror + display with AI outfit detection, color coordination, and daily widgets (weather, todos).",
      fullDescription:
        "A smart mirror that blends utility and AI fashion advice. Using a camera and Roboflow/YOLO, it detects clothing items and suggests color coordination and outfit ideas based on trends or saved prefs. Hardware includes a custom wooden frame, a two-way mirror, and a display. Inspired by friends asking for outfit checks—now automated with an AI assistant. Software + hardware showcase of user-centered design.",
      image:
        `${import.meta.env.BASE_URL}Photos/SmartFashionLogo.png`,
      tags: ["Python", "YOLOv8", "Roboflow", "Raspberry Pi", "MagicMirror", "Flask"],
      teammates: ["Khisa-Lee Lebrun", "Boyd Paxton"],
      demo: "#",
      duration: "In Progress",
      keyObjectives: [
        "Detect outfit items and colors in real time on-device",
        "Score outfits and suggest complementary colors",
        "Create a smooth UI in MagicMirror with widgets",
        "Design a sturdy, aesthetic two-way mirror enclosure"
      ],
      challenges: [
        "Robust detection on mirrors",
        "Lighting variance",
        "Real-time inference on edge"
      ],
      solutions: [
        "Added background/reflective augmentations to the dataset and tuned confidence/NMS thresholds; masked mirrored regions around edges to reduce false positives.",
        "Auto-exposure lock + fixed white balance presets; optional ring-light bias and gamma correction per scene.",
        "Quantized YOLOv8 model and used smaller input sizes with dynamic inference interval; optimized Python pipeline and enabled hardware acceleration where available."
      ],
      results: ["Working prototype", "Live outfit grading UI", "Modular widget system"],
      category: "ai"
    },
    {
      id: 2,
      title: "AI Landmine Detection",
      description:
        "Machine Learning enabled for detecting buried landmines using inductive sensing.",
      fullDescription:
        "Humanitarian project meant to be attached to the transport hexacopter for post-conflict farmland. Uses inductive sensing and envelope detection to pick up metallic signatures beneath soil. Targets long endurance and GPS-denied autonomy through onboard sensors and custom pathfinding. Reliable metallic signature detection in tests; next up: refinement and stakeholder demo.",
      image:
        `${import.meta.env.BASE_URL}Photos/AiLandmine.png`,
      tags: ["Arduino", "Inductive Sensing", "Signal Processing", "Path Planning", "Autonomy"],
      teammates: ["Khisa-Lee Lebrun", "Andy Pierre"],
      demo: "#",
      duration: "In Progress",
      keyObjectives: [
        "Detect buried metallic signatures with high sensitivity",
        "Enable GPS-denied mapping and repeatable coverage",
        "Achieve long endurance with rugged field hardware",
        "Provide usable operator readouts for scan results"
      ],
      challenges: [
        "Low SNR underground",
        "GPS-denied operation",
        "Engine vibration & EMI"
      ],
      solutions: [
        "Envelope detection with adaptive baseline subtraction; multi-sample averaging and feature extraction (peak width/decay) before ML classification.",
        "Lawn-mower path planning using dead-reckoning + IMU fusion; periodic visual fiducials for drift correction.",
        "Isolated sensor mount with vibration-damping material; twisted-pair routing and shielding; LC filtering and ground partitioning near the analog front-end."
      ],
      results: ["Field-detectable signatures", "Baseline classification pipeline", "Ruggedized mounts"],
      category: "drone"
    },
    {
      id: 3,
      title: "AI I-Spy",
      description:
        "Raspberry Pi 5 game that detects objects in real time and guides players with spatial cues.",
      fullDescription:
        "An educational, AI-driven twist on 'I Spy'. Built on Raspberry Pi 5 with Python + YOLO and a laser-based mapping mechanism for spatial awareness. Recognizes >10 object categories with >95% accuracy in tests and verifies player responses. Roadmap: more classes, voice I/O, adaptive difficulty.",
      image:
        `${import.meta.env.BASE_URL}Photos/ISpyLogo.png`,
      tags: ["Python", "YOLOv8", "Raspberry Pi 5", "CV", "Laser Mapping"],
      teammates: ["Khisa-Lee Lebrun", "Boyd Paxton", "Nicholas Woodward", "Hope Regaldo"],
      demo: "#",
      duration: "Done",
      keyObjectives: [
        "Deliver >90% detection accuracy in classroom lighting",
        "Provide playful, spatial visual cues for objects",
        "Run at interactive frame rates on a Pi 5",
        "Make the object list extensible by config"
      ],
      challenges: ["Low-latency inference", "Ambient lighting", "Stable spatial cues"],
      solutions: [
        "Used YOLOv8-n with TensorRT-style optimizations and frame skipping; asynchronous capture/inference workers.",
        "Auto-gain and exposure presets plus CLAHE contrast normalization for consistent inputs.",
        "Calibrated laser line with homography; fused centroid history to dampen jitter for stable guidance."
      ],
      results: [">95% detection accuracy", "Interactive gameplay loop", "Extendable class config"],
      category: "ai"
    },
    {
      id: 4,
      title: "Transport Hexacopter (Landmine detection, Wildfire & Medical Logistics)",
      description:
        "Heavy-lift hexacopter with Pixhawk, GPS, and autonomous missions for wildfire support and organ transport.",
      fullDescription:
        "Carbon-fiber hexacopter with Pixhawk flight controller and QGroundControl mission planning. Dual payload concept: localized water sprinkler for wildfire hot spots and stabilized transport for temperature-sensitive medical organs. Focus on endurance, safety failsafes, and modular payloads.",
      image:
        `${import.meta.env.BASE_URL}Photos/HexacopterePhoto.jpg`,
      tags: ["Pixhawk", "QGroundControl", "Mission Planning", "Heavy Lift", "Autonomous Flight"],
      teammates: ["Khisa-Lee Lebrun", "Braden Fadal"],
      demo: "#",
      duration: "In Progress",
      keyObjectives: [
        "Lift payloads safely with sufficient endurance",
        "Execute waypoint missions with robust failsafes",
        "Support quick-swap modular payloads",
        "Minimize vibration for sensitive cargo"
      ],
      challenges: ["Payload vibration", "Thermal management", "RTL/failsafe tuning"],
      solutions: [
        "Prop balancing, soft-mounts, and notch-filtered PID tuning; mass distribution checks.",
        "Heat-spreading plates and directed airflow on ESCs and regulators; thermal telemetry alarms.",
        "Validated geofence/RTL/land behaviors in SITL + field tests; battery reserve margins encoded in mission plans."
      ],
      results: ["Stable hover with payload", "Waypoint autonomy", "Modular payload mounts"],
      category: "drone"
    },
    {
      id: 5,
      title: "F-22 Flyover Tricopter",
      description:
        "Custom tricopter inside an F-22 foam body with front-yaw mixer for cinematic show flyovers.",
      fullDescription:
        "A front-yaw tricopter integrated into a foam F-22 airframe to perform realistic flyovers at events. Custom mixer enables precise yaw authority from the front. Next steps: onboard stabilized camera for dynamic, broadcast-style footage.",
      image:
        `${import.meta.env.BASE_URL}Photos/F22Flyover.jpg`,
      tags: ["Custom Mixer", "Yaw Dynamics", "Cinematic Flight", "3D Printed Mounts"],
      teammates: ["Khisa-Lee Lebrun", "Braden Fadal"],
      demo: "#",
      duration: "In Progress",
      keyObjectives: [
        "Achieve stable front-yaw authority",
        "Maintain aerodynamic integrity of foam body",
        "Integrate stabilized camera for show footage"
      ],
      challenges: ["Weight distribution", "Aero drag in foam body", "Camera stabilization"],
      solutions: [
        "Iterated mixer coefficients and CG placement; tuned yaw PIDs for low overshoot.",
        "Surface smoothing and minimal external protrusions; airflow checks with smoke tests.",
        "Gimbal isolation mounts and vibration testing; rolling-shutter mitigation via shutter/ND combos."
      ],
      results: ["Successful test flights", "Tuned yaw response", "Camera mount prototype"],
      category: "drone"
    },
    {
      id: 6,
      title: "Wi-Spy: Wireless Spectrum Analyzer",
      description:
        "RF spectrum visualization for 2.4 GHz (and partial 5 GHz) to diagnose interference and optimize Wi-Fi.",
      fullDescription:
        "A spectrum analysis tool offering heat maps and time diagrams for channel utilization and interference. Extends to mobile for on-the-go diagnosis. Enables admins to proactively manage coverage and troubleshoot issues.",
      image:
        `${import.meta.env.BASE_URL}Photos/WiSpy_Logo.png`,
      tags: ["RF", "2.4 GHz", "Visualization", "React", "Data Pipelines"],
      teammates: ["Khisa-Lee Lebrun", "Boyd Paxton", "Nicholas Woodward"],
      demo: "#",
      duration: "Done",
      keyObjectives: [
        "Render real-time RF heat maps",
        "Highlight overlapping channels and interferers",
        "Support mobile diagnostics in the field"
      ],
      challenges: ["Noisy environments", "Real-time rendering", "Calibration"],
      solutions: [
        "Averaging windows and noise floors to stabilize traces; interferer tagging by threshold.",
        "Web workers for processing; canvas batch draws to keep FPS high.",
        "Reference tone and known AP baselines for quick calibration; simple wizard for users."
      ],
      results: ["Interactive heat maps", "Mobile diagnostics", "Faster troubleshooting"],
      category: "app"
    },
    {
      id: 7,
      title: "Rocket League Rover (FPGA Soccer Bot)",
      description:
        "Autonomous rover that localizes a 1 kHz 'ball' via microphone array + filters, then shoots on IR-defined goal.",
      fullDescription:
        "Built on Basys 3 (Artix-7) with Verilog (Icarus). H-bridge driver for drive & kicker. Band-pass filters + mic array track the 1 kHz ball tone; IR beacons define the goal. Custom PCBs in KiCad for sensors, power, and motor control. Placed 2nd in penalty shootout competition.",
      image:
        `${import.meta.env.BASE_URL}Photos/RoverThumb.png`,
      tags: ["FPGA", "Verilog", "Basys 3", "Signal Processing", "KiCad"],
      teammates: ["Khisa-Lee Lebrun", "Tristen Tugmon", "Wyatt Rust", "Shayne Logue"],
      demo: "#",
      duration: "Done",
      keyObjectives: [
        "Localize a 1 kHz target tone from a moving platform",
        "Autonomously align and shoot into IR-defined goal",
        "Design robust motor control and power PCBs"
      ],
      challenges: ["Reliable localization", "Motor timing", "EMI on analog front-end"],
      solutions: [
        "Triangulation from mic array with phase/energy methods and band-pass filtering; hysteresis to avoid flip-flops.",
        "Timer-driven PWM with encoder feedback; kick timing sequenced via state machine.",
        "Analog ground separation and shielding; RC input filters and proper return paths on the PCB."
      ],
      results: ["2nd place overall", "Accurate autonomous shots", "Robust PCB stack"],
      category: "robotics"
    },
    {
      id: 8,
      title: "Roav Pilot — Drone Pilot Admin App",
      description:
        "Cross-platform app (.NET MAUI + Ionic/React) for checklists, flight logs, and incident reporting.",
      fullDescription:
        "Streamlines compliance and safety workflows for drone operators. Features pre/post-flight checklists, real-time logging, FAA refs, and integrated docs. ~20+ active users; evolving with pilot feedback. Mascot story: Gontrand the rescued seagull inspired the logo.",
      image:
        `${import.meta.env.BASE_URL}Photos/roavpilot_logo_480.png`,
      tags: [".NET MAUI", "Ionic React", "Vite", "Cloud Storage", "UX"],
      teammates: ["Khisa-Lee Lebrun"],
      demo: "#",
      duration: "Done",
      keyObjectives: [
        "Unify pilot admin tasks in one interface",
        "Keep forms fast and offline-friendly",
        "Reduce friction for safety/compliance"
      ],
      challenges: ["Offline-first design", "Cross-platform UI", "Simple but complete forms"],
      solutions: [
        "Local cache with sync on reconnect; conflict-aware merge.",
        "Shared UI components and responsive layout testing across targets.",
        "Schema-driven forms with validation and sensible defaults."
      ],
      results: ["Unified admin tooling", "Faster reporting", "Pilot adoption 20+ users"],
      category: "app"
    },
    {
      id: 9,
      title: "Solar Energy Laboratory (Teaching Lab)",
      description:
        "Hands-on PV lab at Texas Tech: 1-axis/2-axis vs fixed tracking, irradiance, and load matching.",
      fullDescription:
        "Led/assisted a 30+ student lab on PV fundamentals: how tracking, angle of incidence, shading, and loads affect output. Live demos, meters, and data collection to connect theory with practice. Delivered materials and guided experiments.",
      image:
        `${import.meta.env.BASE_URL}Photos/SolarPV.jpg`,
      tags: ["Photovoltaics", "Power Systems", "Education", "Data Collection"],
      teammates: ["Khisa-Lee Lebrun", "Andy Pierre"],
      demo: "#",
      duration: "In Progress",
      keyObjectives: [
        "Teach PV tracking tradeoffs with real measurements",
        "Demonstrate load matching effects on output",
        "Build students’ intuition with hands-on labs"
      ],
      challenges: ["Weather variability", "Student equipment handling", "Real-time comparisons"],
      solutions: [
        "Captured multi-day datasets and normalized for irradiance; used simulated lamps when cloudy.",
        "Created durable checklists and quick guides; color-coded leads and shrouded probes.",
        "Side-by-side rigs with synchronized logging and visual dashboards."
      ],
      results: ["Lab curriculum delivered", "Clear tracking insights", "Measurable learning gains"],
      category: "teaching"
    },
    {
      id: 10,
      title: "NFC Memory Box",
      description:
        "Tap-to-memory picture frame: NFC launches a web app that surfaces randomized shared moments.",
      fullDescription:
        "Farewell gift for roommates: an NFC tag in a custom frame opens a mobile-friendly web app showing random memories—photos, quotes, playlists, videos. Designed in Figma; lightweight front/back-end. Emphasis on emotional continuity via tangible tech.",
      image:
        `${import.meta.env.BASE_URL}Photos/NFCfigma1.png`,
      tags: ["NFC", "Web App", "Figma", "Mobile UX"],
      teammates: ["Khisa-Lee Lebrun"],
      demo: "#",
      duration: "In Progress",
      keyObjectives: [
        "One-tap NFC to memory UI",
        "Delightful, mobile-first experience",
        "Simple content authoring for memories"
      ],
      challenges: ["Smooth mobile UX", "Content curation", "No-login flow"],
      solutions: [
        "Responsive layout with touch targets and fast transitions; reduced JS on low-end phones.",
        "Tagging and randomized rotation with favorites pinning.",
        "Signed URLs and per-device local preferences; anonymous usage telemetry."
      ],
      results: ["Working NFC trigger", "Responsive UI", "Reusable memory schema"],
      category: "app"
    },
    {
      id: 11,
      title: "3D-Printed Inductive Coil Holder",
      description:
        "Printed mount for inductive sensor on the landmine drone; isolates vibration and eases service.",
      fullDescription:
        "CAD + 3D print of sensor coil holder with alignment features, adjustable height, and strain-relieved routing. Designed for quick swaps during field tests and to reduce engine vibration coupling.",
      image:
       `${import.meta.env.BASE_URL}Photos/InductCoil.png`,
      tags: ["3D Printing", "CAD", "Vibration Damping", "Rapid Iteration"],
      teammates: ["Khisa-Lee Lebrun"],
      demo: "#",
      duration: "In Progress",
      keyObjectives: [
        "Reduce vibration transfer into sensor",
        "Enable fast field swaps and servicing",
        "Protect cables and maintain alignment"
      ],
      challenges: ["Vibration isolation", "Heat near engine", "Cable management"],
      solutions: [
        "Printed TPU/PLA hybrid with compliant mounts; added mass and damping at resonant frequencies.",
        "Heat-resistant filament choices and stand-off spacing from hot parts.",
        "Integrated channels, strain relief, and keyed alignment features."
      ],
      results: ["Serviceable mount", "Cleaner signals", "Faster test cycles"],
      category: "3dprint"
    },
    {
      id: 12,
      title: "3D-Printed Game Boxes",
      description:
        "Durable, custom-fit cases to replace flimsy cardboard board-game packaging.",
      fullDescription:
        "Measured game components and designed snap-fit printed boxes with compartments. Improves longevity and portability; parametric approach for quick variants.",
      image:
       `${import.meta.env.BASE_URL}Photos/Flip7Box.png`,
      tags: ["3D Printing", "Parametric CAD", "Snap-Fit", "Organization"],
      teammates: ["Khisa-Lee Lebrun"],
      demo: "#",
      duration: "Done",
      keyObjectives: [
        "Protect components with tailored compartments",
        "Provide quick access and portability",
        "Make templates easy to adapt to new games"
      ],
      challenges: ["Dimensional tolerance", "Hinge durability", "Surface finish"],
      solutions: [
        "Calibrated printer and added clearance tables per material; test prints on critical fits.",
        "Living-hinge options vs pinned hinges; increased fillets at stress points.",
        "Post-processing: light sanding and acetone smoothing where applicable."
      ],
      results: ["Impact-resistant cases", "Neat compartments", "Reusable templates"],
      category: "3dprint"
    },
    {
      id: 13,
      title: "LEGO-Theme Nespresso Pod Holder",
      description:
        "Kitchen organizer with LEGO styling to match existing shaker set; fun + functional print.",
      fullDescription:
        "Designed and printed a modular Nespresso pod rack with LEGO-inspired studs and color accents. Holds pods securely, easy to clean, and matches the LEGO salt & pepper shakers.",
      image:
        `${import.meta.env.BASE_URL}Photos/NespressoPodHolderV1.png`,
      tags: ["3D Printing", "LEGO Theme", "Modular Design"],
      teammates: ["Khisa-Lee Lebrun"],
      demo: "#",
      duration: "Done",
      keyObjectives: [
        "Match LEGO aesthetic in kitchen set",
        "Ensure stable, easy-clean storage",
        "Keep footprint compact and modular"
      ],
      challenges: ["Food-adjacent cleanliness", "Stud fit", "Counter footprint"],
      solutions: [
        "Smooth surfaces, fillets, and easy-wipe geometry; food-safe finishes where appropriate.",
        "Tolerance tuning on studs; snap-fit iterations verified by test cubes.",
        "Stackable modules with anti-slip pads and minimal overhangs."
      ],
      results: ["Stable rack", "Themed aesthetic", "Easy refill workflow"],
      category: "3dprint"
    },
    {
      id: 14,
      title: "AI strides analysis",
      description:
        "Running form analysis using computer vision to improve technique and reduce injury risk.",
      fullDescription:
        "Designed an application that uses computer vision to analyze running form. The app captures video of a runner and processes it to extract key metrics such as stride length, cadence, and foot strike pattern. By providing visual feedback and personalized recommendations, the app aims to help runners improve their technique and reduce the risk of injury.",
      image:
        `${import.meta.env.BASE_URL}Photos/AIStrides.png`,
      tags: ["Computer Vision", "tensorflow", "Mobile Aplication", "AI"],
      teammates: ["Khisa-Lee Lebrun"],
      demo: "#",
      duration: "In Progress",
      keyObjectives: [
        "Detect and analyze running form",
        "Ensure user friendly application",
        "Get accurate recommendations from physiotherapists"
      ],
      challenges: ["Data Collection", "IOS and Android", "Data annotation"],
      solutions: [
        "Set up a consented capture pipeline: take daily running videos from diverse people (ages, body types, shoes, terrains) using multiple phones at 60–120 fps. Standardize a short capture script (front/side/rear, 10–15 s each), log metadata (fps, device, surface, shoe), and store to a structured bucket (e.g., /subject/session/view).",
        "Start native on iOS to learn the stack: Swift + AVFoundation for stable video capture, CoreMotion for IMU, and CoreML for on-device inference. Export the trained model to CoreML/ONNX. Then ship Android using Kotlin (CameraX) or a shared UI (Ionic/Capacitor) while reusing the same inference graph via ONNX Runtime Mobile. Add a thin API layer for config/telemetry and set up CI with a small device matrix.",
        "Use semi-auto labeling: run MediaPipe Pose/YOLO to pre-keypoint frames, then refine in CVAT/Label Studio. Define a clear schema (keypoints + fault tags like overstride, hip drop, cadence flag), do double-pass QA for 10% of clips, and apply active learning to prioritize uncertain samples for human review."
      ],
      results: [
        "Built a private dataset with 50+ runners, 1,200+ clips (front/side/rear) across treadmills, track, and sidewalks (60–120 fps).",
        "Released an iOS MVP with reliable capture and on-device inference; Android beta parity achieved via shared ONNX model.",
        "Annotated 100k+ frames with pose keypoints and fault labels; inter-annotator agreement (Cohen’s κ) ≥ 0.78; model F1 ≥ 0.85 on key faults."
      ],
      category: "ai"
    }
  ];

 


  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI Projects', count: projects.filter(p => p.category === 'ai').length },
    { id: 'drone', label: 'Drone Projects', count: projects.filter(p => p.category === 'drone').length },
    { id: 'electrical', label: 'Electrical Projects', count: projects.filter(p => p.category === 'electrical').length },
    { id: '3d', label: '3D Models', count: projects.filter(p => p.category === '3d').length },
    { id: 'applications', label: 'Applications', count: projects.filter(p => p.category === 'applications').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary/30 via-accent/20 to-primary/10 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work in AI, drone technology, and electrical engineering
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-primary">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                    : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                }`}
              >
                {category.label}
                <Badge 
                  variant="secondary" 
                  className={`ml-2 ${
                    selectedCategory === category.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid - Responsive Flex Layout */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-w-[320px] max-w-[400px] overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-primary/20 bg-gradient-to-br from-card to-accent/5 cursor-pointer group flex flex-col"
              onClick={() => onProjectClick('project-detail', project)}
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Click to view full details</p>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <CardHeader className="flex-1">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No projects found</h3>
              <p>No projects match the selected category. Try selecting a different filter.</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory('all')}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Show All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}