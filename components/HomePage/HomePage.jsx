import HomeBanner from "./HomeBanner";
import HomeCategories from "./HomeCategories";
import { useEffect } from "react";
import Hotdeals from "./Hotdeals";
import gsap from "gsap";

const HomePage = ({ serverProducts }) => {
  useEffect(() => {
    let tl = gsap.timeline({});

    tl.from(".main-section-banner", {
      y: -100,
      duration: 0.6,
      opacity: 0,
    })
      .from(
        ".home-categories",
        {
          opacity: 0,
          stagger: 0.25,
          duration: 0.3,
        },
        "-=1"
      )
      .from(
        ".main-product",
        {
          opacity: 0,
          stagger: 0.25,
          duration: 0.3,
        },
        "-=.75"
      );
  }, []);

  return (
    <div className="flex-1 p-6 overflow-y-auto pb-32">
      <HomeBanner />
      <HomeCategories />
      <Hotdeals serverProducts={serverProducts} />
    </div>
  );
};

export default HomePage;
