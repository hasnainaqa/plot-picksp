import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import Header from "../Components/LandingPage/LendingPageHeader";
import HeroSection from "../Components/LandingPage/HeroSection";
import Footer from "../Components/LandingPage/LandingPageFooter";
import {
  ScaleUp,
  SlideInLeft,
  SlideInRight,
} from "../Components/Animation/AnimatedSection";
const PlotUnfolds = lazy(() => import("../Components/LandingPage/PlotUnfolds"));
const RowtoAction = lazy(() => import("../Components/LandingPage/RowtoAction"));
const ReferralsRewards = lazy(
  () => import("../Components/LandingPage/ReferralsRewards")
);
const ClaimSpotForm = lazy(
  () => import("../Components/LandingPage/ClaimSpotForm")
);

const SkeletonLoader = ({ height = "h-[300px]" }: { height?: string }) => (
  <div className={`w-full ${height} rounded-xl overflow-hidden relative`}>
    <div className="absolute inset-0  animate-pulse flex items-center justify-center ">
      {" "}
      <p className="text-white text-xl font-semibold">Loading...</p>
    </div>
  </div>
);

function LazyLoadWrapper({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : fallback}</div>;
}

function LandingPage() {
  return (
    <>
      <Header />
      <SlideInRight>
        <HeroSection />
      </SlideInRight>

      <SlideInRight>
        <PlotUnfolds />
      </SlideInRight>

      <LazyLoadWrapper fallback={<SkeletonLoader height="h-[300px]" />}>
        <Suspense fallback={<SkeletonLoader height="h-[300px]" />}>
          <SlideInLeft>
            <RowtoAction />
          </SlideInLeft>
        </Suspense>
      </LazyLoadWrapper>

      <LazyLoadWrapper fallback={<SkeletonLoader height="h-[350px]" />}>
        <Suspense fallback={<SkeletonLoader height="h-[350px]" />}>
          <SlideInRight>
            <ReferralsRewards />
          </SlideInRight>
        </Suspense>
      </LazyLoadWrapper>

      <LazyLoadWrapper fallback={<SkeletonLoader height="h-[400px]" />}>
        <Suspense fallback={<SkeletonLoader height="h-[400px]" />}>
          <SlideInLeft>
            <ClaimSpotForm />
          </SlideInLeft>
        </Suspense>
      </LazyLoadWrapper>
      <ScaleUp>
        <Footer />
      </ScaleUp>
    </>
  );
}

export default LandingPage;
