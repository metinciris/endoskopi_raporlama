import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ReportGenerator } from './components/ReportGenerator';
import { Biopsy } from './types';

function App() {
  const [biopsies, setBiopsies] = useState<Biopsy[]>([]);

  const handleReset = () => {
    setBiopsies([]);
  };

  return (
    <Layout onReset={handleReset}>
      <ReportGenerator biopsies={biopsies} setBiopsies={setBiopsies} />
    </Layout>
  );
}

export default App;