"use client";
import { useSpring, animated } from '@react-spring/web';

interface HoverEffectProps {
  children: React.ReactNode;
}

export default function HoverEffect({ children }: HoverEffectProps) {
  const [style, api] = useSpring(() => ({
    scale: 1,
  }));

  return (
    <animated.div
      style={style}
      onMouseEnter={() => api.start({ scale: 1.1 })}
      onMouseLeave={() => api.start({ scale: 1 })}
    >
      {children}
    </animated.div>
  );
}
