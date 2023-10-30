import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView

const SectionWithAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px', // Trigger the animation 100px before the section appears on the screen
    threshold: 0.2, // Adjust the threshold value
    triggerOnce: true,
  });
  console.log('inView:', inView);
  return (
    <div ref={ref} className={`hide ${inView ? 'animate' : ''}`}>
      {children}
    </div>
  );
};

export default SectionWithAnimation;