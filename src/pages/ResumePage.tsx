import React from 'react';
import PdfViewer from '../components/pdf/PdfViewer';

const ResumePage = () => {
  return (
    <div>
      <PdfViewer file='Resume.pdf' />
    </div>
  );
};

export default ResumePage;
