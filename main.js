// import * from "gsap";

//  burger
const burger = document.querySelector(".burger");
const blackSections = document.querySelectorAll(".bg-black");

burger.onclick = () =>
  (document.querySelector(".menu").style.transform = "translateX(0)");

window.onscroll = () => {
  burgerColor();
};

function burgerColor() {
  let white = false;
  blackSections.forEach((e) => {
    const section = e.getBoundingClientRect();
    const bg = burger.getBoundingClientRect();
    if (
      section.top < bg.top &&
      section.top + section.height > bg.top + bg.height
    ) {
      white = true;
    }
  });
  console.log(white);
  if (white) {
    burger.classList.add("burger-white");
  } else {
    burger.classList.remove("burger-white");
  }
}

// morph
gsap.registerPlugin(ScrollTrigger);
const imgs = gsap.utils.toArray(".project-img img");
const text = gsap.utils.toArray(".project-text div");

gsap.to(imgs, {
  scrollTrigger: {
    trigger: ".projects",
    pin: true,
    scrub: true,
    start: "center center",
    end:
      "+=" + document.querySelector(".project-img").offsetHeight * imgs.length,
  },
  yPercent: -100 * (imgs.length - 1),
});
gsap.to(text, {
  scrollTrigger: {
    trigger: ".projects",
    pin: true,
    scrub: 1,
    start: "center center",
    end:
      "+=" + document.querySelector(".project-img").offsetHeight * imgs.length,
  },
  yPercent: -100 * (text.length - 1),
});

gsap.utils.toArray(".color").forEach(function (elem) {
  const color = elem.getAttribute("data-color");
  const text = elem.getAttribute("data-text");

  ScrollTrigger.create({
    trigger: elem,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => {
      gsap.to("body", {
        backgroundColor: color,
        color: text ? text : "black",
      });
      console.log("enter");
    },
    onLeave: () => {
      gsap.to("body", {
        backgroundColor: "white",
        color: "black",
      });
      console.log("leave");
    },
    onLeaveBack: () =>
      gsap.to("body", { backgroundColor: "white", color: "black" }),
    onEnterBack: () =>
      gsap.to("body", { backgroundColor: color, color: text ? text : "black" }),
    // markers: true,
  });
});

// GLOB
const stl = gsap.timeline({
  scrollTrigger: {
    trigger: ".glob",
    start: "top 30%",
    // markers: true,
  },
});
stl
  .from("#glob-symbol", {
    opacity: 0,
    rotate: "90deg",
    // scrollTrigger: "#glob-symbol",
    duration: 2,
    scale: 0.9,
  })
  .from(
    ".glob-tag",
    {
      stagger: 0.2,
      opacity: 0,
    },
    "-=1"
  );

// cursor move

const cursor = document.querySelector("#cursor");
const reactive = document.querySelectorAll(".reactive");
const action = document.querySelectorAll(".action");

window.addEventListener("mousemove", (e) => {
  setTimeout(() => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  }, 0);
  if (e.clientY < 1 || e.clientX < 1) {
    cursor.classList.add("cursor-hidden");
  } else {
    cursor.classList.remove("cursor-hidden");
  }
});

reactive.forEach((e) => {
  e.onmouseover = () => {
    cursor.classList.add("cursor-active");
  };
  e.onmouseleave = () => {
    cursor.classList.remove("cursor-active");
  };
});

action.forEach((e) => {
  e.onmouseover = () => {
    cursor.classList.add("cursor-action", "cursor-active");
  };
  e.onmouseleave = () => {
    cursor.classList.remove("cursor-action", "cursor-active");
  };
});
