'use client'
import {useState, useEffect, RefObject} from 'react';

const onScreen = (ref : RefObject<Element>): boolean => {
    const [isIntersecting, setIntersecting] = useState<boolean>(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIntersecting(entry.isIntersecting)
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, [ref]);
    
      return isIntersecting;
      
}

export default onScreen;