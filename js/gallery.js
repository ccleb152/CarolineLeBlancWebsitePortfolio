// Sliding image gallery. Any element with data-gallery containing a
// .gallery-track of .slide figures gets prev/next buttons and dots.
// Swiping or scrolling the track works on its own; this just adds controls.
document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
  var track = gallery.querySelector(".gallery-track");
  var slides = Array.prototype.slice.call(track.querySelectorAll(".slide"));
  var prev = gallery.querySelector("[data-prev]");
  var next = gallery.querySelector("[data-next]");
  var dotsBox = gallery.querySelector(".gallery-dots");
  var current = 0;

  var dots = slides.map(function (slide, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Plot " + (i + 1) + " of " + slides.length);
    dot.addEventListener("click", function () { go(i); });
    dotsBox.appendChild(dot);
    return dot;
  });

  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft });
  }

  function update() {
    var here = track.scrollLeft;
    current = 0;
    slides.forEach(function (slide, i) {
      if (Math.abs(slide.offsetLeft - track.offsetLeft - here) <
          Math.abs(slides[current].offsetLeft - track.offsetLeft - here)) current = i;
    });
    dots.forEach(function (dot, i) { dot.setAttribute("aria-selected", i === current ? "true" : "false"); });
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
  }

  prev.addEventListener("click", function () { go(current - 1); });
  next.addEventListener("click", function () { go(current + 1); });
  track.addEventListener("scroll", function () { window.requestAnimationFrame(update); });
  track.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(current - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(current + 1); }
  });
  update();
});
