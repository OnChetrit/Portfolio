import { useEffect } from 'react';

export const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  return <div className="loader"></div>;
};
