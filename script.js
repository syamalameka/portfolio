// =======================================
// LOADER
// =======================================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1200);
});

// =======================================
// TYPING EFFECT
// =======================================

new Typed("#typing", {
  strings: [
    "Aspiring Full Stack Java Developer",
    "Java Programmer",
    "Web Developer",
    "Problem Solver",
    "Power BI Enthusiast",
  ],

  typeSpeed: 70,
  backSpeed: 45,
  backDelay: 1500,
  loop: true,
});

// =======================================
// CUSTOM CURSOR
// =======================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// =======================================
// NAVBAR ACTIVE LINK
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// =======================================
// MOBILE MENU
// =======================================

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// =======================================
// SCROLL REVEAL
// =======================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document
  .querySelectorAll(
    ".glass,.skill-card,.project-card,.timeline-item,.certificate-card,.profile-box,.contact-box div",
  )
  .forEach((el) => {
    observer.observe(el);
  });

// =======================================
// PARTICLES JS
// =======================================

particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 900,
      },
    },

    color: {
      value: "#00E5FF",
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: 0.4,
    },

    size: {
      value: 3,
    },

    line_linked: {
      enable: true,
      distance: 130,
      color: "#00E5FF",
      opacity: 0.5,
      width: 1.2,
    },

    move: {
      enable: true,
      speed: 2,
    },
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },

      onclick: {
        enable: true,
        mode: "push",
      },
    },

    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.7,
        },
      },

      push: {
        particles_nb: 4,
      },
    },
  },

  retina_detect: true,
});

// =======================================
// NAVBAR COLOR CHANGE
// =======================================

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,8,22,.95)";
    navbar.style.boxShadow = "0 10px 25px rgba(0,229,255,.2)";
  } else {
    navbar.style.background = "rgba(255,255,255,.05)";
    navbar.style.boxShadow = "none";
  }
});

// =======================================
// VANILLA TILT
// =======================================

VanillaTilt.init(document.querySelector(".profile-card"), {
  max: 10,
  speed: 500,
  glare: true,
  "max-glare": 0.3,
});

// =======================================
// BUTTON RIPPLE
// =======================================

document.querySelectorAll(".btn,.btn2").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    const x = e.clientX - this.offsetLeft;
    const y = e.clientY - this.offsetTop;

    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =======================================
// END
// =======================================
