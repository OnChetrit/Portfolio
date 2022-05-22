import { useEffect } from 'react';

export const Loader = ({ setLoading }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // });

  return <div className="loader"></div>;
};
