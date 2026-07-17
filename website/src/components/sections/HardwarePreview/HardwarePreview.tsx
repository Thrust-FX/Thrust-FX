'use client';

import { motion } from 'framer-motion';

import styles from './HardwarePreview.module.scss';

export default function HardwarePreview() {
  return (
    <section className={styles.hardware}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.badge}>Modular hardware ecosystem</span>

        <h2 className={styles.title}>Designed to evolve.</h2>

        <p className={styles.description}>
          From compact setups to professional rigs, THRUST FX adapts to your
          workflow. Build, modify and expand your own effects platform.
        </p>

        <div className={styles.board}>
          <div className={styles.slot}>FX</div>

          <div className={styles.slot}>DSP</div>

          <div className={styles.slot}>CTRL</div>
        </div>
      </motion.div>
    </section>
  );
}
