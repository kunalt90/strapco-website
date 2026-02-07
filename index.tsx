import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const init = () => {
  const container = document.getElementById('root');
  if (!container) return;

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Critical mounting error:", err);
    container.innerHTML = `<div style="color: white; padding: 40px; font-family: sans-serif; height: 100vh; background: #02040a;">
      <h2 style="color: #0066FF; font-weight: 900; letter-spacing: -0.02em;">BOOT_FAILURE</h2>
      <p style="color: #64748B; margin: 20px 0;">The application encountered a runtime error during initialization.</p>
      <pre style="background: #0a0c12; padding: 20px; border: 1px solid #11141d; color: #94A3B8; font-size: 12px; overflow: auto;">${err instanceof Error ? err.message : String(err)}</pre>
      <button onclick="window.location.reload()" style="margin-top: 20px; background: #0066FF; color: white; border: none; padding: 12px 24px; font-weight: bold; cursor: pointer; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px;">Restart System</button>
    </div>`;
  }
};

init();
