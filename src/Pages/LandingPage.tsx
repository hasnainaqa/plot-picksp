
import Header from "../Components/LandingPage/LendingPageHeader";
import HeroSection from "../Components/LandingPage/HeroSection";
import Footer from "../Components/LandingPage/LandingPageFooter";
import {
  SlideInLeft,
  SlideInRight,
} from "../Components/Animation/AnimatedSection";
import PlotUnfolds from "../Components/LandingPage/PlotUnfolds";
import RowtoAction from "../Components/LandingPage/RowtoAction";
import ReferralsRewards from "../Components/LandingPage/ReferralsRewards";
import ClaimSpotForm from "../Components/LandingPage/ClaimSpotForm";
import AnimateOnLg from "../Components/Animation/AnimateOnLg";

function LandingPage() {
  return (
    <div className="text-[var(--primarytext)]">
      <Header />

      {/* HERO SECTION */}
      <AnimateOnLg Animation={SlideInLeft}>
        <HeroSection />
      </AnimateOnLg>

      <div className="md:px-8 px-4">
        {/* HOW IT WORKS */}
        <section id="how-it-works">
          <AnimateOnLg Animation={SlideInRight}>
            <PlotUnfolds />
          </AnimateOnLg>
        </section>

        {/* ROW TO ACTION */}
        <section id="rewards">
          <AnimateOnLg Animation={SlideInLeft}>
            <RowtoAction />
          </AnimateOnLg>
        </section>

        {/* REFERRALS */}
        <AnimateOnLg Animation={SlideInRight}>
          <ReferralsRewards />
        </AnimateOnLg>

        {/* CLAIM FORM */}
        <section id="contact">
          <AnimateOnLg Animation={SlideInLeft}>
            <ClaimSpotForm />
          </AnimateOnLg>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
