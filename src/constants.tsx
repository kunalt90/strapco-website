import React from 'react';
import { ServiceDetail } from './types.ts';

export const STRAPCO_S_LOGO = (
  <div className="flex flex-col group">
    <div className="flex items-center gap-4">
      <div className="relative flex items-center justify-center h-10 w-10 border border-slate-200 rounded-lg overflow-hidden bg-white group-hover:border-brand/40 group-hover:bg-slate-50 transition-all duration-500 shadow-sm">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transform transition-transform group-hover:scale-110 duration-500">
          <path 
            d="M27 15C27 13.3431 25.6569 12 24 12H16C14.3431 12 13 13.3431 13 15V17C13 18.6569 14.3431 20 16 20H24C25.6569 20 27 21.3431 27 23V25C27 26.6569 25.6569 28 24 28H16C14.3431 28 13 26.6569 13 25" 
            stroke="currentColor" 
            className="text-slate-900 group-hover:text-brand transition-colors"
            strokeWidth="3.5" 
            strokeLinecap="round"
          />
          <rect x="24.5" y="25.5" width="4" height="4" fill="#0066FF" rx="1" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-slate-900 transition-all duration-500">
        Strapco<span className="text-brand">.</span>
      </span>
    </div>
    <span className="mt-1 text-[9px] font-semibold tracking-wider text-slate-400 uppercase font-mono">
      Business Transformation Consulting
    </span>
  </div>
);

export const STRAPCO_FULL_LOGO = (
  <div className="flex flex-col">
    <div className="flex items-center gap-5">
      <div className="relative h-14 w-14 border border-slate-100 bg-white flex items-center justify-center rounded-xl shadow-sm">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
           <path 
            d="M27 15C27 13.3431 25.6569 12 24 12H16C14.3431 12 13 13.3431 13 15V17C13 18.6569 14.3431 20 16 20H24C25.6569 20 27 21.3431 27 23V25C27 26.6569 25.6569 28 24 28H16C14.3431 28 13 26.6569 13 25" 
            stroke="#0F172A" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          />
          <rect x="24.5" y="25.5" width="4" height="4" fill="#0066FF" rx="1" />
        </svg>
      </div>
      <span className="text-4xl font-extrabold tracking-tight text-slate-900">
        Strapco<span className="text-brand">.</span>
      </span>
    </div>
    <div className="mt-4 flex items-center gap-3">
      <div className="h-px w-5 bg-brand/30"></div>
      <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-mono">
        Business Transformation Consulting
      </span>
    </div>
  </div>
);

export const SERVICES: ServiceDetail[] = [
  {
    id: 'transformation-discovery',
    title: 'Transformation Discovery and Mobilisation',
    category: 'Lot 3: Cloud Support',
    description: 'Senior-led transformation discovery and mobilisation to help organisations define scope, priorities and delivery approach before committing to change.',
    features: [
      'Senior-led discovery for complex transformation initiatives',
      'Stakeholder alignment and decision-making facilitation',
      'Requirements definition and backlog shaping',
      'Delivery roadmap and mobilisation planning',
      'Governance and operating model definition',
      'Options analysis to support informed delivery decisions',
      'Structured workshops to explore problems and delivery options',
      'Independent senior perspective on complex change initiatives'
    ],
    benefits: [
      'Clarifies objectives before committing to delivery',
      'Reduces delivery risk and wasted investment',
      'Enables faster, more confident decision-making',
      'Aligns stakeholders around shared priorities',
      'Improves readiness for Alpha and delivery phases',
      'Establishes clear governance and accountability',
      'Improves confidence in delivery approach and investment',
      'Creates a shared understanding of scope and next steps'
    ]
  },
  {
    id: 'programme-assurance',
    title: 'Programme Delivery Assurance and Intervention',
    category: 'Lot 3: Cloud Support',
    description: 'Independent, senior-led assurance and intervention for cloud-enabled programmes. Assessing delivery health, governance, risks and controls.',
    features: [
      'Independent assessment of programme and delivery health',
      'Review of governance, controls and decision-making structures',
      'Identification of delivery risks and issues',
      'Senior challenge and assurance to delivery leadership',
      'Targeted intervention to stabilise at-risk programmes',
      'Clear recommendations and recovery actions'
    ],
    benefits: [
      'Improves confidence in programme delivery',
      'Identifies risks before they impact outcomes',
      'Supports informed decision-making by senior stakeholders',
      'Helps stabilise programmes under pressure',
      'Reduces likelihood of delivery failure',
      'Provides independent, objective assurance'
    ]
  },
  {
    id: 'backlog-definition',
    title: 'Product and Backlog Definition for Cloud Services',
    category: 'Lot 3: Cloud Support',
    description: 'Helping organisations shape cloud-enabled services for delivery by translating user, operational and policy needs into prioritised backlogs.',
    features: [
      'Senior-led product discovery and backlog definition',
      'Prioritisation of user, operational and policy requirements',
      'Backlog refinement for cloud and SaaS services',
      'Roadmap definition aligned to delivery outcomes',
      'Support to agile delivery teams and product owners',
      'Independent product perspective in complex environments',
      'Translation of complex requirements into delivery-ready user stories',
      'Support for backlog governance and prioritisation decisions'
    ],
    benefits: [
      'Improves clarity and quality of delivery backlogs',
      'Reduces delivery friction and rework',
      'Enables teams to focus on highest-value outcomes',
      'Improves alignment between stakeholders and delivery teams',
      'Supports effective iteration of live services',
      'Strengthens product decision-making and prioritisation',
      'Reduces ambiguity in requirements and acceptance criteria',
      'Improves confidence in product scope and priorities'
    ]
  }
];
