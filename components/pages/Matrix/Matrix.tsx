import React, { useEffect } from 'react';
import { canvasId, cleanup, init } from './MatrixHelper';

const Matrix = (props: React.HTMLAttributes<HTMLElement>) => {
  useEffect(() => {
    init();
    return () => cleanup();
  }, []);
  return <canvas id={canvasId} width="1240" height="720" {...props}></canvas>;
};

export default Matrix;
