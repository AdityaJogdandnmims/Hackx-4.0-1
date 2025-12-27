import { useState } from 'react';

export default function ProblemStatements() {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const problems = [
    {
      id: 1,
      title: "Virtual Medical Examiner Assistant (VMEA)",
      shortDesc: "Create an AI-powered avatar-based medical examiner assistant that conducts preliminary insurance health assessments through natural...",
      fullDesc: "Create an AI-powered avatar-based medical examiner assistant that conducts preliminary insurance health assessments through natural conversation, integrating with existing health data systems and providing standardized medical reports."
    },
    {
      id: 2,
      title: "Multi-Lingual Medical Screening Bot",
      shortDesc: "Develop a medical screening assistant that can conduct preliminary health assessments in multiple Indian languages, using avatars representing local...",
      fullDesc: "Develop a medical screening assistant that can conduct preliminary health assessments in multiple Indian languages, using avatars representing local cultures and providing culturally sensitive health guidance."
    },
    {
      id: 3,
      title: "Find Your Fit AI",
      shortDesc: "Develop an AI-powered solution that predicts a user's shoulder width, chest, and waist measurements (in cm) based on their height (in cm)...",
      fullDesc: "Develop an AI-powered solution that predicts a user's shoulder width, chest, and waist measurements (in cm) based on their height (in cm) and suggests the appropriate clothing size (S, M, L, XL, XXL)."
    },
    {
      id: 4,
      title: "Comedy Event Marketplace Platform",
      shortDesc: "The live comedy scene currently lacks a centralized digital platform to efficiently connect venues, comedians, and audiences. Organizing comedy...",
      fullDesc: "The live comedy scene currently lacks a centralized digital platform to efficiently connect venues, comedians, and audiences. Organizing comedy events involves fragmented communication across multiple channels, making it difficult for venue owners to discover talent and for comedians to find performing opportunities."
    },
    {
      id: 5,
      title: "Real-time Medical Risk Analyzer",
      shortDesc: "Create an AI system that processes medical responses in real-time, provides immediate risk assessments, and suggests additional questions...",
      fullDesc: "Create an AI system that processes medical responses in real-time, provides immediate risk assessments, and suggests additional questions based on previous responses to ensure comprehensive health evaluation."
    },
    {
      id: 6,
      title: "Smart Cafe: Gamified Ordering & Operations",
      shortDesc: "Develop a Zepto-style web application for a café that integrates gamification techniques to enhance customer engagement and optimize operations. T...",
      fullDesc: "Develop a Zepto-style web application for a café that integrates gamification techniques to enhance customer engagement and optimize operations. The platform should streamline ordering, table management, and reward systems while providing real-time analytics."
    },
    {
      id: 7,
      title: "API-Driven Event Invitation System",
      shortDesc: "Build an API-driven event invitation and management system that replicates the core functionalities of Apple Invites. The solution shou...",
      fullDesc: "Build an API-driven event invitation and management system that replicates the core functionalities of Apple Invites. The solution should enable seamless event creation, guest management, RSVP tracking, and real-time updates."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-20 px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Racing stripes decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with F1 styling */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            
            <div className="relative">
              {/* Speed lines before title */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 flex gap-2 mr-6">
                <div className="w-12 h-1 bg-red-600" />
                <div className="w-8 h-1 bg-red-600 opacity-70" />
                <div className="w-4 h-1 bg-red-600 opacity-40" />
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600 uppercase italic transform -skew-x-6 tracking-tighter">
                Problem Statements
              </h1>

              {/* Speed lines after title */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 flex gap-2 ml-6">
                <div className="w-4 h-1 bg-red-600 opacity-40" />
                <div className="w-8 h-1 bg-red-600 opacity-70" />
                <div className="w-12 h-1 bg-red-600" />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600" />
            <p className="text-zinc-400 text-lg font-bold tracking-widest uppercase">
              Choose Your Track
            </p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600" />
          </div>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={problem.id}
              className="group relative"
              onClick={() => setSelectedProblem(problem)}
            >
              {/* Card */}
              <div className="relative bg-zinc-950 border-2 border-red-600/30 hover:border-red-500 transition-all duration-300 cursor-pointer overflow-hidden h-full">
                
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
                
                {/* Main content */}
                <div className="p-6">
                  {/* Position number badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600 flex items-center justify-center font-black text-white text-xl border-2 border-red-500 shadow-lg shadow-red-600/50">
                      {String(problem.id).padStart(2, '0')}
                    </div>
                    
                    {/* Status indicator */}
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-black uppercase leading-tight mb-4 group-hover:text-red-50 transition-colors">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {problem.shortDesc}
                  </p>

                  {/* Bottom bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <span className="text-red-500 text-xs font-bold tracking-widest uppercase">
                      View Details
                    </span>
                    <svg className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-red-600 border-r-transparent opacity-50" />
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[20px] border-l-[20px] border-b-red-600 border-l-transparent opacity-50" />
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full details */}
      {selectedProblem && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProblem(null)}
        >
          <div 
            className="bg-zinc-950 border-4 border-red-600 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top stripe */}
            <div className="h-2 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
            
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-600 flex items-center justify-center font-black text-white text-2xl border-2 border-red-500 shadow-lg shadow-red-600/50">
                    {String(selectedProblem.id).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-1">
                      Problem Statement
                    </div>
                    <h2 className="text-white text-2xl md:text-3xl font-black uppercase leading-tight">
                      {selectedProblem.title}
                    </h2>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProblem(null)}
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 flex items-center justify-center text-white font-black transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Full description */}
              <div className="bg-black/50 border-l-4 border-red-600 p-6 mb-6">
                <p className="text-zinc-300 leading-relaxed">
                  {selectedProblem.fullDesc}
                </p>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-red-600 to-transparent" />
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  <div className="w-2 h-2 bg-red-600 rounded-full opacity-50" />
                  <div className="w-2 h-2 bg-red-600 rounded-full opacity-25" />
                </div>
              </div>
            </div>

            {/* Corner indicators */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600" />
          </div>
        </div>
      )}
    </div>
  );
}