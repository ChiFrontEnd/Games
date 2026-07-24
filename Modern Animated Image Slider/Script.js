    "use strict";

    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const slide = document.querySelector(".slide");

    let isAnimating = false;

    next.addEventListener("click", function () {
      if (isAnimating) return;
      isAnimating = true;

      let items = document.querySelectorAll(".item");
      slide.appendChild(items[0]);

      setTimeout(() => {
        isAnimating = false;
      }, 600); // matches CSS transition duration
    });

    prev.addEventListener("click", function () {
      if (isAnimating) return;
      isAnimating = true;

      let items = document.querySelectorAll(".item");
      slide.prepend(items[items.length - 1]);

      setTimeout(() => {
        isAnimating = false;
      }, 600); // matches CSS transition duration
    });