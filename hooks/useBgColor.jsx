import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === '/' ? 'lightblue' : 'pink';
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    // router.pathname === '/' ? 'lightblue' : 'pink';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);
};
