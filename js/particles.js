particlesJS({
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#dc052d"],
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 4,
      },
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.4,
        sync: false,
      },
    },
    size: {
      value: 15,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 1200,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    retina_detect: true,
  },
});
