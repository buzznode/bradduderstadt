import React, { FC, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../../styles/pdf.css';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const cMapUrl = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps`;

interface PdfViewerProps {
  file: string;
}

const PdfViewer: FC<PdfViewerProps> = (props) => {
  const containerRef = useRef(null);
  const [file, setFile] = useState<string>('');
  const [numPages, setNumPages] = useState<number>(2);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [width, setWidth] = useState<number>();

  const onDocumentLoadSuccess = (document: PDFDocumentProxy) => {
    const { numPages } = document;
    setNumPages(numPages);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPagNumber) => prevPagNumber + offset);
  };

  const prevPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  useEffect(() => {
    setWidth(875);
    setFile(props.file);
  }, [props.file]);

  return (
    <div ref={containerRef} className='pdf-container'>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        renderMode='canvas'
        className='pdf-viewer'
        options={{ cMapUrl, cMapPacked: true }}
      >
        <Page
          pageNumber={pageNumber}
          width={width}
          onGetAnnotationsSuccess={(annotations) =>
            console.log({ annotations })
          }
          onGetAnnotationsError={console.error}
        />
      </Document>
      <div className='pages'>
        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
      </div>

      <button
        className='control left'
        title='previous page'
        type='button'
        disabled={pageNumber <= 1}
        onClick={prevPage}
      >
        &lt;
      </button>
      <button
        className='control right'
        title='next page'
        type='button'
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        &gt;
      </button>
    </div>
  );
};

export default PdfViewer;
