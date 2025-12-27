import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ItineraryTimeline() {
  const sectionRef = useRef(null);
  const svgWrapRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const svgWrap = svgWrapRef.current;
    const section = sectionRef.current;
    
    const length = path.getTotalLength();

    /* ===== Initial states ===== */
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.set(svgWrap, {
      opacity: 0,
      scale: 3,
      y: 200,
    });

    /* ===== Show/hide based on section visibility ===== */
    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => gsap.to(svgWrap, { opacity: 1, duration: 0.5 }),
      onLeave: () => gsap.to(svgWrap, { opacity: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(svgWrap, { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(svgWrap, { opacity: 0, duration: 0.5 }),
    });

    /* ===== Build path (only within section bounds) ===== */
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    /* ===== Camera moves along path (only within section bounds) ===== */
    gsap.to(svgWrap, {
      y: -500,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    /* ===== Continue moving up after path ends ===== */
    gsap.to(svgWrap, {
      y: -2000,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const events = [
    { time: "Feb 22, 8:30 AM", title: "Reporting", side: "left" },
    { time: "Feb 22, 9:00 AM", title: "Registrations begins", side: "right" },
    { time: "Feb 22, 10:30 AM", title: "Opening Ceremony", side: "left" },
    { time: "Feb 22, 12:00 PM", title: "Hackathon starts", side: "right" },
    { time: "Feb 22, 5:00 PM", title: "High Tea", side: "left" },
    { time: "Feb 22, 7:00 PM", title: "Mentorship round I", side: "right" },
    { time: "Feb 22, 9:00 PM", title: "Dinner", side: "left" },
    { time: "Feb 23, 8:30 AM", title: "Breakfast", side: "right" },
    { time: "Feb 23, 9:00 AM", title: "Mentorship round II", side: "left" },
    { time: "Feb 23, 12:00 PM", title: "Hackathon ends", side: "right" },
    { time: "Feb 23, 12:15 PM", title: "Lunch", side: "left" },
    { time: "Feb 23, 1:00 PM", title: "Evaluation Begins", side: "right" },
    { time: "Feb 23, 4:00 PM", title: "Results & Closing ceremony", side: "left" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[400vh] bg-white overflow-hidden"
    >
      {/* Title - F1 Themed */}
      <div className="sticky top-8 left-8 z-20 pointer-events-none">
        <div className="relative inline-block">
          {/* Background accent */}
          <div className="absolute -inset-2 bg-red-600 opacity-20 blur-xl" />
          
          {/* Main title */}
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-red-600 drop-shadow-lg tracking-tighter uppercase italic transform -skew-x-6">
              Race Schedule
            </h2>
            
            {/* Speed lines */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 flex gap-1 mr-3">
              <div className="w-8 h-1 bg-red-600" />
              <div className="w-6 h-1 bg-red-600 opacity-70" />
              <div className="w-4 h-1 bg-red-600 opacity-40" />
            </div>
          </div>
        </div>
      </div>

      {/* SVG CAMERA - Fixed position, scrolls with content */}
      <div
        ref={svgWrapRef}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-10"
        style={{ opacity: 0 }}
      >
        <svg
          viewBox="0 0 340 579"
          className="w-[260px] md:w-[320px] drop-shadow-[0_0_20px_rgba(100,100,100,0.3)]"
        >
          <path
            ref={pathRef}
            d="M183.516 32.8216C183.516 32.8216 39.5161 22.3216 35.5161 121.322C31.5161 220.322 260.881 194.249 256.516 296.322C252.747 384.471 79.5158 497.822 35.5161 364.822C-8.48364 231.822 435.759 475.043 270.016 545.822"
            fill="none"
            stroke="#000000"
            strokeWidth="60"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Timeline Events - F1 HUD Style */}
      <div className="relative z-20 pt-32 pb-96 max-w-7xl mx-auto">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`flex items-center mb-20 px-4 ${
              event.side === "left" 
                ? "justify-start md:pl-12 lg:pl-20" 
                : "justify-end md:pr-12 lg:pr-20"
            }`}
          >
            <div className="group relative w-full max-w-md">
              {/* F1 HUD Card */}
              <div className="relative bg-black border-4 border-red-600 overflow-hidden transition-all duration-300 group-hover:border-red-500 group-hover:shadow-2xl group-hover:shadow-red-600/20">
                
                {/* Top red stripe */}
                <div className="h-2 w-full bg-red-600" />
                
                {/* Main content */}
                <div className="p-5 bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
                  {/* Time display - F1 style */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-1 h-12 bg-red-600" />
                    <div className="font-mono">
                      <div className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
                        Time
                      </div>
                      <div className="text-white text-lg font-black tracking-tight leading-tight">
                        {event.time}
                      </div>
                    </div>
                  </div>
                  
                  {/* Event title */}
                  <div className="ml-4 pl-3 border-l-2 border-zinc-800">
                    <h3 className="text-white text-xl md:text-2xl font-black leading-tight tracking-tight uppercase group-hover:text-red-50 transition-colors duration-300">
                      {event.title}
                    </h3>
                  </div>
                  
                  {/* Bottom status bar */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-red-600 to-transparent" />
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-red-600 rounded-full" />
                      <div className="w-1 h-1 bg-red-600 rounded-full opacity-50" />
                      <div className="w-1 h-1 bg-red-600 rounded-full opacity-25" />
                    </div>
                  </div>
                </div>

                {/* Corner indicators - F1 style */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-red-600" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-red-600" />
                
                {/* Position number (index) */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-red-600 flex items-center justify-center font-black text-white text-lg">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 -z-10 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}