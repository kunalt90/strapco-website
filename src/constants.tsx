import React from "react";
import type { ServiceDetail, CaseStudy } from "./types";

export const STRAPCO_S_LOGO = (
  <div className="flex items-center gap-5 group">
    <div className="relative flex items-center justify-center h-10 w-10 border border-white/10 rounded-sm overflow-hidden bg-navy-900 group-hover:border-brand/50 transition-colors">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 transform transition-transform group-hover:scale-110 duration-500"
      >
        <path
          d="M27 15C27 13.3431 25.6569 12 24 12H16C14.3431 12 13 13.3431 13 15V17C13 18.6569 14.3431 20 16 20H24C25.6569 20 27 21.3431 27 23V25C27 26.6569 25.6569 28 24 28H16C14.3431 28 13 26.6569 13 25"
          stroke="currentColor"
          className="text-white group-hover:text-brand transition-colors"
          strokeWidth="3"
          strokeLinecap="square"
        />
        <rect x="25" y="26" width="4" height="4" fill="#0066FF" />
      </svg>
    </div>
    <span className="text-xl font-black tracking-[-0.05em] text-white uppercase group-hover:text-brand transition-colors">
      Strapco<span className="text-brand">.</span>
    </span>
  </div>
);

export const STRAPCO_FULL_LOGO = (
  <div className="flex flex-col">
    <div className="flex items-center gap-6">
      <div className="relative h-12 w-12 border border-white/10 bg-navy-900 flex items-center justify-center rounded-sm">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <path
            d="M27 15C27 13.3431 25.6569 12 24 12H16C14.3431 12 13 13.3431 13 15V17C13 18.6569 14.3431 20 16 20H24C25.6569 20 27 21.3431 27 23V25C27 26.6569 25.6569 28 24 28H16C14.3431 28 13 26.6569 13 25"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="square"
          />
          <rect x="25" y="26" width="4" height="4" fill="#0066FF" />
        </svg>
      </div>
      <span className="text-4xl font-black tracking-[-0.05em] text-white uppercase">
        STRAPCO<span className="text-brand">.</span>
      </span>
    </div>
    <div className="mt-4 flex items-center gap-4">
      <div className="h-px w-6 bg-brand"></div>
      <span className="text-[9px] font-black tracking-[0.5em] text-slate-500 uppercase">
        Strategic Delivery & Assurance
      </span>
    </div>
  </div>
);

export const SERVICES: ServiceDetail[] = [
  {
    id: "discovery-investigative-design",
    title: "Discovery & Investigative Design",
    category: "Discovery",
    description:
      "Discovery and design of complex, data-driven capabilities in regulated environments. We define information flows, evidential logic, governance controls and operational constraints before delivery begins.",
    features: [
      "GDS Discovery & Alpha delivery",
      "Investigative data flow design",
      "Requirements & evidential modelling",
      "Legal, policy & operational alignment"
    ],
    benefits: ["Reduced delivery risk", "Clear decision points", "Audit-ready logic"]
  },
  {
    id: "assured-implementation",
    title: "Assured Implementation",
    category: "Engineering",
    description:
      "Senior-led delivery of complex data, cloud and integration programmes across government and regulated sectors—supporting mobilisation through to live service with governance built in.",
    features: [
      "Cloud & data platform delivery (AWS / secure estates)",
      "Integration of legacy and mission systems",
      "Agile delivery within regulatory constraints",
      "Delivery governance & assurance"
    ],
    benefits: ["Predictable delivery", "Operational resilience", "Stakeholder confidence"]
  },
  {
    id: "enterprise-advisory",
    title: "Enterprise Advisory",
    category: "Strategy",
    description:
      "Decision support for senior stakeholders navigating complex regulatory, technical and operational change. Clear options, delivery strategies and risk-based recommendations grounded in real programme delivery.",
    features: [
      "Delivery & operating model design",
      "Framework-aligned engagement (e.g., G-Cloud)",
      "Programme recovery & assurance",
      "Senior interim and advisory support"
    ],
    benefits: ["Executive alignment", "Reduced uncertainty", "Improved outcomes"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "investigative-capability-modernisation",
    sector: "National security / law enforcement",
    classification: "Anonymised programme case study",
    summary:
      "Led analysis and delivery design for a cross-organisation investigative capability enabling secure access to high-volume communications data, translating legal/policy constraints into operational workflows and verifiable requirements.",
    outcomes: [
      "Defined end-to-end investigative workflows and evidential logic to support defensible operational use",
      "Improved delivery predictability through structured epics, user stories, acceptance criteria and operational rules",
      "Reduced integration risk by clarifying system boundaries, interfaces and data handling constraints",
      "Accelerated stakeholder decision-making via options analysis and clear trade-offs"
    ],
    technologies: [
      "Secure data platforms",
      "API/integration patterns",
      "Event-driven architectures",
      "Data exploitation and analytics",
      "AI/ML-assisted triage (use-case evaluation)"
    ],
    delivery: [
      "Discovery-to-delivery traceability (policy → requirements → acceptance criteria)",
      "Governance and delivery assurance for regulated programmes",
      "Stakeholder facilitation across technical, operational and legal audiences"
    ]
  },
  {
    id: "aws-event-driven-file-access",
    sector: "Public health / operational services",
    classification: "Anonymised MVP delivery case study",
    summary:
      "Designed and delivered an event-driven ‘simple file access’ capability to enable controlled ingestion, processing and distribution of operational files, including notification and alerting for service reliability.",
    outcomes: [
      "Delivered an MVP architecture with clear operational runbooks and alerting to support supportability",
      "Implemented duplicate handling and deterministic processing rules to improve data quality",
      "Enabled faster turnaround for operational file handling with automated notifications",
      "Improved resilience by decoupling ingestion, processing and outbound distribution"
    ],
    technologies: [
      "AWS S3",
      "AWS Lambda",
      "Amazon EventBridge",
      "Gov.uk Notify",
      "Structured logging and operational alerting"
    ],
    delivery: [
      "Architecture definition + epics/stories + acceptance criteria",
      "Operational readiness (alerts, failure modes, runbooks)",
      "Controls for duplication, retries and idempotency"
    ]
  },
  {
    id: "legacy-modernisation-data-integration",
    sector: "Regulated enterprise / legacy estates",
    classification: "Anonymised transformation case study",
    summary:
      "Supported a modernisation programme decoupling legacy systems and establishing a scalable integration approach to improve reliability, change velocity and governance for critical services.",
    outcomes: [
      "Reduced delivery friction by clarifying target-state interfaces and data contracts",
      "Improved resilience through clearer ownership boundaries and integration patterns",
      "Strengthened governance by standardising requirements, non-functional constraints and quality gates",
      "Improved stakeholder confidence via transparent RAID management and delivery reporting"
    ],
    technologies: [
      "Integration and API design",
      "Cloud migration planning",
      "Data pipelines and batch/stream patterns",
      "Security and compliance controls"
    ],
    delivery: [
      "Programme planning and mobilisation support",
      "Non-functional requirements and service constraints",
      "Cross-team coordination and delivery governance"
    ]
  },
  {
    id: "ai-enabled-knowledge-workflows",
    sector: "Regulated operations",
    classification: "Anonymised applied AI case study",
    summary:
      "Designed and evaluated AI-assisted knowledge workflows to improve consistency and auditability of outputs, including structured prompting, quality checks, and alignment to acceptance criteria prior to rollout.",
    outcomes: [
      "Improved consistency by defining structural inputs/constraints and standard response formats",
      "Reduced risk through evaluation against acceptance criteria and stakeholder expectations",
      "Identified suitable use-cases and guardrails for responsible adoption",
      "Enabled faster knowledge retrieval and drafting for operational teams"
    ],
    technologies: [
      "RAG concepts (retrieval augmented generation)",
      "Embeddings and semantic search patterns",
      "Prompt constraints and response validation",
      "Human-in-the-loop review workflows"
    ],
    delivery: [
      "Use-case shaping, risk controls and evaluation approach",
      "Acceptance criteria and rollout readiness checks",
      "Stakeholder alignment for safe operational adoption"
    ]
  }
];
