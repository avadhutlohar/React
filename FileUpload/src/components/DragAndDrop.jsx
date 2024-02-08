import React, { useState } from 'react';
import uploadIcon from '../assets/uploadIcon.png'  
const DragAndDrop = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    const excelFiles = files.filter(file => file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel');
    // Process the excelFiles array (e.g., upload to server or handle locally)
    console.log('Excel files:', excelFiles);
  };

  return (
    <div
      className={`border-2 border-dashed border-gray-300 rounded-md p-4 text-center ${isDragOver ? 'bg-gray-100' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <img className="w-40 mx-auto" src={uploadIcon} alt="upload" />
      <p className="text-gray-500">Drag &amp; Drop Excel files here</p>
      <p className="mt-2">or</p>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
            // Process the file (e.g., upload to server or handle locally)
            console.log('Excel file:', file);
          } else {
            console.error('Invalid file format. Please upload an Excel file.');
          }
        }}
        className="hidden"
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer text-blue-500 hover:text-blue-600 mt-2 inline-block"
      >
        Choose File
      </label>
    </div>
  );
};

export default DragAndDrop;
