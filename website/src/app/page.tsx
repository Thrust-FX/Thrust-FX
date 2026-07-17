import Hero from '@/components/sections/Hero/Hero';
import Features from '@/components/sections/Features/Features';
import HardwarePreview from '@/components/sections/HardwarePreview/HardwarePreview';
import Community from '@/components/sections/Community/Community';

export default function Home() {
  return (
    <main>
      <Hero />

      <Features />

      <HardwarePreview />

      <Community />
    </main>
  );
}
