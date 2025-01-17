// Array of color class names
const colorClasses = [
  "goal-sky-blue",
  "goal-forest-green",
  "goal-sunset-orange",
  "goal-lemon-yellow",
  "goal-ocean-blue",
  "goal-rose-pink",
  "goal-sand-beige",
  "goal-lavender-purple",
  "goal-mint-green",
  "goal-coral-red",
  "goal-charcoal-grey",
  "goal-amber",
  "goal-turquoise",
  "goal-peach",
  "goal-plum",
  "goal-aqua",
  "goal-olive-green",
  "goal-maroon",
  "goal-cherry-red",
  "goal-teal",
  "goal-saffron",
  "goal-violet",
  "goal-azure",
  "goal-periwinkle",
  "goal-cream",
  "goal-cinnamon",
  "goal-sapphire",
  "goal-emerald",
  "goal-indigo",
];

const getRandomColorClass = () =>
  colorClasses[Math.floor(Math.random() * colorClasses.length)];

export default getRandomColorClass;