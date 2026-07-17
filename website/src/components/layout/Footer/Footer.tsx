import Link from 'next/link';

import { Mail, Heart } from 'lucide-react';

import { FaGithub, FaDiscord } from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              THRUST FX
            </Link>

            <p>
              Open source modular multi-effects platform for musicians,
              developers and makers.
            </p>

            <span className={styles.status}>
              <div className={styles.status}>
                <span />
                <p>Open source · Active development</p>
              </div>
            </span>
          </div>

          <div className={styles.links}>
            <div>
              <h3>Project</h3>

              <Link href="/hardware">Hardware</Link>

              <Link href="/software">Software</Link>

              <Link href="/roadmap">Roadmap</Link>
            </div>

            <div>
              <h3>Resources</h3>

              <Link href="/docs">Documentation</Link>

              <Link href="/sdk">SDK</Link>

              <Link href="/cli">CLI</Link>
            </div>

            <div>
              <h3>Community</h3>

              <Link href="/github">GitHub</Link>

              <Link href="/discord">Discord</Link>

              <Link href="/sponsors">Sponsors</Link>
            </div>
          </div>
        </div>

        <div className={styles.social}>
          <Link href="/github">
            <FaGithub />
          </Link>

          <Link href="/discord">
            <FaDiscord />
          </Link>

          <Link href="/contact">
            <Mail />
          </Link>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} THRUST FX</span>

          <span>
            Built with
            <Heart />
            by the community
          </span>

          <span>Apache 2.0 License</span>
        </div>
      </div>
    </footer>
  );
}
