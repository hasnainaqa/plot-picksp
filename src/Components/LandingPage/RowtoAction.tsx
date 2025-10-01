import React from "react";
import RowToAction1 from "./assets/RowToAction1.svg";
import RowToAction2_o from "./assets/RowToAction2_o.svg";
import RowToAction2in1 from "./assets/RowToAction2in1.svg";
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
      className={`relative overflow-hidden group rounded-[30px] ${cornerStyle}`}
    >
      <img
        src={imageUrl}
        alt={text}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
          {text}
        </h3>
      </div>
    </div>
  );
};

const RowtoAction: React.FC = () => {
  return (
    <section className="w-full text-white px-6 sm:px-8 md:px-12 lg:px-[70px] font-renner flex items-center">
      <div className="w-full mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-10 lg:mb-[51px] text-center lg:text-left">
          Front Row to the Action
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex-1 w-full block md:hidden">
            <FeatureCard
              text="Early access before public launch"
              imageUrl={RowToAction1}
              cornerStyle=""
            />
          </div>

          <div className="flex-1 w-full block md:hidden">
            <FeatureCard
              text="Be the first to claim your unique handle"
              imageUrl={RowToAction2_o}
              cornerStyle=""
            />
          </div>

          <div className="flex-1 w-full hidden md:block">
            <FeatureCard
              text=""
              imageUrl={RowToAction2in1}
              cornerStyle="rounded-3xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:mt-10">
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
