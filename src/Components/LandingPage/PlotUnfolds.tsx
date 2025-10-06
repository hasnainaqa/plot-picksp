// src/Components/LandingPage/PlotUnfolds.tsx
import { useState } from "react";
import { useEffect } from "react";
import { Eye, Lightbulb, Trophy, Banknote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import PlotUnfold from "./LandingPageAssets/PlotUnfold.svg";
import Predict from "./LandingPageAssets/Predict.svg";
import Win from "./LandingPageAssets/Win.svg";
import GetPaid from "./LandingPageAssets/GetPaid.svg";

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
  const activeContent = tabData[activeIndex]; // define first
  const [currentImage, setCurrentImage] = useState(activeContent.image);

  useEffect(() => {
    const img = new Image();
    img.src = activeContent.image;
    img.onload = () => {
      setCurrentImage(activeContent.image);
    };
  }, [activeContent.image]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % tabData.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section
      className="relative text-white lg:mb-[250px] mb-[100px] font-renner 
    //bg-[radial-gradient(circle_at_top_right,#230231_0%,transparent_18%)]
    //lg:bg-[radial-gradient(circle_at_top_right,#230231_0%,transparent_25%)]
    "
    >
      <div className="container mx-auto">
        <h2 className="lg:mb-[50px] mb-8 text-center heading">
          The Plot Unfolds
        </h2>

        <div className="lg:mb-8 mb-6 flex flex-wrap justify-center gap-2 sm:gap-4">
          {tabData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full lg:w-[200px] md:w-[130px] w-[72px] h-[50px] text-base font-medium transition-all leading-[150%] duration-300 ease-in-out focus:outline-none sm:text-base ${
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
              <span className="md:hidden flex justify-center">
                <tab.icon className="w-6 h-6" />
              </span>{" "}
              <span className="hidden md:block">{tab.label}</span>{" "}
            </button>
          ))}
        </div>

        <div
          className="mx-auto max-w-[398px] md:max-w-[704px] lg:max-w-6xl overflow-hidden rounded-[20px] border border-white/10 bg-black/30 backdrop-blur-sm"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
          }}
        >
          <div className="flex lg:flex-row flex-col-reverse justify-between ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:px-12 lg:py-8 px-4 py-6 items-start"
            >
              {activeContent && (
                <>
                  <div className="mb-6 flex items-center gap-4 text-white ">
                    <activeContent.icon size={24} />
                    <span className="font-medium text-lg text-start">
                      {activeContent.label}
                    </span>
                  </div>
                  <h3 className="mb-4 font-semibold lg:text-[24px] text-lg !leading-[150%] text-start">
                    {activeContent.title}
                  </h3>
                  <div className="space-y-2 font-normal lg:text-base text-sm !leading-[26px] tracking-[0%] text-start">
                    {activeContent.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-2 font-bold !leading-[26px] lg:text-base text-sm text-white text-start">
                    {activeContent.tagline}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 rounded-full border border-[#D8D8D8] h-[48px] px-8 font-semibold text-white transition-all duration-300 ease-in-out hover:border-purple-500 text-sm focus:outline-none flex items-center"
                    style={{
                      background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
                    }}
                  >
                    Join Now
                  </motion.button>
                </>
              )}
            </motion.div>

            <div className="relative object-cover lg:px-6 lg:py-4 p-4">
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={activeContent?.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    loading="lazy"
                    className=" md:h-[301px] lg:min-h-[418px] lg:min-w-[524px] md:min-w-[672px] md:min-h-[301px] h-[418px] w-[366px] object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute 2xl:-top-96 2xl:left-10 lg:-top-72 lg:-left-40 -top-56 md:-left-48 md:-top-72 -left-20 md:w-[700px] w-[400px] lg:h-[700px] h-[400px] -z-10 rounded-full"
          style={{
            background: `
          radial-gradient(circle, #12001A 30%, transparent 70%)
          `,
          }}
        />
      </div>
    </section>
  );
};

export default PlotUnfolds;
