import Link from 'next/link';

import styles from './Community.module.scss';

export default function Community() {
  return (
    <section className={styles.community}>
      <h2 className={styles.title}>Build the future with us.</h2>

      <p className={styles.description}>
        Developers, musicians, makers and engineers are welcome to contribute to
        the THRUST FX ecosystem.
      </p>

      <div className={styles.links}>
        <Link href="/github" className={styles.link}>
          Contribute on GitHub
        </Link>

        <Link href="/discord" className={styles.link}>
          Join Discord
        </Link>
      </div>
    </section>
  );
}
