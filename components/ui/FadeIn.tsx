"use client";
import { useSpring, animated } from '@react-spring/web';

interface FadeInProps {
  children: React.ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 20 }, // Pengaturan kecepatan animasi
  });

  return <animated.div style={styles}>{children}</animated.div>;
}
