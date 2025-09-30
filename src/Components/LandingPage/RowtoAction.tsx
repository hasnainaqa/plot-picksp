import React from "react";
import RowToAction1 from "./assets/RowToAction1.svg";
import RowToAction2 from "./assets/RowToAction2.svg";
import RowToAction2_o from "./assets/RowToAction2_o.svg";

import RowToAction3 from "./assets/RowToAction3.svg";
import RowToAction4 from "./assets/RowToAction4.svg";

type Feature = {
  text: string;
  imageUrl: string;
  cornerStyle: string;
};

type FeatureCardProps = Feature;

const FeatureCard: React.FC<FeatureCardProps> = ({
  text,
  imageUrl,
  cornerStyle,
}) => {
  return (
    <div
      className={`relative h-48 sm:h-56 md:h-64 overflow-hidden group rounded-[30px] ${cornerStyle}`}
    >
      <img
        src={imageUrl}
        alt={text}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex items-center justify-center h-full p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
          {text}
        </h3>
      </div>
    </div>
  );
};

const RowtoAction: React.FC = () => {
  return (
    <section className="w-full text-white px-4 sm:px-8 md:px-12 lg:px-[70px] font-renner flex items-center">
      <div className="w-full max-w-[1600px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-10 lg:mb-[51px] text-center lg:text-left">
          Front Row to the Action
        </h2>

        <div className="relative flex flex-col xl:flex-row items-center justify-center gap-6">
          {/* First Card */}
          <div className="flex-1 w-full z-10">
            <FeatureCard
              text="Early access before public launch"
              imageUrl={RowToAction1}
              cornerStyle=""
            />
          </div>

          {/* Middle Shape (only on large screens) */}
          <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[10%] h-40 bg-black z-20 rounded-tl-3xl hidden 2xl:block" />

          {/* Second Card */}
          <div className="flex-1 w-full z-30  2xl:-ml-[10%] hidden 2xl:block">
            <FeatureCard
              text="Be the first to claim your unique handle"
              imageUrl={RowToAction2}
              cornerStyle=""
            />
          </div>
          <div className="flex-1 w-full z-30 block 2xl:hidden">
            <FeatureCard
              text="Be the first to claim your unique handle"
              imageUrl={RowToAction2_o}
              cornerStyle=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <FeatureCard
            text="Exclusive rewards for founding members"
            imageUrl={RowToAction3}
            cornerStyle=""
          />
          <FeatureCard
            text="Stay updated as we roll out in new states"
            imageUrl={RowToAction4}
            cornerStyle=""
          />
        </div>
      </div>
    </section>
  );
};

export default RowtoAction;
