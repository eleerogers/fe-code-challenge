import {useState, useEffect, useRef} from 'react';

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  let mounted = false;
    
  function enter() {
    if (mounted) {
      setHovered(true);
    }
  }
    
  function leave() {
    if (mounted) {
      setHovered(false);
    }
  }
    
  useEffect(() => {
    mounted = true;
    ref.current.addEventListener('mouseenter', enter);
    ref.current.addEventListener('mouseleave', leave);
        
    return () => {
      mounted = false;
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', enter);
        ref.current.removeEventListener('mouseleave', leave);
      }
    };
  }, []);
    
  return [hovered, ref];
}

export default useHover;
