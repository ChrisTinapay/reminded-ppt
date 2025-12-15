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
  Heart,
  Search,
  Hourglass,
  RotateCcw
} from "lucide-react";

// --- Data ---

const slides = [
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
    id: "decay",
    title: "The Reality of Retention",
    icon: Hourglass,
    content: [
        {
            type: "hourglass-demo",
            title: "Knowledge Decay",
            description: "Without reinforcement, knowledge fades rapidly over time, just like sand slipping away."
        }
    ],
    section: "Decay"
  },
  {
    id: "solution",
    title: "RemindED:\nAn AI-Powered Spaced Repetition Algorithm System for Enhanced Knowledge Retention",
    icon: Target,
    content: [
        { type: "image", src: "/logo.png", alt: "RemindED Logo" }
    ],
    section: "Solution"
  },
  {
    id: "problem",
    title: "Why This Study?",
    icon: Lightbulb,
    content: [
      {
        type: "web-search",
        query: "why do students forget so much?",
        results: [
            {
                url: "Research Paper › Chapter 1 › Problem",
                title: "The Forgetting Curve: Why We Lose 90% of Information",
                snippet: "Students forget 90% of new info within a week (Ebbinghaus Forgetting Curve). This natural memory decay is the primary barrier to long-term retention.",
                link: "https://docs.google.com/document/d/1htE4dMxS90M-K8h0B6eu9Sh4RhJScEGHewqKgGZWYpE/edit?tab=t.0#bookmark=id.bbvh1iadhab"
            },
            {
                url: "Research Paper › Chapter 1 › Background",
                title: "The Ebbinghaus Forgetting Curve: We Forget 70% in 24 Hours",
                snippet: " A concept from psychology called the Ebbinghaus Forgetting Curve, shows that our memory of new information drops sharply unless we make an effort to review it. Without reviewing, we can forget as much as 70% of what we have learned within 24 hours (Eval-Learn, 2025).",
                link: "https://docs.google.com/document/d/11-u0sawStH8RzY6nao2lJ6B3OYOGfV_1PoVqxs_doFk/edit?tab=t.0#bookmark=id.uh71uelp6hbv"
            }
        ],
        related: [
            "SDG 4: Quality Education",
            "Active recall vs passive review"
        ]
      }
    ],
    section: "Problem"
  },
  {
    id: "sop",
    title: "Statement of the Problem",
    icon: Lightbulb,
    content: [
      { type: "text", value: "Focus: Design, Development, & Evaluation of RemindED" },
      { type: "grid", items: [
          { label: "1. Integration", value: "How can AI & SM-2 optimize scheduling and assessment generation?" },
          { label: "2. Effectiveness", value: "Is there a significant difference in retention scores (Pre vs. Post)?" },
          { label: "3. Evaluation", value: "Assessing Functional Suitability, Performance, Usability, & Retention." }
        ]
      }
    ],
    section: "SOP"
  },
    {
      id: "methodology",
    title: "Methodology",
    icon: GraduationCap,
    content: [
      { type: "point", label: "Research Design", value: "Quantitative (Developmental, Experimental, & Descriptive-Evaluative)." },
      { type: "timeline", items: ["Developmental", "Experimental", "Descriptive-Evaluative"] },
      { type: "grid", items: [
  
          { label: "Sampling Technique", value: "Stratified Random Sampling" },
          { label: "Research Instruments", value: "• Survey (ISO 25010, TAM, WCAG 2.1 AA)\n• Knowledge Tests (Pre-test & Post-test)" },
        ]
      },
      { type: "sub-header", value: "Data Gathering Procedure" },
      { type: "process-timeline", items: [
          { title: "Pre-test", description: "Before using the system." },
          { title: "System Usage", description: "Respondents interact with RemindED." },
          { title: "Post-test", description: "After using the system." },
          { title: "Treatment of Data", description: "The collected data will be encoded and organized for analysis." }
        ]
      },
      { type: "sub-header", value: "Ethics & Privacy:" },
      { type: "list", items: [
          "Adherence to Data Privacy Act of 2012.",
          "Data anonymized (e.g., Student1, Educator1).",
          "Informed consent forms required; Voluntary participation."
        ]
      },
      
    ],
      section: "Methodology"
    },
    {
      id: "architecture",
      title: "Developmental Phase:\nCore Architectures & Features",
      icon: Code,
      content: [
        {
          type: "architecture-grid",
          columns: [
            {
              title: "The Learning Engine (Modified SM-2)",
              icon: Brain,
              items: [
                { title: "Automated Quality Score (q)", desc: "Objective calculation based on Accuracy + Response Time. Eliminates subjective user bias." },
                { title: "Optimized Repetition Density", desc: "Compressed second interval parameter (I₂ = 3 days). Accelerates initial reinforcement curve." },
                { title: "Mastery Threshold", desc: "Implemented exit condition (n > 3 successful recalls). Manages cognitive load by retiring mastered items." }
              ]
            },
            {
              title: "AI-Powered Content Generation",
              icon: Code,
              items: [
                { title: "Semantic LLM Pipeline", desc: "Engine: Google Gemini 2.5 Flash. Strategy: Long-Context Inference for whole-document coherence." },
                { title: "Pedagogical Constraint", desc: "\"Atomic Knowledge\" principle: Brief stems (<20 words). Varied cognitive complexity via Bloom’s Taxonomy." },
                { title: "Structured Output", desc: "Strict JSON Schema enforcement for predictable frontend rendering." }
              ]
            },
            {
              title: "Key System Features (RemindED)",
              icon: Target,
              items: [
                { title: "Automated Material Conversion", desc: "Instant transformation from passive PDFs to active, structured quizzes." },
                { title: "Adaptive Scheduling", desc: "Hyper-personalized Intervals (I) based on individual forgetting curves." },
                { title: "Gamified Rapid-Fire Review", desc: "Time-pressured interface leveraging the \"hesitation threshold.\"" }
              ]
            }
          ]
        }
      ],
      section: "Architecture"
    },
    {
      id: "stack",
    title: "Technical Stack",
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
            className="w-full max-w-6xl"
          >
            {slides[currentSlide].title && (
              <div className="mb-8 flex flex-col items-center gap-4 text-center">
                {slides[currentSlide].content.find((c: any) => c.type === "image") && (
                    <div className="mb-4">
                        <img 
                            src={(slides[currentSlide].content.find((c: any) => c.type === "image") as any).src} 
                            alt="Slide Logo" 
                            className="w-48 h-48 object-contain drop-shadow-2xl"
                        />
                    </div>
                )}
                <div className="flex items-center gap-4 justify-center">
                    {!slides[currentSlide].content.find((c: any) => c.type === "image") && (
                        <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400">
                        <SlideIcon className="w-8 h-8" />
                        </div>
                    )}
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-indigo-200 whitespace-pre-line">
                    {slides[currentSlide].title}
                    </h1>
                </div>
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

function ArchitectureGrid({ columns }: { columns: any[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {columns.map((col: any, idx: number) => {
                const Icon = col.icon;
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden flex flex-col h-full"
                    >
                        {/* Header */}
                        <div className="bg-slate-800 p-6 border-b border-slate-700 flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 leading-tight">{col.title}</h3>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 space-y-6">
                            {col.items.map((item: any, i: number) => (
                                <div key={i} className="group">
                                    <h4 className="text-indigo-300 font-bold text-lg mb-1 group-hover:text-indigo-200 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })}
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

  if (item.type === "architecture-grid") {
      return <ArchitectureGrid columns={item.columns} />;
  }

  if (item.type === "image") {
    return null; // Image is handled in the header now
  }

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
            <p className="text-slate-300 text-xl whitespace-pre-line">{subItem.value}</p>
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

  if (item.type === "web-search") {
    return (
      <motion.div
        custom={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl font-sans"
      >
        {/* Browser Header */}
        <div className="bg-slate-800 p-6 border-b border-slate-700 flex items-center gap-6">
            <div className="flex gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500"/>
                <div className="w-4 h-4 rounded-full bg-yellow-500"/>
                <div className="w-4 h-4 rounded-full bg-green-500"/>
            </div>
            <div className="flex-1 bg-slate-900 rounded-full px-6 py-3 flex items-center gap-3 text-slate-400 text-lg">
                <Search className="w-5 h-5" />
                <TypewriterText text={item.query} />
            </div>
        </div>

        {/* Search Results Body */}
        <div className="p-10 space-y-10">
            {/* Main Results */}
            {item.results.map((result: any, idx: number) => (
                <div key={idx}>
                    <div className="flex items-center gap-3 text-slate-400 text-base mb-2">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                            <Brain className="w-4 h-4" />
                        </div>
                        <span>{result.url}</span>
                    </div>
                    <a 
                        href={result.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 text-3xl hover:underline cursor-pointer font-medium mb-3 block"
                    >
                        {result.title}
                    </a>
                    <p className="text-slate-300 text-xl leading-relaxed">
                        {result.snippet}
                    </p>
                </div>
            ))}

            {/* Related Searches */}
            <div>
                <h4 className="text-slate-200 text-2xl font-medium mb-6">Related searches</h4>
                <div className="space-y-4">
                    {item.related.map((term: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-4 p-4 hover:bg-slate-800 rounded-lg cursor-pointer group transition-colors">
                            <Search className="w-6 h-6 text-slate-500 group-hover:text-indigo-400" />
                            <span className="text-indigo-300 text-xl">{term}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </motion.div>
    );
  }

  if (item.type === "hourglass-demo") {
      return (
          <HourglassDemo item={item} index={index} />
      );
  }

  if (item.type === "sm2-diagram") {
    return <SM2Diagram />;
  }

  if (item.type === "timeline") {
    return (
        <div className="relative mt-8">
            {/* Connecting Line */}
            <motion.div 
                className="absolute top-6 left-[10%] w-[80%] h-1 bg-slate-700"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            
            <div className="flex justify-between relative z-10">
                {item.items.map((phase: string, idx: number) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-12 h-12 rounded-full bg-indigo-600 border-4 border-slate-900 flex items-center justify-center text-white font-bold mb-4 shadow-lg shadow-indigo-900/50">
                            {idx + 1}
                        </div>
                        <div className="text-xl text-slate-300 font-medium text-center w-32">
                            {phase}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
  }

  if (item.type === "process-timeline") {
    return (
      <div className="relative mt-12 mb-12">
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-700" />
        <div className="space-y-12">
            {item.items.map((process: any, idx: number) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.3 }}
                    className="relative pl-16"
                >
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg z-10">
                        <div className="w-4 h-4 rounded-full bg-indigo-500" />
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-colors">
                        <h4 className="text-indigo-400 font-bold text-2xl mb-2">{process.title}</h4>
                        <p className="text-slate-300 text-xl">{process.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    );
  }

  return null;
}

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let index = 0;
    // Ensure we start with empty string and increment up to full length
    const interval = setInterval(() => {
      if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
      } else {
        clearInterval(interval);
      }
    }, 120); 

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="flex items-center">
      {displayedText}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-1 w-[2px] h-5 bg-indigo-400 inline-block align-middle"
      />
    </span>
  );
}

function HourglassDemo({ item, index }: { item: any, index: number }) {
    const [rotation, setRotation] = useState(0);
    const [isFlowing, setIsFlowing] = useState(true);

    const handleFlip = () => {
        setRotation(prev => prev + 180);
        setIsFlowing(false); // Reset flow
        setTimeout(() => setIsFlowing(true), 100); // Start flow slightly after flip starts
    };

    // Determine which bulb is currently "top" based on rotation
    // Even rotation (0, 360) -> Bulb A is Top
    // Odd rotation (180, 540) -> Bulb B is Top
    const isBulbATop = (rotation / 180) % 2 === 0;

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <p className="text-2xl text-slate-300 mb-12 text-center max-w-3xl">
                {item.description}
            </p>

            <div className="relative mb-12">
                {/* Hourglass Container */}
                <motion.div
                    animate={{ rotate: rotation }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                    className="relative w-64 h-80 flex flex-col items-center justify-center"
                >
                     {/* SVG Frame for Shape & Border */}
                     <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-2xl" viewBox="0 0 200 300">
                        <defs>
                             <linearGradient id="glass-shine" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                                <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                            </linearGradient>
                        </defs>
                        
                        {/* Outline Path */}
                        <path 
                         d="M -10 10 L 210 10 L 105 148 L 105 152 L 210 290 L -10 290 L 95 152 L 95 148 Z" 
                         fill="url(#glass-shine)" 
                         stroke="#475569" 
                         strokeWidth="6"
                         strokeLinejoin="round"
                         className="drop-shadow-lg"
                        />
                    </svg>

                     {/* Sand Container - Masked by CSS Clip Path to match SVG */}
                     {/* 
                        Coordinates Mapping:
                        200x300 viewBox
                        TL: 10,10 -> 5% 3.33%
                        TR: 190,10 -> 95% 3.33%
                        NeckR: 105,148 -> 52.5% 49.33%
                        NeckR_B: 105,152 -> 52.5% 50.66%
                        BR: 190,290 -> 95% 96.66%
                        BL: 10,290 -> 5% 96.66%
                        NeckL_B: 95,152 -> 47.5% 50.66%
                        NeckL: 95,148 -> 47.5% 49.33%
                     */}
                     <div 
                        className="absolute inset-0 w-full h-full z-10 bg-slate-800/30 backdrop-blur-[2px]"
                        style={{ 
                            clipPath: 'polygon(5% 3.33%, 95% 3.33%, 52.5% 49.33%, 52.5% 50.66%, 95% 96.66%, 5% 96.66%, 47.5% 50.66%, 47.5% 49.33%)' 
                        }}
                     >
                        <div className="relative w-full h-full">
                            {/* Top Half Area */}
                            <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
                                {/* Sand A */}
                                <motion.div 
                                    initial={false}
                                    animate={{ 
                                        height: isBulbATop ? (isFlowing ? "0%" : "100%") : (isFlowing ? "100%" : "0%")
                                    }}
                                    transition={{ duration: 5, ease: "linear" }}
                                    className="w-full bg-indigo-500 absolute left-0"
                                    style={{
                                        bottom: isBulbATop ? 0 : 'auto',
                                        top: isBulbATop ? 'auto' : 0
                                    }}
                                />
                            </div>

                             {/* Stream (Middle) */}
                             <div 
                                className={`absolute left-1/2 -translate-x-1/2 w-1 h-1/2 z-20 pointer-events-none overflow-hidden`}
                                style={{
                                    top: isBulbATop ? "50%" : "0%"
                                }}
                             >
                                 <AnimatePresence>
                                     {isFlowing && (
                                         <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "100%", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="w-1.5 bg-indigo-400 mx-auto rounded-full absolute"
                                            style={{
                                                top: isBulbATop ? 0 : 'auto',
                                                bottom: !isBulbATop ? 0 : 'auto'
                                            }}
                                         />
                                     )}
                                 </AnimatePresence>
                             </div>

                             {/* Bottom Half Area */}
                             <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden flex items-end">
                                {/* Sand B */}
                                <motion.div 
                                    initial={false}
                                    animate={{ 
                                        height: !isBulbATop ? (isFlowing ? "0%" : "100%") : (isFlowing ? "100%" : "0%")
                                    }}
                                    transition={{ duration: 5, ease: "linear" }}
                                    className="w-full bg-indigo-500 absolute left-0"
                                    style={{
                                        bottom: isBulbATop ? 0 : 'auto',
                                        top: isBulbATop ? 'auto' : 0
                                    }}
                                />
                             </div>
                        </div>
                     </div>
                </motion.div>
            </div>

            <button
                onClick={handleFlip}
                className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
                <RotateCcw className="w-6 h-6" />
                Flip Hourglass
            </button>
        </div>
    );
}

function SM2Diagram() {
  const nodeClass = "bg-slate-800 border border-slate-700 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-lg relative z-10 backdrop-blur-sm";
  const labelClass = "text-indigo-400 text-sm font-bold mb-1 uppercase tracking-wider";
  const valueClass = "text-slate-200 font-medium";

  return (
    <div className="w-full max-w-4xl mx-auto p-4 relative font-sans text-sm md:text-base mt-4">
        {/* Level 1: Input */}
        <div className="flex justify-center mb-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${nodeClass} w-72 border-indigo-500/50 bg-indigo-500/10`}
            >
                <span className={labelClass}>Student Input</span>
                <span className={valueClass}>Response Time + Accuracy</span>
            </motion.div>
        </div>

        {/* Connection Line */}
        <div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 h-12 w-0.5 bg-slate-600" />

        {/* Level 2: Calc Q */}
        <div className="flex justify-center mb-16 relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className={`${nodeClass} w-full`}
            >
                <span className={labelClass}>Calculate Quality Score (q)</span>
                <div className="grid grid-cols-4 gap-3 w-full mt-3 text-xs md:text-sm">
                    <div className="bg-slate-900/50 p-2 rounded border border-red-900/30 flex flex-col gap-1">
                        <div className="text-red-400 font-bold text-lg">q = 0</div>
                        <div className="text-slate-400">Incorrect</div>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded border border-yellow-900/30 flex flex-col gap-1">
                         <div className="text-yellow-400 font-bold text-lg">q = 3</div>
                         <div className="text-slate-400">Correct ({">"}15s)</div>
                    </div>
                     <div className="bg-slate-900/50 p-2 rounded border border-blue-900/30 flex flex-col gap-1">
                         <div className="text-blue-400 font-bold text-lg">q = 4</div>
                         <div className="text-slate-400">Correct (8-15s)</div>
                    </div>
                     <div className="bg-slate-900/50 p-2 rounded border border-green-900/30 flex flex-col gap-1">
                         <div className="text-green-400 font-bold text-lg">q = 5</div>
                         <div className="text-slate-400">Correct ({"<"}8s)</div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Level 3: Branching */}
        <div className="grid grid-cols-2 gap-8 relative">
             {/* Connector Lines (SVG) */}
             <svg className="absolute -top-16 left-0 w-full h-16 pointer-events-none" style={{ zIndex: 0 }}>
                 <path d="M 50% 0 L 50% 50% L 25% 50% L 25% 100%" fill="none" stroke="#475569" strokeWidth="2" />
                 <path d="M 50% 50% L 75% 50% L 75% 100%" fill="none" stroke="#475569" strokeWidth="2" />
             </svg>

             {/* Left Branch: Incorrect */}
             <div className="flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`${nodeClass} w-full max-w-xs border-red-500/30 bg-red-500/5 mb-8`}
                >
                    <span className="text-red-400 font-bold mb-2 block border-b border-red-500/20 pb-1 w-full">Incorrect (q &lt; 3)</span>
                    <div className="text-slate-300 text-sm space-y-1">
                        <div className="flex justify-between w-full"><span>Streak (n)</span> <span className="text-white font-mono">Reset to 0</span></div>
                        <div className="flex justify-between w-full"><span>Interval (I)</span> <span className="text-white font-mono">1 Day</span></div>
                    </div>
                </motion.div>
             </div>

             {/* Right Branch: Correct */}
             <div className="flex flex-col items-center">
                 <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`${nodeClass} w-full max-w-xs border-green-500/30 bg-green-500/5 mb-8`}
                >
                    <span className="text-green-400 font-bold mb-2 block border-b border-green-500/20 pb-1 w-full">Correct (q &ge; 3)</span>
                    <div className="text-slate-300 text-sm space-y-1">
                        <div className="flex justify-between w-full"><span>Streak (n)</span> <span className="text-white font-mono">Increment (+1)</span></div>
                        <div className="flex justify-between w-full"><span>Easiness (EF)</span> <span className="text-white font-mono">Update</span></div>
                    </div>
                </motion.div>

                {/* Arrow to Mastery */}
                <div className="h-8 w-0.5 bg-slate-600 mb-2"></div>

                {/* Mastery Check */}
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className={`${nodeClass} w-full max-w-xs border-yellow-500/30 bg-yellow-500/5`}
                >
                    <span className="text-yellow-400 font-bold mb-3">Is Streak (n) &gt; 3?</span>
                     <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-green-900/20 border border-green-500/30 p-2 rounded">
                            <div className="text-green-400 text-xs font-bold mb-1">YES</div>
                            <div className="text-slate-200 text-xs">Mastered</div>
                            <div className="text-slate-500 text-[10px]">(Remove)</div>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/30 p-2 rounded">
                            <div className="text-blue-400 text-xs font-bold mb-1">NO</div>
                            <div className="text-slate-200 text-xs">Schedule</div>
                            <div className="text-slate-500 text-[10px]">(Wait Interval)</div>
                        </div>
                     </div>
                </motion.div>
             </div>
        </div>
    </div>
  );
}
