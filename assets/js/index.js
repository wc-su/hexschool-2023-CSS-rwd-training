import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// toggleActions
//   order: 順向進入(onEnter)、順向離開(onLeave)、逆向進入(onEnterBack)、逆向離開(onLeaveBack)
//   value: play, pause, resume, reset, restart, complete, reverse, none
const toggleActions = {
  toggleActions: "play pause resume reset"
};

// 推銷
const promoteTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".promote h3",
    // markers: true,
    // start: "top 80%",
    // end: "bottom 80%",
    ...toggleActions,
  },
});
promoteTimeline
  .from(".promote h3", { y: 100, opacity: 0, duration: 0.6 })
  .from(".promote-item", { y: "random(80, 120)", opacity: 0, duration: 0.8 });

// 經典系列鏡框
const baicTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".basic h3",
    ...toggleActions,
  },
});
baicTimeline
  .from(".basic h3", { y: 100, opacity: 0, duration: 0.6 })
  .from(".basic-item", { y: "random(80, 120)", opacity: 0, duration: 0.8 });

// 聯名設計鏡框
const brandingTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".co-branding h3",
    ...toggleActions,
  },
});
brandingTimeline
  .from(".co-branding h3", { y: 100, opacity: 0, duration: 0.6 })
  .from(".co-branding-item:nth-child(1)", { x: 50, y: 50, opacity: 0, scale: 1.2, duration: 0.6 })
  .from(".co-branding-item:nth-child(2)", { x: -50, y: -50, opacity: 0, scale: 1.2, duration: 0.6 }, "-=0.6");

// 顧客推薦
const recommendTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".recommend h3",
    ...toggleActions,
  },
});
recommendTimeline
  .from(".recommend h3", { y: 100, opacity: 0, duration: 0.6 })
  .from(".recommend-item:nth-child(odd)", { y: 80, opacity: 0, duration: 1.2 })
  .from(".recommend-item:nth-child(even)",{ y: -50, opacity: 0, duration: 1.2 },"-=1.2");
