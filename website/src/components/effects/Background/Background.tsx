'use client';

import { motion } from 'framer-motion';

import styles from './Background.module.scss';

export default function Background() {
  return (
    <div className={styles.background}>
      {/* Grid */}
      <div className={styles.grid} />

      {/* Main glow */}

      <motion.div
        className={styles.glow}

        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -10, 0],
        }}

        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating nodes */}

      {Array.from({ length: 12 }).map((_, index) => (
        <motion.span
          key={index}

          className={styles.node}

          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}

          animate={{
            y: [0, -30, 0],

            opacity: [0.15, 0.35, 0.15],
          }}

          transition={{
            duration: 8 + index,

            repeat: Infinity,

            delay: index * 0.4,

            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Circuit lines */}

      <svg className={styles.circuit} viewBox="0 0 1200 800">
        <path
          d="
                    M100 200
                    H300
                    V350
                    H600
                    V150
                    H900
                "
        />

        <path
          d="
                    M200 600
                    H500
                    V450
                    H850
                "
        />

        <circle cx="300" cy="350" r="6" />

        <circle cx="600" cy="150" r="6" />
      </svg>
    </div>
  );
}
