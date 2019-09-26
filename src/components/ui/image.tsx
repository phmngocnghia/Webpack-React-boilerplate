import * as React from "react";
const { useEffect, useRef } = React;

export const Img = ({
  src,
  preSrc,
  props
}: {
  src: string;
  preSrc: string;
  props: React.ImgHTMLAttributes<HTMLImageElement>;
}) => {
  const randomId = btoa(Math.random().toString()).substring(0, 12);
  const imgRef = useRef(null);

  // hook into intersection observer hook
  useEffect(() => {
    const options = {
      root: document.querySelector(randomId),
      rootMargin: "0px",
      threshold: 1.0
    };

    const callBack = () => {
      if (!imgRef.current) {
        return;
      }

      if (imgRef.current.src === src) {
        return;
      }

      imgRef.current.src = src;
    };

    const observer = new IntersectionObserver(callBack, options);

    return () => {
      observer.disconnect();
    };
  }, []);

  // generate randomId for our component
  return <img ref={imgRef} id={randomId} {...props} src={preSrc} />;
};
