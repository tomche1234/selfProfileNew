<template>
  <h1 center class="cyberpunk-text">WELCOME TO MY PAGE</h1>
</template>

<style scoped>
.cyberpunk-text {
  white-space: nowrap;
  font-family: 'Orbitron', sans-serif; /* Futuristic font */
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff; /* Neon glow */
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  animation: flicker 2s infinite alternate; /* Flicker and shake animation */
  transform-origin: 50% 50%;
}
@media (max-width: 799px) {
  .cyberpunk-text {
    font-size: 1.5rem;
  }
}
@media (min-width: 800px) {
  .cyberpunk-text {
    font-size: 3rem;
  }
}
/* Flicker effect animation */
@keyframes flicker {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
    text-shadow: 0 0 5px #ff0099, 0 0 15px #ff0099, 0 0 30px #ff0099, 0 0 40px #ff0099;
  }
  75% {
    opacity: 0.9;
    text-shadow: 0 0 5px #00ccff, 0 0 15px #00ccff, 0 0 30px #00ccff, 0 0 40px #00ccff;
  }
}


/* Broken effect: simulate glitch */
.cyberpunk-text::before, 
.cyberpunk-text::after {
  position: absolute;
  top: 0;
  left: 0;
  color: #ff0099; /* Glitch color (neon pink) */
  overflow: hidden;
  clip-path: inset(0%, 10%, 0%, 0%); /* This will create a clipping effect */
  animation: glitch 1s infinite ease-in-out;
}

.cyberpunk-text::after {
  white-space: nowrap;
  content: 'WELCOME TO MY PAGE'; /* Duplicate the text for glitch effect */
  color: #00ccff; /* Another glitch color (light blue) */
  left: 0.1%;
  text-shadow: none;
}
@keyframes glitch {
  0%, 100% {
    clip-path: inset(0% 0% 80% 0%);
    transform: translate(0);
  }
  10% {
    clip-path: inset(20% 0% 60% 0%);
    transform: translate(-0.2%, -0.2%);
  }
  20% {
    clip-path: inset(40% 0% 40% 0%);
    transform: translate(0.3%, 0.2%);
  }
  30% {
    clip-path: inset(60% 0% 20% 0%);
    transform: translate(-0.1%, -0.3%);
  }
  40% {
    clip-path: inset(80% 0% 0% 0%);
    transform: translate(0.2%, 0.1%);
  }
}


</style>