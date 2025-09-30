import ClaimSpotForm from "../Components/LandingPage/ClaimSpotForm";
import Header from "../Components/LandingPage/LendingPageHeader";
import HeroSection from "../Components/LandingPage/HeroSection";
import PlotUnfolds from "../Components/LandingPage/PlotUnfolds";
import ReferralsRewards from "../Components/LandingPage/ReferralsRewards";
import RowtoAction from "../Components/LandingPage/RowtoAction";
import Footer from "../Components/LandingPage/LandingPageFooter";
function LandingPage() {
  return (
    <>
      <div
      //   className=""
      //   style={{
      //     background: `
      //       radial-gradient(circle at top left, #04203d 5%, transparent 40%),
      //       radial-gradient(circle at bottom right, #230231 5%, transparent 40%)
      //     `
      //   }}
      >
        <Header />
        <HeroSection />
        <PlotUnfolds />
        <RowtoAction />
        <ReferralsRewards />
        <ClaimSpotForm />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
