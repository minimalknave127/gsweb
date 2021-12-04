// import * from "gsap";
document.querySelector(".burger").onclick = () =>
  console.log("burger clicked!");

// morph
gsap.registerPlugin(ScrollTrigger);
const imgs = gsap.utils.toArray(".project-img img");
const text = gsap.utils.toArray(".project-text div");

gsap.utils.toArray(".color").forEach(function (elem) {
  const color = elem.getAttribute("data-color");
  const text = elem.getAttribute("data-text");

  ScrollTrigger.create({
    trigger: elem,
    start: "50% 50%",
    end: "bottom+=50% 50%",
    onEnter: () => {
      gsap.to("main", {
        backgroundColor: color,
        color: text ? text : "black",
      });
      console.log("enter");
    },
    onLeave: () => {
      gsap.to("main", {
        backgroundColor: "white",
        color: "black",
      });
      console.log("leave");
    },
    onLeaveBack: () =>
      gsap.to("main", { backgroundColor: "white", color: "black" }),
    onEnterBack: () =>
      gsap.to("main", { backgroundColor: color, color: text ? text : "black" }),
    markers: true,
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "center center",
    end:
      "+=" + document.querySelector(".project-img").offsetHeight * imgs.length,
    pin: true,
    // scrub: true,
    markers: true,
    anticipatePin: true,
    pinReparent: true,
    pinType: "fixed",
  },
});

tl.to(imgs, {
  yPercent: -100 * (imgs.length - 1),
}).to(
  text,
  {
    yPercent: -100 * (text.length - 1),
  },
  "-=1"
);

// gsap.to(imgs, {
//   yPercent: -100 * (imgs.length - 1),
//   scrollTrigger: {
//     trigger: ".projects",
//     start: "center center",
//     end:
//       "+=" + document.querySelector(".project-img").offsetHeight * imgs.length,
//     pin: true,
//     scrub: true,
//     markers: true,
//     // snap: 1 / (imgs.length - 1),
//   },
// });
// gsap.to(text, {
//   yPercent: -100 * (text.length - 1),
//   scrollTrigger: {
//     trigger: ".projects",
//     start: "center center",
//     end:
//       "+=" + document.querySelector(".project-img").offsetHeight * text.length,
//     // pin: true,
//     scrub: 1,
//     onLeave: () => alert("cock"),
//     // markers: true,
//     // snap: 1 / (imgs.length - 1),
//   },
// });

// gsap.to("");
