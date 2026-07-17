'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import styles from './Header.module.scss';

const links = [
  {
    label: 'Project',
    href: '/project',
  },
  {
    label: 'Hardware',
    href: '/hardware',
  },
  {
    label: 'Software',
    href: '/software',
  },
  {
    label: 'Docs',
    href: '/docs',
  },
];

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="THRUST FX" width={280} height={80} />
        </Link>

        <nav>
          {links.map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/github" className={styles.github}>
            <FaGithub />

            <span>GitHub</span>
          </Link>

          <button className={styles.menu}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
