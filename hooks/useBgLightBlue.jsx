import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useBgLightBlue = () => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor =
      router.pathname === '/' ? 'lightblue' : 'pink';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [router.pathname]);
};
