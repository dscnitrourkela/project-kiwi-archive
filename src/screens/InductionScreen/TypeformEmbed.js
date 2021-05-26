import React, { useRef, useEffect } from 'react';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css'; // import necessary CSS

const TypeformEmbed = () => {
  const container = useRef();

  useEffect(() => {
    createWidget('EEJYFQTZ', { container: container.current });
  }, []);

  return <div style={{ height: '100vh', width: '100vw' }} ref={container} />;
};

export default TypeformEmbed;
