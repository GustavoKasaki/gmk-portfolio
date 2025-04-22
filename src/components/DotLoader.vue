<!-- Loading component from motion.dev -->

<script setup>
import { motion } from 'motion-v'

const dotVariants = {
  pulse: {
    scale: [1, 1.5, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}
</script>

<template>
  <motion.div
    class="container"
    animate="pulse"
    :transition="{ staggerChildren: -0.2, staggerDirection: -1 }"
  >
    <motion.div class="dot" :variants="dotVariants" />
    <motion.div class="dot" :variants="dotVariants" />
    <motion.div class="dot" :variants="dotVariants" />
  </motion.div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #155dfc;
  will-change: transform;
}
</style>
