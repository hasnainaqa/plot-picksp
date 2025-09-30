import React from "react";
import RowToAction1 from "../assets/RowToAction1.svg";
import RowToAction2 from "../assets/RowToAction2.svg";
import RowToAction3 from "../assets/RowToAction3.svg";
import RowToAction4 from "../assets/RowToAction4.svg";

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
    <div className={`relative h-64 overflow-hidden group rounded-[30px] ${cornerStyle}`}>
      <img
        src={imageUrl}
        alt={text}
        className="absolute inset-0 w-full h-full object-cover"
        // className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      <div className="relative flex items-center justify-center h-full p-6">
        <h3 className="text-2xl font-semibold text-white">{text}</h3>
      </div>
    </div>
  );
};

const RowtoAction: React.FC = () => {
  return (
    <section className="text-white w-full px-[70px]  font-renner">
      <div className="max-w-full mx-auto">
        <h2 className="text-5xl font-semibold mb-[51px]">Front Row to the Action</h2>

        <div className="relative flex items-center">
          <div className="flex-1 z-10">
            <FeatureCard
              text="Early access before public launch"
              imageUrl={RowToAction1}
              cornerStyle=""
            />
          </div>

          <div className="w-10 h-32 -mx-24 z-20 rounded-tl-3xl" />
          <div className="absolute left-1/2 top-24 -translate-x-1/2 w-48 h-40 bg-black z-20 rounded-tl-3xl" />

          <div className="flex-1 z-30">
            <FeatureCard
              text="Be the first to claim your unique handle"
              imageUrl={RowToAction2}
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
