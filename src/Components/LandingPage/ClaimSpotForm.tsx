import { useState } from "react";
import ClaimSpot from "./assets/ClaimSpot.svg";

export default function ClaimSpotForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ firstName, lastName, email });
  };

  return (
    <div
      className="pb-[250px] px-4 flex items-center justify-center font-renner"
      style={{
        background: `
      radial-gradient(circle at bottom left, #04203d 0%, transparent 25%)`,
      }}
    >
      <div className="w-full relative flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center  w-full max-w-[1200px]">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden shadow-2xl hidden xl:block flex-1">
            <img
              src={ClaimSpot}
              alt="Beach sunset with palm trees"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start px-4 md:px-8 lg:px-0">
            <div
              className="relative w-full xl:w-auto xl:ml-4 rounded-t-3xl shadow-2xl p-6 pb-0 z-10 lg:min-w-[500px]"
              style={{
                background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
              }}
            >
              <h2 className="text-white text-4xl font-semibold mb-8 leading-[100%] text-center lg:text-left">
                Claim Your Spot on the Plot
              </h2>

              <p className="text-lg font-normal text-white mb-6 leading-[100%] text-center lg:text-left">
                Be more than a spectator: lock in your place, get early perks,
                and step into the story before anyone else
              </p>

              <div className="z-30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-[#464447] text-white placeholder-white rounded-xl px-6 py-5 text-sm font-normal focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-[#464447] text-white placeholder-white rounded-xl px-6 py-5 text-sm font-normal focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div
              className="relative w-full rounded-b-3xl xl:rounded-tl-2xl p-6 sm:p-8 xl:p-5 z-10 flex flex-col sm:flex-row gap-4 xl:-ml-36 xl:min-w-[744px]"
              style={{
                background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
              }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#464447] text-white placeholder-white rounded-xl px-6 py-3 text-sm"
              />
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-b from-[#0385FF] to-[#06F1BA] text-white shadow-cyan-500/20 rounded-full px-6 py-4 text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
