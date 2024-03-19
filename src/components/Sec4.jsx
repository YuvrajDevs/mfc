import React, { useState } from 'react';

function Sec4() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions with the form data, such as sending it to a server
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='flex flex-col justify-center items-center mt-[30px] ml-12 mr-12 mb-16'>
    <h2 className='font-bold text-[60px]'>Contact</h2>
    <p className='mt-2  text-[25px] w-[900px] text-center'>Have a question or need assistance? Get in touch with us!</p>
    
    <div className='flex flex-col justify-center'> 
        
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 ml-5 font-semibold text-[25px]">Name</label>
        <input placeholder='Enter your Name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className=" border-black border-[2px] rounded-[30px] w-[600px] px-5 py-2 "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 ml-5 font-semibold text-[25px]">Email:</label>
        <input placeholder='Enter your Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className=" border-black border-[2px] rounded-[30px] w-[600px] px-5 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 ml-5 font-semibold text-[25px]">Message:</label>
        <textarea placeholder='Enter your Message'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className=" border-black border-[2px]  rounded-[30px] w-[600px] px-5 py-2"
          required
        />
      </div>
      <button type="submit" className="bg-black mt-6 text-white  font-bold text-[25px] py-2 px-4 rounded-[30px] w-[200px] hover:bg-blue-600">
        Submit
      </button>
    </form>
    </div>

    </div>
  );
}

export default Sec4;
