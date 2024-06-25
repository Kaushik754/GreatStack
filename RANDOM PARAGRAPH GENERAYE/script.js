const messages = [
  "My love, you're the melody to my heart's symphony 🎶❤️",
  "In your eyes, I found the reflection of my soul, forever intertwined 💖😊",
  "Every moment with you feels like a beautiful dream I never want to wake from 💫💕",
  "Your smile is my sunshine on the cloudiest days ☀️😊",
  "I love you more than words can express, more than the stars in the sky 🌟💘",
  "You're not just my love, you're my best friend and my greatest adventure 🌍❤️",
  "Being with you is like a perpetual dance of joy and laughter 💃😄",
  "Your love is the anchor that keeps me grounded and the wings that lift me higher 🕊️💞",
  "I fall in love with you again and again, every single day 💗😍",
  "You're the reason I believe in miracles and the magic of love ✨💖",
  "With you, I've found my forever and always, my heart's home 🏠❤️",
  "Your touch ignites a fire within me that burns with passion and tenderness 🔥💕",
  "Together, we create memories that sparkle like stars in the night sky 🌌✨",
  "You're the piece of my puzzle that completes me, my perfect match 🧩❤️",
  "Loving you is effortless because it's the most natural thing in the world for me 💓😊",
];

function randomGenerate() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomParagraph = messages[randomIndex];
    return randomParagraph;
}

let finalValue = randomGenerate();
document.write(finalValue);