import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

const rootNode = document.getElementById('react-app')!;

createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
