const loading = function createLoadingComponent(fastn) {
  return fastn(
    "div",
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "0ms" } },
      "L"
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "50ms" } },
      "o"
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "100ms" } },
      "a"
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "150ms" } },
      "d"
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "200ms" } },
      "i"
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "250ms" } },
      "n"
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "300ms" } },
      "g"
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "350ms" } },
      "."
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "400ms" } },
      "."
    ),
    fastn(
      "span",
      { class: "rainbow jiggle", style: { "animation-delay": "450ms" } },
      "."
    )
  );
};

module.exports = loading;
