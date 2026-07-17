'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />

      <div className={styles.content}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Open source multi-effects platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={styles.title}
        >
          Build the pedalboard
          <br />
          you always wanted.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          THRUST FX is an open source modular multi-effects ecosystem combining
          hardware, software and community driven innovation.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <Link href="/project" className={styles.primary}>
            Discover the project
          </Link>

          <Link href="/discord" className={styles.secondary}>
            Join the community
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
