import { gsap } from "gsap";

const quote = document.getElementById("quote");
quote.innerHTML = `<span class="char">${quote.innerHTML.split("").join('</span><span class="char">')}</span>`;
gsap.to(".char", {
  opacity: 1,
  yPercent: 50,
  duration: 0.5,
  stagger: 0.1,
});

let loadingTimeline = gsap.timeline();
loadingTimeline
  .to(".loadingValue", { duration: 1.2, width: "100%" })
  .to(".loadingBar", { duration: 0.1, opacity: 0 })
  .to(".quote", { duration: 0.1, opacity: 0 })
  .to(".loadingCover", { duration: 0.8, height: 0, opacity: 0 });
