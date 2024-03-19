import React, { useState } from 'react';
import Navbar from '../components/Navbar2';

function Filter() {
  // State to store the dropped file name
  const [droppedFileName, setDroppedFileName] = useState('');

  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Check if files meet the accepted types
    if (files.length > 1) {
      alert('Please drop only one file at a time.');
      return;
    }
    const file = files[0];
    const fileType = file.type;
    if (
      fileType !== 'audio/mp3' &&
      fileType !== 'audio/mpeg' && // for mp3
      fileType !== 'video/mp4' && // for mp4
      fileType !== 'application/pdf' && // for pdf
      !fileType.includes('word') // for word documents
    ) {
      alert('Only mp3, mp4, pdf, and Word documents are accepted.');
      return;
    }
    // Set the dropped file name
    setDroppedFileName(file.name);
    // Process the dropped file further if needed
    console.log('File:', file);
  };

  // Prevent default behavior for dragover event
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className='ml-12 mt-5 mr-12'>
        <h2 className='font-bold text-[40px]'>Welcome to PureScope</h2>
        <p className='text-[25px]'>Your Gateway to a Safer Online Experience</p>
      </div>
      <div className='flex mt-7 justify-center flex-col items-center'>
        <div className='w-[95%] items-center flex h-[350px] border-solid border-black rounded-[50px] border-2'
          onDrop={handleDrop}
          onDragOver={handleDragOver}>

          <div className='dragdrop w-[60%] h-[320px] ml-4 flex items-center justify-center bg-zinc-700 rounded-[50px]'>
            <p className='font-semibold text-[22px] text-white'>Drop your Documents here</p>
          </div>

          {/* Display the dropped file name below the dragdrop div */}
          

          <div className='w-[37%] h-[320px] ml-4 flex flex-col items-center justify-center rounded-[50px] '>
            <p className='font-bold text-[25px] '>Select your file to check</p>
            <button type="submit" className="bg-black mt-6 text-white  font-bold text-[25px] py-2 px-4 rounded-[30px] w-[200px] hover:bg-blue-600">
              Choose file
            </button>
          </div>

        </div>
        {droppedFileName && (
            <p className="mt-4">Dropped File: {droppedFileName}</p>
          )}
        <p className='mt-8 font-bold text-[20px]'>OR</p>
        <div className='mb-10'>
          <input
            type="text"
            placeholder="Enter your URL"
            className="mt-10 border-black border-solid border-2 px-3 py-2 w-[600px] mr-5 rounded-[30px]" />
          <button type="submit" className="bg-black mt-6 text-white  font-bold text-[25px] py-2 px-4 rounded-[30px] w-[200px] hover:bg-blue-600">
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
