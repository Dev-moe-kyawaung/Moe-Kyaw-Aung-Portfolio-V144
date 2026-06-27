/**
 * main.jsx — React 18 Entry Point
 * Moe Kyaw Aung Portfolio V144
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './MoeKyawAung_Portfolio_V144.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
