'use client'
import {useState, useEffect, RefObject} from 'react';

const useScreen = (ref: RefObject<Element>): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(true);

  useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
      });

      const currentRef = ref.current;

      if (currentRef) {
          observer.observe(currentRef);
      }

      return () => {
          if (currentRef) {
              observer.unobserve(currentRef);
          }
      };
  }, [ref]);

  return isIntersecting;
};

export default useScreen;