import styles from './Features.module.scss';

const features = [
  {
    title: 'Open Hardware',
    description: 'Build, modify and improve your own pedalboard.',
  },
  {
    title: 'Powerful DSP Engine',
    description: 'Create and chain digital effects without limits.',
  },
  {
    title: 'Community Driven',
    description: 'Share presets, effects and improvements.',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      {features.map(feature => (
        <article key={feature.title} className={styles.card}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  );
}
