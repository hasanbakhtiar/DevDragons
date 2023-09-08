import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppUseMemo';
import AppUseMemo from './AppUseMemo';
import AppUseLayoutEffect from './AppUseLayoutEffect';
import AppUseImperativeHandle from './AppUseImperativeHandle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppUseImperativeHandle />
  </React.StrictMode>
);

