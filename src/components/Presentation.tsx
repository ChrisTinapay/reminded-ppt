"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  Brain, 
  BookOpen, 
  Target, 
  Lightbulb, 
  Layers, 
  Code, 
  BarChart3, 
  GraduationCap,
  Bell,
  MessageCircle,
  Heart
} from "lucide-react";

// --- Data ---

const slides = [
  {
    id: "notification-hook-1",
    title: "",
    subtitle: "",
    icon: MessageCircle,
    content: [
      { 
        type: "notification", 
        app: "Messages",
        title: "New Notification", 
        message: "❤️",
        time: "Now",
        icon: Heart,
        color: "bg-indigo-500"
      }
    ],
    section: "Hook 1"
  },
  {
    id: "notification-hook-2",
    title: "",
    subtitle: "",
    icon: Brain,
    content: [
      { 
        type: "notification", 
        app: "RemindED",
        title: "Daily Review", 
        message: "Don't forget! You have 15 cards due for review today to maintain 95% retention.",
        time: "2m ago",
        icon: Brain,
        color: "bg-indigo-500"
      }
    ],
    section: "Hook 2"
  },
  {
    id: "intro",
    title: "RemindED",
    subtitle: "AI-Powered Spaced Repetition for Enhanced Retention",
    icon: Brain,
    content: [
      { type: "text", value: "Revolutionizing study habits with adaptive learning technology." },
      { type: "highlight", value: "Presentation for Defense" }
    ],
    section: "Intro"
  },
  {
    id: "problem",
    title: "1. The Problem",
    icon: Lightbulb,
    content: [
      { type: "point", label: "Core Issue", value: "Students forget 90% of new info within a week (Ebbinghaus Forgetting Curve)." },
      { type: "point", label: "Current Habits", value: "Passive learning (cramming/re-reading) is ineffective." },
      { type: "point", label: "Gap", value: "Lack of personalized, adaptive tools that automate review scheduling." }
    ],
    section: "Problem"
  },
  {
    id: "sop",
    title: "Statement of the Problem",
    icon: Lightbulb,
    content: [
      { type: "point", label: "1. Development", value: "How can a spaced repetition system supported by AI be developed to support students in improving their knowledge retention?" },
      { type: "point", label: "2. Features", value: "What features in the system are needed to support students?" },
      { type: "point", label: "3. Effectiveness", value: "Effectiveness of the system in knowledge retention based on students’ feedback and performance metrics, particularly in terms of:" },
      { type: "list", items: [
          "3.1. Ease of Use",
          "3.2. Ease of Learning",
          "3.3. Perceived Usefulness",
          "3.4. Knowledge Retention"
        ] 
      }
    ],
    section: "SOP"
  },
  {
    id: "solution",
    title: "2. The Solution (RemindED)",
    icon: Target,
    content: [
      { type: "text", value: "A web application using AI and Spaced Repetition." },
      { type: "sub-header", value: "How it works:" },
      { type: "list", items: [
          "Teacher uploads PDF syllabus/notes.",
          "AI (Gemini API) generates multi-level questions based on Bloom's Taxonomy.",
          "System schedules reviews using the SM-2 Algorithm based on user performance."
        ] 
      },
      { type: "point", label: "Target Users", value: "1st & 2nd Year BSCS and Education students at OLOPSC." }
    ],
    section: "Solution"
  },
  {
    id: "framework",
    title: "3. Theoretical Framework",
    icon: BookOpen,
    content: [
      { type: "point", label: "Ebbinghaus Forgetting Curve & Spacing Effect", value: "Justifies when to review." },
      { type: "point", label: "Bloom's Taxonomy", value: "Justifies the structure of the questions (recall to analysis)." },
      { type: "point", label: "Adaptive Learning Theory", value: "Justifies the personalization." },
      { type: "point", label: "Technology Acceptance Model (TAM)", value: "Justifies evaluation metrics (Ease of Use, Usefulness)." }
    ],
    section: "Framework"
  },
  {
    id: "objectives",
    title: "4. Objectives",
    icon: Layers,
    content: [
      { type: "point", label: "General", value: "Develop and evaluate RemindED." },
      { type: "sub-header", value: "Specific Objectives:" },
      { type: "list", items: [
          "Design/Develop the RemindED web application.",
          "Implement AI for Bloom's-based quiz generation.",
          "Implement a modified SM-2 algorithm.",
          "Evaluate impact on Knowledge Retention.",
          "Assess via ISO 25010 and WCAG 2.1 AA."
        ]
      }
    ],
    section: "Objectives"
  },
  {
    id: "methodology",
    title: "5. Methodology",
    icon: GraduationCap,
    content: [
      { type: "point", label: "Research Design", value: "Quantitative (Developmental, Experimental, & Descriptive-Evaluative)." },
      { type: "grid", items: [
          { label: "Developmental", value: "Scrum Methodology" },
          { label: "Sampling", value: "Stratified Random Sampling" },
          { label: "Respondents", value: "1st & 2nd Year CS & Education students (OLOPSC)" }
        ]
      },
      { type: "sub-header", value: "Ethics & Privacy:" },
      { type: "list", items: [
          "Adherence to Data Privacy Act of 2012.",
          "Data anonymized (e.g., Student1, Educator1).",
          "Informed consent forms required; Voluntary participation."
        ]
      },
      { type: "sub-header", value: "Instruments & Procedure:" },
      { type: "list", items: [
          "Instrument 1: Survey (ISO 25010, TAM, WCAG 2.1 AA).",
          "Instrument 2: Knowledge Tests (Pre-test & Post-test).",
          "Procedure: Request Letter → Pre-test → System Use → Post-test."
        ]
      }
    ],
    section: "Methodology"
  },
  {
    id: "stack",
    title: "6. Technical Stack",
    icon: Code,
    content: [
      { type: "grid", items: [
          { label: "Frontend", value: "React, Next.js, Tailwind CSS" },
          { label: "Backend", value: "Supabase (Database/Auth)" },
          { label: "AI/Logic", value: "Gemini API, SM-2 Algorithm" },
          { label: "Tools", value: "Trello, Figma, Git/GitHub, Vercel" }
        ]
      }
    ],
    section: "Tech Stack"
  },
  {
    id: "stats",
    title: "7. Key Statistics",
    icon: BarChart3,
    content: [
      { type: "quote", value: "\"86% of educational organizations now use generative AI\"", author: "Microsoft, 2025" },
      { type: "quote", value: "\"Spaced learning results in much better long-term memory compared to cramming\"", author: "Liu et al., 2024" }
    ],
    section: "Stats"
  },
  {
    id: "final-chat",
    title: "",
    subtitle: "",
    icon: MessageCircle,
    content: [
      {
        type: "chat-bubble",
        text: "I want to be reminded 🥹",
        isTyping: true
      }
    ],
    section: "End"
  }
];

// --- Components ---

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const SlideIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden flex flex-col relative selection:bg-indigo-500/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-slate-800 z-50">
        <motion.div 
          className="h-full bg-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Header / Nav Dots */}
      <header className="p-6 flex justify-between items-center z-40">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xl">
          <Brain className="w-6 h-6" />
          <span>RemindED</span>
        </div>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                setCurrentSlide(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? "bg-indigo-400 w-8" : "bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>
      </header>

      {/* Main Slide Content */}
      <main className="flex-1 flex items-center justify-center p-8 z-10 relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction * 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -100, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-5xl"
          >
            {slides[currentSlide].title && (
              <div className="mb-8 flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400">
                  <SlideIcon className="w-8 h-8" />
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-indigo-200">
                  {slides[currentSlide].title}
                </h1>
              </div>
            )}
            
            {slides[currentSlide].subtitle && (
               <p className="text-3xl text-indigo-300 mb-8 -mt-4">{slides[currentSlide].subtitle}</p>
            )}

            <div className="space-y-6">
              {slides[currentSlide].content.map((item, idx) => (
                <ContentItem key={idx} item={item} index={idx} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Controls */}
      <footer className="p-6 flex justify-between items-center text-slate-500 text-sm z-40">
        <div>{currentSlide + 1} / {slides.length}</div>
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight />
          </button>
        </div>
      </footer>
    </div>
  );
}

function ContentItem({ item, index }: { item: any; index: number }) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.5 }
    })
  };

  if (item.type === "text") {
    return (
      <motion.p 
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="text-3xl text-slate-300 leading-relaxed"
      >
        {item.value}
      </motion.p>
    );
  }

  if (item.type === "highlight") {
    return (
      <motion.div 
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="mt-8 inline-block px-8 py-4 bg-indigo-600 rounded-full text-2xl text-white font-semibold shadow-lg shadow-indigo-900/50"
      >
        {item.value}
      </motion.div>
    );
  }

  if (item.type === "point") {
    return (
      <motion.div 
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 p-4 rounded-lg hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-colors"
      >
        <span className="text-indigo-400 font-bold text-2xl min-w-fit">{item.label}:</span>
        <span className="text-slate-300 text-2xl">{item.value}</span>
      </motion.div>
    );
  }

  if (item.type === "sub-header") {
     return (
      <motion.h3 
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="text-3xl font-bold text-indigo-300 mt-6 mb-4"
      >
        {item.value}
      </motion.h3>
    );
  }

  if (item.type === "list") {
    return (
      <motion.ul 
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="list-disc list-outside ml-8 space-y-3 text-slate-300 text-2xl marker:text-indigo-500"
      >
        {item.items.map((subItem: string, subIdx: number) => (
          <li key={subIdx} className="pl-2">{subItem}</li>
        ))}
      </motion.ul>
    );
  }

  if (item.type === "grid") {
    return (
      <motion.div 
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
      >
        {item.items.map((subItem: any, subIdx: number) => (
          <div key={subIdx} className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 className="text-indigo-400 font-bold mb-3 text-2xl">{subItem.label}</h3>
            <p className="text-slate-300 text-xl">{subItem.value}</p>
          </div>
        ))}
      </motion.div>
    );
  }

  if (item.type === "quote") {
    return (
      <motion.blockquote 
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="border-l-4 border-indigo-500 pl-8 py-4 my-8 bg-gradient-to-r from-indigo-950/30 to-transparent rounded-r-lg"
      >
        <p className="text-3xl md:text-4xl italic text-slate-200 mb-4">{item.value}</p>
        <footer className="text-indigo-400 font-medium text-2xl">— {item.author}</footer>
      </motion.blockquote>
    );
  }

  if (item.type === "notification") {
    const Icon = item.icon || Bell;
    const colorClass = item.color || "bg-red-500";

    return (
      <motion.div
        custom={index}
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
        className="mx-auto w-full max-w-lg bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl overflow-hidden mt-12"
      >
        <div className="p-6 flex gap-5 items-start">
          <div className={`${colorClass} p-3 rounded-xl flex-shrink-0`}>
            <Icon className="w-8 h-8 text-white fill-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-slate-200 font-semibold text-xl">{item.app}</h3>
              <span className="text-slate-400 text-sm">{item.time}</span>
            </div>
            <h4 className="text-slate-100 font-bold text-2xl mb-1">{item.title}</h4>
            <p className="text-slate-300 text-xl leading-snug">{item.message}</p>
          </div>
        </div>
        <div className="bg-slate-900/50 px-6 py-3 flex justify-between text-slate-400 text-lg font-medium">
          <span>Manage</span>
          <span>View</span>
        </div>
      </motion.div>
    );
  }

  if (item.type === "chat-bubble") {
    return (
      <div className="flex flex-col items-end w-full max-w-4xl mx-auto mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.2 }}
          className="bg-[#0084FF] text-white rounded-[2rem] rounded-br-md px-8 py-5 text-4xl shadow-lg max-w-[85%] relative"
        >
          <p>{item.text}</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-slate-500 text-sm mt-2 font-medium mr-2"
        >
          Sent
        </motion.div>
      </div>
    );
  }

  return null;
}

