
import React from 'react';
import { ServiceDetail } from './types';

export const STRAPCO_S_LOGO = (
  <div className="flex items-center gap-5 group">
    <div className="relative flex items-center justify-center h-10 w-10 border border-white/10 rounded-sm overflow-hidden bg-navy-900 group-hover:border-brand/50 transition-colors">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transform transition-transform group-hover:scale-110 duration-500">
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
        Strategic Infrastructure
      </span>
    </div>
  </div>
);

export const SERVICES: ServiceDetail[] = [
  {
    id: 'product-ux',
    title: 'Product Intelligence',
    category: 'Design Engineering',
    description: 'Advanced user discovery and prototyping for mission-critical estates. We define the logic before we build the experience.',
    features: ['GDS Discovery & Alpha', 'Behavioral Research', 'Rapid Logic Prototyping', 'Accessibility Audit'],
    benefits: ['Risk Mitigation', 'High Adoption', 'Political Capital']
  },
  {
    id: 'delivery',
    title: 'Strategic Implementation',
    category: 'Systems Modernization',
    description: 'Elite delivery squads specialized in legacy extraction and cloud-native architecture for high-compliance environments.',
    features: ['Agile Transformation', 'Legacy Decoupling', 'Cloud Security Ops', 'Engineering Leadership'],
    benefits: ['Technical Debt Reduction', 'Operational Resilience', 'Velocity']
  },
  {
    id: 'advisory',
    title: 'Enterprise Advisory',
    category: 'Governance & Logic',
    description: 'High-level consulting for CxOs. We provide the clarity needed to navigate complex regulatory and technical landscapes.',
    features: ['Operating Model Design', 'Commercial Assurance', 'G-Cloud Procurement', 'Strategy Assessment'],
    benefits: ['Executive Alignment', 'Regulatory Confidence', 'Portfolio Efficiency']
  }
];
