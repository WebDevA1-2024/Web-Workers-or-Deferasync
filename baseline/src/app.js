import React, { useEffect } from 'react';
import { getFID, getFCP, getLCP } from 'web-vitals';

function App() {
  useEffect(() => {
    // Mengukur performa halaman
    getFID((metric) => {
      console.log('First Input Delay (FID):', metric.value);
    });
    getFCP((metric) => {
      console.log('First Contentful Paint (FCP):', metric.value);
    });
    getLCP((metric) => {
      console.log('Largest Contentful Paint (LCP):', metric.value);
    });
  }, []);

  return (
    <div>
      <h1>Web Performance Experiment</h1>
      <p>Pengukuran performa seperti FID, FCP, dan LCP ditampilkan di console.</p>
    </div>
  );
}

export default App;
