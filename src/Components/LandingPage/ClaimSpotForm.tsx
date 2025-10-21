import ClaimSpot from "./assets/ClaimSpot.svg";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function ClaimSpotForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    //  Send this to your API here
  };

  return (
    <div className="lg:pb-[250px] pb-[100px] lg:pt-[245px] pt-[100px] flex items-center justify-center font-renner">
      <div className="relative">
        <div
          className="absolute lg:-bottom-[680px] lg:-left-10 -left-56 h-[500px] w-[500px] -z-10 lg:flex md:hidden flex"
          style={{
            background: `linear-gradient(to top right, #06F1BA 30.19%, #0385FF 69.08%), #4F0070`,
            opacity: 0.15,
            boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
            filter: `blur(100px)`,
          }}
        ></div>
      </div>

      <div className="w-full relative flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-stretch w-full max-w-[1200px]">
          {/* form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row w-full"
          >
            <div className="relative hidden xl:block flex-1">
              <img
                src={ClaimSpot}
                alt="Claim your spot illustration"
                loading="eager"
                className="w-full h-full object-cover rounded-tr-[30px] rounded-bl-[30px]"
              />
            </div>

            <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start ">
              <div
                className="relative w-full xl:w-auto xl:ml-4 rounded-t-3xl shadow-2xl py-6 lg:px-6 px-4 pb-0 z-10 lg:min-w-[500px] h-full"
                style={{
                  background: `radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(153,153,153,0.1) 100%)`,
                }}
              >
                <h2 className=" lg:text-4xl text-2xl font-semibold mb-4 !leading-[150%] text-start lg:text-left">
                  Claim Your Spot on the Plot
                </h2>

                <p className="lg:text-base text-sm font-normal  mb-8 !leading-[150%] text-start lg:text-left">
                  Be more than a spectator: lock in your place, get early perks,
                  and step into the story before anyone else
                </p>

                <div className="z-30 grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full bg-[#464447]  placeholder:text-[var(--primary-text)] rounded-xl lg:px-6 px-4 xl:py-5 py-[15px] text-sm font-normal focus:outline-none"
                    />
                    {errors.firstName && (
                      <p className=" absolute right-[calc(50%+8px)] md:mt-1 mt-px flex justify-end mr-4 text-red-400 md:text-xs text-[10px]">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div >
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full bg-[#464447]  placeholder:text-[var(--primary-text)] rounded-xl lg:px-6 px-4 xl:py-5 py-[15px] text-sm font-normal focus:outline-none"
                    />
                    {errors.lastName && (
                      <p className="absolute right-6 md:mt-1 mt-px flex justify-end mr-4 text-red-400 md:text-xs text-[10px]">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="relative w-full rounded-b-3xl xl:rounded-tl-2xl lg:px-6 px-4 pt-4 pb-8 xl:p-5 z-10 flex flex-col md:items-center md:flex-row gap-4 xl:-ml-[120px] xl:min-w-[744px] h-full"
                style={{
                  background: `radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(153,153,153,0.1) 100%)`,
                }}
              >
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full bg-[#464447]  placeholder:text-[var(--primary-text)] rounded-xl lg:px-6 px-4 py-[15px] text-sm focus:outline-none"
                  />
                  {errors.email && (
                    <p className="absolute md:right-44 right-10 flex justify-end text-red-400 lg:text-xs text-[10px] md:mt-1 mt-0.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="relative inline-block h-[42px] rounded-[32px] px-8 overflow-hidden group"
                >
                  <span className="absolute inset-0 rounded-[32px] [background:linear-gradient(138.91deg,#0385FF_-3.35%,#06F1BA_101.24%)]"></span>
                  <span
                    className="relative flex items-center justify-center w-full h-full rounded-[32px]  
                    font-renner font-semibold text-[14px] leading-[100%] text-center "
                  >
                    Join Now
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
