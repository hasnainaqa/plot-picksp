// src/Components/LandingPage/PlotUnfolds.tsx
import { useState } from "react";
import { Eye, Lightbulb, Trophy, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import PlotUnfold from "../assets/PlotUnfold.svg";

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
      "PlotPicks puts you in the game. Every episode becomes a chance to prove you called it first and to cash in on your reality TV expertise.",
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
      "Before the episode airs, lock in your predictions. Who will be eliminated? Who will find love? Make your picks based on trailers, teasers, and your own intuition.",
      "Our intuitive interface makes it easy to place your bets on all the key moments. The more accurate you are, the more points you score.",
    ],
    tagline: "Think you know what happens next? Prove it.",
    image: "/images/plot-predict.jpg",
  },
  {
    id: "win",
    label: "WIN",
    icon: Trophy,
    title: "Know more, win more",
    content: [
      "Compete against friends and fans across the country. Track your ranking in real-time on the global leaderboard and earn bragging rights.",
      "Winning isn’t just about points. Unlock exclusive badges, achievements, and rewards as you prove your prediction prowess week after week.",
    ],
    tagline: "Turn your TV obsession into tangible rewards.",
    image: "/images/plot-win.jpg",
  },
  {
    id: "getPaid",
    label: "GET PAID",
    icon: DollarSign,
    title: "You wins, Your way, Your wallet",
    content: [
      "Your correct predictions translate directly into cash prizes. At the end of each season, top players can withdraw their winnings securely and easily.",
      "We offer multiple payout options to get your money quickly. It’s the ultimate reward for being the most dedicated and insightful fan.",
    ],
    tagline: "Get paid for being a super fan. It’s that simple.",
    image: "/images/plot-paid.jpg",
  },
];

const PlotUnfolds: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabData[0].id);

  const activeContent = tabData.find((tab) => tab.id === activeTab);

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
        <h2 className="mb-12 text-center text-[48px] font-semibold leading-[100%]">
          The Plot Unfolds
        </h2>

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-[72px] py-3 text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none sm:text-base ${
                activeTab === tab.id
                  ? "bg-gradient-to-b from-blue-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                  : `border-[0.5px] bg-gray-900/60 text-gray-400 hover:bg-gray-800 `
              }`}
              style={
                activeTab === tab.id
                  ? {}
                  : {
                      background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
                      border: `0.5px solid #FFFFFF33`,
                    }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-[20px] border border-white/10 bg-black/30 backdrop-blur-sm"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left Column: Text Content */}
            <div className="px-12 py-8">
              {activeContent && (
                <>
                  <div className="mb-6 flex items-center gap-4 text-white ">
                    <activeContent.icon size={20} />
                    <span className="font-medium text-lg leading-[100%] tracking-[0%]">
                      {activeContent.label}
                    </span>
                  </div>
                  <h3 className="mb-4 font-semibold text-[24px] leading-[100%]">
                    {activeContent.title}
                  </h3>
                  <div className="space-y-4 font-normal text-[16px] leading-[26px] tracking-[0%]">
                    {activeContent.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-6 font-semibold italic text-white">
                    {activeContent.tagline}
                  </p>
                  
                  <button className="mt-8 rounded-full border  px-8 py-5 font-semibold text-white transition-all duration-300 ease-in-out hover:border-purple-500 hover:bg-purple-600/20 focus:outline-none ">
                    Join Now
                  </button>
                </>
              )}
            </div>

            {/* Right Column: Image with Transition */}
            <div className="relative h-64 w-full md:h-full md:px-4 md:py-6 px-0 py-0">
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
                    className="h-[418px] w-[524px] object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-80 left-48 w-[600px] h-[600px] -z-10 rounded-full"
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
