import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// toggleActions
//   order: 順向進入(onEnter)、順向離開(onLeave)、逆向進入(onEnterBack)、逆向離開(onLeaveBack)
//   value: play, pause, resume, reset, restart, complete, reverse, none
const toggleActions = {
  toggleActions: "play pause resume reset",
};

// Responsive media
// https://greensock.com/docs/v3/GSAP/gsap.matchMedia()
let mm = gsap.matchMedia(), breakPoint = 992;
mm.add(
  {
    isDesktop: `(min-width: ${breakPoint}px)`,
    isTablet: `(max-width: ${breakPoint - 0.02}px)`,
    isMobile: `(max-width: ${768 - 0.02}px)`,
  },
  (context) => {
    let { isDesktop, isTablet, isMobile } = context.conditions;

    // 推銷
    const promoteTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".promote",
        // markers: true,
        // start: "top 80%",
        // end: "bottom 80%",
        ...toggleActions,
      },
    });
    if (isDesktop || isMobile) {
      promoteTimeline
        .from(".promote h3", { y: 100, opacity: 0, duration: 0.6 })
        .from(".promote-item", {y: "random(80, 120)", opacity: 0, duration: 0.8, stagger: isMobile ? 0.8: 0 });
    } else {
      promoteTimeline
        .from(".promote h3", { y: 100, opacity: 0, duration: 0.6 })
        .from(".promote-item:nth-child(odd)", {y: "random(80, 120)", opacity: 0, duration: 0.8, stagger: 0.8,})
        .from(".promote-item:nth-child(even)", { y: "random(80, 120)", opacity: 0, duration: 0.8, stagger: 0.8 }, "-=1.6");
    }

    // 經典系列鏡框
    const baicTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".basic",
        ...toggleActions,
      },
    });
    baicTimeline
      .from(".basic h3", { y: 100, opacity: 0, duration: 0.6 })
      .from(".basic-item", { y: "random(80, 120)", opacity: 0, duration: 0.8, stagger: isDesktop ? 0 : 0.6,});

    // 聯名設計鏡框
    const brandingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".co-branding",
        ...toggleActions,
      },
    });
    brandingTimeline
      .from(".co-branding h3", { y: 100, opacity: 0, duration: 0.6 })
      .from(".co-branding-item:nth-child(1)", { x: 50, y: 50, opacity: 0, duration: 0.6, })
      .from(".co-branding-item:nth-child(2)", { x: -50, y: -50, opacity: 0, duration: 0.6, }, isDesktop ? "-=0.6" : null);

    // 顧客推薦
    const recommendTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".recommend",
        ...toggleActions,
      },
    });
    if(isMobile) {
      recommendTimeline
      .from(".recommend h3", { y: 100, opacity: 0, duration: 0.6 })
      .from(".recommend-item", { y: 80, opacity: 0, duration: 0.8, stagger: 0.8 });
    } else {
      recommendTimeline
        .from(".recommend h3", { y: 100, opacity: 0, duration: 0.6 })
        .from(".recommend-item:nth-child(odd)", { y: 80, opacity: 0, duration: 0.8, stagger: isDesktop ? 0 : 0.8 })
        .from(".recommend-item:nth-child(even)", { y: -50, opacity: 0, duration: 0.8, stagger: isDesktop ? 0 : 0.8 }, isDesktop ? "-=0.8" : "-=1.6");
    }

    // return () => {}
  }
);
