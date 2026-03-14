export const siteConfig = {
  name: "TriView Electronics",
  legalName: "TriView Electronics Co., Ltd.",
  localName: "宇睿电子",
  siteUrl: "https://www.triviewelectronics.com",
  defaultTitle: "TriView Electronics | Taiwan LCD Controller Board ODM/OEM Partner",
  defaultDescription:
    "TriView Electronics (宇睿电子) is a Tainan, Taiwan ODM/OEM partner for LCD controller boards and AD boards. Interface coverage includes eDP, LVDS, V-by-One, USB-C, plus RS232/RS485 control, OSD customization, panel matching, touch integration, and custom cable assemblies.",
  contactEmail: "sales@triviewelectronics.com",
  contactPhone: "+886-2-8227-8698",
  contactAddress: "Tainan, Taiwan",
  hours: "Mon–Fri, 9:00–18:00 (GMT+8)",
  heroTitle: "Taiwan LCD Controller Board ODM/OEM Partner for Industrial Display Integration",
  heroDescription:
    "TriView Electronics supports OEM and industrial buyers with LCD controller boards, AD boards, interface adaptation (eDP/LVDS/V-by-One/USB-C), OSD customization, RS232/RS485 control, panel matching, touch integration, and cable assemblies.",
  heroCtaPrimary: {
    label: "Discuss Your Project",
    href: "/contact"
  },
  heroCtaSecondary: {
    label: "Explore Product Categories",
    href: "/products"
  }
} as const;

export type LinkItem = {
  href: string;
  labelKey: string;
};

export const navigationPrimary: LinkItem[] = [
  { href: "/products", labelKey: "nav_products" },
  { href: "/solutions", labelKey: "nav_solutions" },
  { href: "/resources", labelKey: "nav_resources" },
  { href: "/about", labelKey: "nav_about" },
  { href: "/contact", labelKey: "nav_contact" }
];

export const navigationSecondary: LinkItem[] = [
  { href: "/interface-summary", labelKey: "nav_interface_summary" },
  { href: "/panel-brands", labelKey: "nav_panel_brands" },
  { href: "/compliance", labelKey: "nav_compliance" },
  { href: "/capabilities", labelKey: "nav_capabilities" },
  { href: "/industries", labelKey: "nav_industries" },
  { href: "/applications", labelKey: "nav_applications" },
  { href: "/use-cases", labelKey: "nav_use_cases" },
  { href: "/faq", labelKey: "nav_faq" }
];

export const trustPoints = [
  {
    title: "Tainan-based engineering coordination",
    description:
      "Fast alignment across controller selection, firmware behavior, harness routing, and pilot build execution."
  },
  {
    title: "ODM/OEM workflow fit",
    description:
      "Built for OEM buyers who need revision control, clear validation steps, and stable handoff into production."
  },
  {
    title: "Integration-ready accessories",
    description:
      "Touch coordination and custom cable assemblies reduce last-minute mechanical and serviceability surprises."
  },
  {
    title: "Legacy replacement discipline",
    description:
      "A practical path for long-life equipment where interface continuity and sourcing stability matter more than novelty."
  }
];

export const stats = [
  { value: "ODM/OEM", label: "Display control collaboration model" },
  { value: "LCD + Touch", label: "Integrated subsystem scope" },
  { value: "Tainan, Taiwan", label: "Engineering and coordination base" },
  { value: "B2B", label: "OEM / industrial customer focus" }
];

export const workflowSteps = [
  {
    title: "Define project constraints",
    description:
      "Review target panel, input signal, touch requirements, enclosure limits, and service-life expectations before selecting hardware."
  },
  {
    title: "Align board and accessory path",
    description:
      "Match the controller board, cable set, touch option, and mounting assumptions so the design is stable beyond the first prototype."
  },
  {
    title: "Validate for deployment",
    description:
      "Confirm image behavior, signal stability, connector routing, and part continuity before pilot or volume rollout."
  }
];

export const homeFaqs = [
  {
    question: "What does TriView Electronics do?",
    answer:
      "TriView Electronics (宇睿电子) is a Tainan, Taiwan ODM/OEM supplier focused on LCD controller boards and AD boards, with panel matching, OSD customization, RS232/RS485 control options, touch integration, and custom cable assemblies."
  },
  {
    question: "Who is the site best suited for?",
    answer:
      "The website is primarily designed for OEM, industrial, and display-system buyers who need controller boards or integration support for embedded, kiosk, medical, industrial, or replacement-display projects."
  },
  {
    question: "Can TriView support custom or replacement programs?",
    answer:
      "Yes. The company appears especially relevant for projects involving custom display integration, legacy panel replacement, signal conversion, and controller-board adaptation."
  },
  {
    question: "What information helps speed up an inquiry?",
    answer:
      "Sharing the panel model, host interface, touch requirements, mechanical constraints, and expected project stage will usually help narrow the right solution much faster."
  }
];

export type ProductCategory = {
  slug: string;
  name: string;
  title: string;
  kicker: string;
  summary: string;
  seoDescription: string;
  heroHighlight: string;
  bullets: string[];
  features: string[];
  specifications: string[];
  applications: string[];
  supportPackage: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "lcd-controller-boards",
    name: "LCD Controller Boards",
    title: "LCD Controller Boards",
    kicker: "Product Category",
    summary:
      "Controller boards for LCD panel integration, signal adaptation, and embedded display system development.",
    seoDescription:
      "LCD controller board ODM/OEM support for industrial and embedded display projects, including interface adaptation and panel integration.",
    heroHighlight:
      "This category is most valuable when buyers need the board decision to stay aligned with panel behavior, interface constraints, and long-term serviceability.",
    bullets: [
      "Support for panel matching and host signal planning",
      "Useful for custom display control and replacement programs",
      "Relevant to industrial, OEM, and embedded HMI applications"
    ],
    features: [
      "Panel matching and timing/behavior tuning for specific LCD modules",
      "Interface alignment for LVDS, eDP, and V-by-One panel families",
      "OSD customization and firmware behavior control",
      "Remote control integration options (UART/RS232/RS485 when required)"
    ],
    specifications: [
      "Panel interface review: LVDS, eDP, V-by-One (panel-dependent)",
      "Host input planning: HDMI, DisplayPort, DVI, VGA, USB-C (project-dependent)",
      "OSD defaults, logo/branding, language, and lock modes (when needed)",
      "Control I/O: UART/RS232/RS485, I2C, GPIO (project-dependent)",
      "Voltage, backlight, and signal compatibility planning",
      "Mechanical fit, connector access, and cable routing constraints",
      "Lifecycle and sourcing continuity awareness"
    ],
    applications: [
      "Industrial HMIs",
      "Embedded control systems",
      "Legacy display replacement",
      "OEM equipment displays"
    ],
    supportPackage: [
      "Panel matching and compatibility review",
      "Signal-path and interface clarification",
      "OSD and control behavior alignment (as needed)",
      "Integration guidance for pilot builds"
    ]
  },
  {
    slug: "ad-boards-and-scaler-kits",
    name: "AD Boards & Scaler Kits",
    title: "AD Boards & Scaler Kits",
    kicker: "Product Category",
    summary:
      "AD boards and scaler solutions for projects that need practical signal conversion and stable display output behavior.",
    seoDescription:
      "AD boards and scaler kits for LCD integration, signal conversion, and industrial display control programs.",
    heroHighlight:
      "This category matters when the integration problem is not only display output, but reliable translation between mixed signal environments and real deployment constraints.",
    bullets: [
      "Suitable for integration paths involving multiple input/output expectations",
      "Can support legacy replacement or mixed-signal environments",
      "Often paired with custom display control workflows"
    ],
    features: [
      "Signal conversion for practical integration scenarios",
      "Stable scaling behavior across varied inputs",
      "Interface bridging between HDMI/DP/DVI/VGA/USB-C and LVDS/eDP/V-by-One (project-dependent)",
      "OSD customization and field-control options (RS232/RS485 when required)"
    ],
    specifications: [
      "Input/output mapping across mixed signal environments",
      "Host-side inputs: HDMI, DisplayPort, DVI, VGA, USB-C (project-dependent)",
      "Panel-side outputs: LVDS, eDP, V-by-One (panel-dependent)",
      "Resolution, scaling, and image-behavior considerations",
      "OSD defaults and service settings (when required)",
      "Connector and cable path alignment for deployment realities",
      "Deployment stability expectations"
    ],
    applications: [
      "Commercial signage",
      "Industrial equipment upgrades",
      "Mixed-signal embedded systems",
      "Panel replacement programs"
    ],
    supportPackage: [
      "Signal review before selection",
      "Accessory and harness coordination",
      "Pilot-stage validation support"
    ]
  },
  {
    slug: "touch-modules",
    name: "Touch Modules",
    title: "Touch Modules",
    kicker: "Product Category",
    summary:
      "Touch integration options for display projects that require coordinated controller, panel, and UI input planning.",
    seoDescription:
      "Touch modules for industrial, commercial, and embedded display integration, coordinated with controller board selection.",
    heroHighlight:
      "Touch becomes more reliable when it is planned together with display control, enclosure assumptions, and operator behavior instead of being added at the end.",
    bullets: [
      "Supports projects needing integrated display + touch planning",
      "Useful for kiosk, HMI, and operator-interface applications",
      "Can reduce interface mismatch risk during system integration"
    ],
    features: [
      "Coordinated touch and display planning (one subsystem)",
      "Better fit for operator-facing systems and embedded HMIs",
      "Reduced late-stage integration surprises caused by enclosure, grounding, and cable routing"
    ],
    specifications: [
      "Touch/display compatibility review",
      "UI input behavior expectations",
      "Enclosure and mounting considerations",
      "Cable and interface coordination (shielding, grounding, service access)"
    ],
    applications: [
      "Kiosks",
      "Industrial HMIs",
      "Operator interfaces",
      "Interactive embedded systems"
    ],
    supportPackage: [
      "Touch integration guidance",
      "Controller alignment review",
      "Deployment-focused validation"
    ]
  },
  {
    slug: "custom-cable-assemblies",
    name: "Custom Cable Assemblies",
    title: "Custom Cable Assemblies",
    kicker: "Product Category",
    summary:
      "Custom cable assemblies that help complete the real integration path between controller, panel, touch, and system enclosure.",
    seoDescription:
      "Custom cable assembly support for LCD controller boards, industrial displays, and integrated display subsystem projects.",
    heroHighlight:
      "Cable choices often decide whether a display subsystem feels production-ready or fragile. This category helps close the gap between schematic fit and field-ready installation.",
    bullets: [
      "Improves fit between board, panel, and enclosure constraints",
      "Useful when off-the-shelf harnesses create deployment issues",
      "Supports more complete ODM/OEM integration delivery"
    ],
    features: [
      "Harness design aligned to enclosure realities and service access",
      "Reduced installation friction in pilot and field use",
      "Better coordination between controller and panel connection paths (LVDS/eDP/V-by-One as required)",
      "Cleaner integration for mixed interface programs (including USB-C projects when applicable)"
    ],
    specifications: [
      "Connector type and routing review",
      "Mechanical access considerations",
      "Cable length and bend-path planning",
      "Integration with touch and controller choices",
      "Shielding, grounding, and strain relief planning for field reliability"
    ],
    applications: [
      "Industrial enclosures",
      "Kiosk systems",
      "Display subsystem retrofits",
      "OEM pilot builds"
    ],
    supportPackage: [
      "Harness planning support",
      "Mechanical-fit review",
      "Integration packaging guidance"
    ]
  }
];

export const productCoverage = [
  {
    title: "Controller and signal planning",
    points: [
      "LCD controller board selection for panel matching (LVDS/eDP/V-by-One) and host planning (HDMI/DP/USB-C)",
      "AD board and scaler paths for interface conversion and signal adaptation",
      "OSD and RS232/RS485 control requirements captured early to avoid late rework"
    ]
  },
  {
    title: "Touch and operator interface integration",
    points: [
      "Touch module coordination with display control",
      "Operator-facing system stability and usability",
      "Earlier alignment between UI behavior and hardware decisions"
    ]
  },
  {
    title: "Cable and deployment readiness",
    points: [
      "Custom cable planning for enclosure and routing constraints",
      "Cleaner pilot-build and field-installation behavior",
      "Accessory scope that supports real deployment conditions"
    ]
  },
  {
    title: "OEM program support",
    points: [
      "Useful for both design-in and replacement projects",
      "Supports lower-risk qualification across project stages",
      "Better coordination between technical review and sourcing continuity"
    ]
  }
];

export type Solution = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  seoDescription: string;
  heroHighlight: string;
  details: string[];
  benefits: string[];
  deliverables: string[];
  useCases: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "custom-display-integration",
    title: "Custom Display Integration",
    kicker: "Solution Track",
    summary:
      "For projects where controller boards, cables, touch options, and panel behavior need to be aligned as one subsystem rather than sourced as isolated parts.",
    seoDescription:
      "Custom display integration support for OEM and industrial projects that need controller board, cable, and touch coordination.",
    heroHighlight:
      "This solution is strongest when buyers need engineering alignment across board choice, signal path, cable fit, and deployment readiness rather than a standalone part shipment.",
    details: [
      "Better fit for non-standard panel/interface combinations",
      "Useful when enclosure, touch, and cable routing matter as much as the board itself",
      "Supports display subsystems that need coordination beyond commodity sourcing"
    ],
    benefits: [
      "Reduces mismatch between hardware elements early",
      "Improves prototype-to-production continuity",
      "Makes integration risk more visible before deployment"
    ],
    deliverables: [
      "Controller and accessory recommendation set",
      "Integration review notes",
      "Pilot-build support guidance"
    ],
    useCases: [
      "Custom OEM display subsystems",
      "Non-standard panel/interface programs",
      "Projects with enclosure-driven constraints"
    ],
    process: [
      "Review panel, signal, and mechanical constraints",
      "Align controller, touch, and cable path",
      "Validate pilot configuration before release"
    ],
    faqs: [
      {
        question: "When is custom display integration more useful than buying a board only?",
        answer:
          "It is often more useful when mechanical constraints, touch behavior, cable routing, or lifecycle concerns make a simple board purchase too narrow for the actual project risk."
      },
      {
        question: "What makes this relevant for OEM buyers?",
        answer:
          "OEM buyers usually need a working subsystem, not only a component. Integration-oriented support reduces mismatch between the controller, panel, accessories, and final product requirements."
      }
    ]
  },
  {
    slug: "legacy-display-replacement",
    title: "Legacy Display Replacement",
    kicker: "Solution Track",
    summary:
      "For buyers replacing aging controller boards, hard-to-source display paths, or outdated panel interfaces in long-lived products.",
    seoDescription:
      "Legacy LCD controller board replacement and display migration support for industrial and OEM systems.",
    heroHighlight:
      "This solution helps teams extend product life without forcing an unnecessary full-platform redesign when the real problem is aging display infrastructure.",
    details: [
      "Useful for extending product life without a full platform redesign",
      "Can reduce risk when existing panels or boards are no longer ideal to source",
      "Supports projects where compatibility and continuity matter more than novelty"
    ],
    benefits: [
      "Extends lifecycle of installed systems",
      "Reduces redesign cost and schedule shock",
      "Improves continuity for hard-to-replace equipment"
    ],
    deliverables: [
      "Compatibility review",
      "Replacement-path recommendation",
      "Transition support for pilot validation"
    ],
    useCases: [
      "Long-life industrial equipment",
      "Obsolescence-driven redesign avoidance",
      "Installed-base support programs"
    ],
    process: [
      "Assess current panel and signal path",
      "Map replacement constraints and risk",
      "Validate substitute architecture before rollout"
    ],
    faqs: [
      {
        question: "Why is legacy display replacement a separate solution track?",
        answer:
          "Because replacement projects are often constrained by existing enclosures, wiring paths, interfaces, and installed customer systems. They require a different mindset than greenfield product design."
      },
      {
        question: "What information should a buyer prepare?",
        answer:
          "Panel model, current interface, controller details, cable assumptions, and any known constraints from the installed system will usually help speed up evaluation."
      }
    ]
  },
  {
    slug: "touch-and-hmi-subsystems",
    title: "Touch & HMI Subsystems",
    kicker: "Solution Track",
    summary:
      "For projects that need coordinated display and touch input behavior in operator interfaces, kiosks, industrial HMIs, or embedded products.",
    seoDescription:
      "Touch and HMI subsystem support for LCD controller boards, touch modules, and integrated operator-interface projects.",
    heroHighlight:
      "Touch performance is rarely an isolated accessory issue. This solution aligns input behavior with display control, enclosure design, and operator expectations earlier in the program.",
    details: [
      "Helps align controller, touch, and display behavior earlier in the project",
      "Useful for kiosk, industrial HMI, and embedded control interfaces",
      "Reduces the chance of solving touch issues too late in the integration cycle"
    ],
    benefits: [
      "Improves coordination between touch and display behavior",
      "Reduces rework caused by late integration discovery",
      "Supports more stable operator-facing systems"
    ],
    deliverables: [
      "Touch/display integration review",
      "Interface and enclosure guidance",
      "Qualification support for operator-facing deployments"
    ],
    useCases: [
      "Industrial HMIs",
      "Interactive kiosks",
      "Embedded operator interfaces"
    ],
    process: [
      "Review touch and display requirements together",
      "Align controller, enclosure, and cable assumptions",
      "Validate operator experience before deployment"
    ],
    faqs: [
      {
        question: "Why treat touch as a system issue instead of an accessory add-on?",
        answer:
          "Because touch performance often depends on enclosure, controller, panel compatibility, and deployment context. Handling it late can create avoidable integration rework."
      },
      {
        question: "Who benefits most from this solution?",
        answer:
          "Teams building operator-facing systems, kiosks, or interactive embedded products where display control and input behavior must be stable together."
      }
    ]
  }
];

export const industries = [
  "Industrial automation",
  "Medical and laboratory devices",
  "Commercial kiosks and signage",
  "Embedded systems and operator interfaces"
];

export const aboutMilestones = [
  {
    year: "Foundation",
    title: "Built around display control experience",
    description:
      "TriView’s positioning centers on LCD controller boards and related integration support rather than generic catalog distribution."
  },
  {
    year: "Expansion",
    title: "Broadened toward subsystem support",
    description:
      "Touch modules, custom cables, and integration-oriented language suggest a move toward solving the real deployment path, not just part supply."
  },
  {
    year: "Current direction",
    title: "Closer to an ODM/OEM display-integration partner",
    description:
      "The strongest market position is likely as a partner for embedded and industrial display programs that need adaptation, lifecycle continuity, and technical coordination."
  }
];

export const qualityPoints = [
  {
    title: "Revision and BOM control",
    description:
      "Clear part approval and revision tracking reduce the risk of silent substitutions on long-lived industrial programs."
  },
  {
    title: "Functional validation",
    description:
      "Signal stability, image quality, touch behavior, cable routing, and enclosure compatibility are validated before release."
  },
  {
    title: "Supply continuity planning",
    description:
      "Preferred part selection, alternate sourcing logic, and customer communication help keep critical display programs on track."
  },
  {
    title: "Responsive engineering support",
    description:
      "Teams get direct technical feedback instead of generic reseller responses, which is especially important for non-standard display stacks."
  }
];

export const differentiators = [
  {
    title: "Board + cable + firmware in one scope",
    description:
      "TriView frames display control as an integrated engineering package, which reduces mismatch between controller behavior, harness design, and final assembly."
  },
  {
    title: "Friendly to legacy migration work",
    description:
      "The company is positioned for projects where the original panel, AD board, or interface path is aging out and the customer needs a stable replacement strategy."
  },
  {
    title: "Low-to-mid volume practicality",
    description:
      "Instead of optimizing only for very large catalog sales, TriView’s workflow fits industrial programs where documentation, support, and predictable revisions matter."
  },
  {
    title: "Taiwan-based coordination for OEM buyers",
    description:
      "For international B2B customers, a Taiwan operating base can improve communication, sourcing coordination, and manufacturing follow-through."
  }
];

export const contactAdvantages = [
  "RFQ support for new design-in and replacement projects",
  "Engineering review for panel compatibility and signal conversion",
  "Pilot-build coordination for custom cable and firmware packages",
  "Faster qualification when the inquiry includes panel model, host signal, and mechanical constraints"
];

export type IndustryPage = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  seoDescription: string;
  challenges: string[];
  priorities: string[];
  triViewFit: string[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "industrial-automation",
    title: "Industrial Automation Displays",
    kicker: "Industry Focus",
    summary:
      "Industrial automation programs need display control solutions that stay stable through long product cycles, enclosure limits, and demanding operator environments.",
    seoDescription:
      "Industrial automation display integration, LCD controller boards, and HMI subsystem support for OEM equipment and factory control products.",
    challenges: [
      "Long lifecycle expectations and difficult component replacement planning",
      "Mixed host interfaces across legacy and current embedded systems",
      "Tight mechanical envelopes inside operator panels and control cabinets",
      "Reliability expectations for always-on or shift-based equipment"
    ],
    priorities: [
      "Stable BOM and revision control",
      "Serviceable cable routing and connector access",
      "Predictable image behavior across production lots",
      "Faster validation when migrating older HMI platforms"
    ],
    triViewFit: [
      "Controller, cable, and firmware can be aligned in one engineering scope",
      "Legacy panel migration is already a natural use case for the company",
      "Low-to-mid volume industrial programs fit TriView’s support model"
    ]
  },
  {
    slug: "medical-devices",
    title: "Medical and Laboratory Device Displays",
    kicker: "Industry Focus",
    summary:
      "Medical and laboratory equipment teams often need display subsystems with cleaner documentation, predictable image behavior, and controlled change management.",
    seoDescription:
      "Medical device and laboratory display subsystem integration with LCD controller boards, touch modules, and OEM engineering support from Taiwan.",
    challenges: [
      "Documentation and validation expectations are higher than in commodity display projects",
      "UI reliability matters because operators depend on stable visual feedback",
      "Obsolescence and replacement planning can affect long-lived installed systems",
      "Mechanical and cable choices must support service access and enclosure realities"
    ],
    priorities: [
      "Controlled change communication",
      "Stable touch and image behavior",
      "Structured engineering review before release",
      "Lower redesign burden when older parts phase out"
    ],
    triViewFit: [
      "The company’s integration approach supports controller, touch, and harness coordination",
      "Legacy replacement work aligns with long-life device maintenance needs",
      "Direct engineering interaction helps reduce ambiguity during qualification"
    ]
  },
  {
    slug: "kiosks-and-signage",
    title: "Kiosk and Commercial Display Systems",
    kicker: "Industry Focus",
    summary:
      "Kiosk and signage projects benefit from display control packages that simplify touch, signal handling, and field-ready accessory planning.",
    seoDescription:
      "Kiosk and digital signage display control, AD boards, touch integration, and LCD controller support for commercial OEM systems.",
    challenges: [
      "Field installations expose weaknesses in connectors, harnesses, and signal stability",
      "Commercial deployments often combine custom enclosures with mixed media players",
      "Touch and display behavior need to remain consistent across rollout batches",
      "Service teams need simpler replacement logic for distributed systems"
    ],
    priorities: [
      "Accessory kits that reduce installation friction",
      "Stable long-hour display behavior",
      "Cleaner sourcing continuity across repeat deployments",
      "Fast pilot-to-rollout transition"
    ],
    triViewFit: [
      "TriView can bundle board, touch, and cable thinking into one workflow",
      "The support model fits specialized commercial deployments, not only giant catalog volumes",
      "Custom integration helps reduce site-level installation surprises"
    ]
  }
];

export type ApplicationTrack = {
  slug: string;
  title: string;
  summary: string;
  seoDescription: string;
  needs: string[];
  fit: string;
};

export const applicationTracks: ApplicationTrack[] = [
  {
    slug: "legacy-display-replacement",
    title: "Legacy display replacement",
    summary:
      "For programs where the original panel interface, AD board, or accessory path is becoming difficult to source or maintain.",
    seoDescription:
      "Legacy display replacement support for aging LCD controller boards, panel interfaces, and long-life embedded display systems.",
    needs: [
      "Compatibility review for existing panel and host interfaces",
      "Mechanical and cable constraints from installed equipment",
      "Lower-risk transition path for long-life products"
    ],
    fit: "Relevant solutions often combine controller selection, cable adjustment, and validation support rather than a simple one-part swap."
  },
  {
    slug: "new-oem-design-in",
    title: "New design-in for OEM equipment",
    summary:
      "For teams defining a new display subsystem and needing a practical route from evaluation to repeatable production.",
    seoDescription:
      "OEM display design-in support covering controller selection, touch planning, and stable transition from prototype to production.",
    needs: [
      "Signal and interface planning before architecture hardens",
      "Touch, cable, and board alignment across prototype stages",
      "Revision stability before procurement scales"
    ],
    fit: "TriView is strongest when the hardware choice is treated as an integration package, not only a purchasing line item."
  },
  {
    slug: "touch-enabled-hmi-integration",
    title: "Touch-enabled HMI integration",
    summary:
      "For operator interfaces, kiosks, and embedded systems where touch behavior and display control need to stay coordinated.",
    seoDescription:
      "Touch-enabled HMI integration with LCD controller boards, touch modules, and enclosure-aware display subsystem planning.",
    needs: [
      "Touch and display behavior reviewed together",
      "Accessory and harness planning for enclosure realities",
      "Cleaner field deployment and service access"
    ],
    fit: "This route fits applications where standalone board sourcing is not enough and the deployment environment creates additional risk."
  }
];
