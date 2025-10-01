// src/Components/LandingPage/PlotUnfolds.tsx
import { useState, useEffect } from "react";
import { Eye, Lightbulb, Trophy, Banknote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import PlotUnfold from "./assets/PlotUnfold.svg";
import Predict from "./assets/Predict.svg";
import Win from "./assets/Win.svg";
import GetPaid from "./assets/GetPaid.svg";

type TabData = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  content: string[];
  tagline: string;
  image: string;
};

const tabData: TabData[] = [
  {
    id: "watch",
    label: "WATCH",
    icon: Eye,
    title: "Your front-row seat to the drama",
    content: [
      "With PlotPicks, you’re not just watching your favorite shows, you’re predicting every twist, every recoupling, and every shocking score as it happens.",
      "PlotPicks puts you in the game. Every episode becomes a chance to prove you called it first and to cash in on your reality TV expertise. ",
    ],
    tagline: "It's not just TV anymore. It's your turn to play.",
    image: PlotUnfold,
  },
  {
    id: "predict",
    label: "PREDICT",
    icon: Lightbulb,
    title: "Think You Know what's comming next...",
    content: [
      "PlotPicks puts your instincts to the test. Every prediction is your chance to outsmart the storyline, prove you’re one step ahead, and rise above the crowd.",
      "Go bold. Trust your gut. Lock in your call before the next reveal flips the script. This isn’t guessing it’s gameplay.",
    ],
    tagline: "The real players don’t just watch the drama. They predict it.",
    image: Predict,
  },
  {
    id: "win",
    label: "WIN",
    icon: Trophy,
    title: "Know more, win more",
    content: [
      "In PlotPicks contests, the top 20% in cold hard cash. Each correct call pushes you closer to the payout zone, climbing the leaderboard and proving you’re amongst the best.",
      "Daily challenges and  prize pools are your shot to rise above the crowd. Rack up wins, collect real rewards, and join the elite who turn predictions into profit.",
    ],
    tagline: "Do you have what it takes to finish in the top 20%?",
    image: Win,
  },
  {
    id: "getPaid",
    label: "GET PAID",
    icon: Banknote,
    title: "You wins, Your way, Your wallet",
    content: [
      "Every victory deserves a payday. With PlotPicks, your winnings hit your wallet fast, secure, and on your terms.",
      "Choose cash-out straight to your card, direct to your bank, or through trusted wallets like PayPal or Venmo. No delays. No headaches. Just real money, right where you want it.",
    ],
    tagline:
      "Because in this game, every twist you conquer isn’t just bragging rights  it’s cash in your pocket.",
    image: GetPaid,
  },
];

const PlotUnfolds: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeContent = tabData[activeIndex];

  // Auto-cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative text-white mb-[250px] font-renner "
      style={{
        background: `
        radial-gradient(circle at top right, #230231 0%, transparent 25%)
        `,
      }}
    >
      {/* radial-gradient(circle at top left, #04203d 5%, transparent 40%), */}
      <div className="container mx-auto">
        <h2 className="mb-[50px] text-center text-[48px] font-semibold leading-[150%]">
          The Plot Unfolds
        </h2>

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
          {tabData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full w-[200px] h-[50px] text-base font-medium transition-all leading-[150%] duration-300 ease-in-out focus:outline-none sm:text-base ${
                activeIndex === index
                  ? "bg-gradient-to-b from-blue-500 to-cyan-400 text-white"
                  : `border hover:bg-gray-800 `
              }`}
              style={
                activeIndex === index
                  ? {}
                  : {
                      background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
                      border: `1px solid #FFFFFF33`,
                    }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="md:mx-auto max-w-6xl overflow-hidden rounded-[20px] border border-white/10 bg-black/30 backdrop-blur-sm mx-4"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
          }}
        >
          <div className="flex md:flex-row flex-col justify-between">
            <div className="px-12 py-8 items-start">
              {activeContent && (
                <>
                  <div className="mb-6 flex items-center gap-4 text-white ">
                    <activeContent.icon size={24} />
                    <span className="font-medium text-lg text-start">
                      {activeContent.label}
                    </span>
                  </div>
                  <h3 className="mb-4 font-semibold text-[24px] leading-[100%] text-start">
                    {activeContent.title}
                  </h3>
                  <div className="space-y-2 font-normal text-base leading-[26px] tracking-[0%] text-start">
                    {activeContent.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-2 font-bold leading-[26px] text-base text-white text-start">
                    {activeContent.tagline}
                  </p>

                  <button className="mt-8 rounded-full border border-[#D8D8D8] h-[48px] px-8 font-semibold text-white transition-all duration-300 ease-in-out hover:border-purple-500 text-sm focus:outline-none flex items-center "
                  style={{
                    background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
                  }}>
                    Join Now
                  </button>
                </>
              )}
            </div>

            {/* Right Column: Image with Transition */}
            <div className="relative md:h-full md:px-4 md:py-6">
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeContent?.image}
                    src={activeContent?.image}
                    alt={activeContent?.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full lg:min-w-[524px] h-auto object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-72 left-52 w-[700px] h-[700px] -z-10 rounded-full"
        style={{
          background: `
      radial-gradient(circle, #230231 0%, transparent 70%)
    `,
        }}
      />
    </section>
  );
};

export default PlotUnfolds;
