import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

function Contact() {
  const [checker, setChecker] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChecker('');
    setLoading(true);
    emailjs.send('service_brngx5k', 'template_nf1f4cn', formData, '46subCmSwtOb2u6M-')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setLoading(false);
        setChecker('Success');
      }, (error) => {
        setLoading(false);
        setChecker('Error')
        console.error('There was an error sending the email:', error.text);
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

    return (
      <section className="flex justify-center items-center h-full mt-24">
        <div className="flex flex-col w-full h-full">
          <div className="justify-center items-center flex p-10">
            <div className="flex-col">
              <p className="flex justify-center text-xl text-slate-700">Contact</p>
              <p className="flex justify-center text-4xl font-semibold text-cyan-900">Get in Touch</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-full lg:space-x-8 lg:space-y-0 space-y-4">           
            <div className="lg:w-1/3 w-full lg:p-10 p-6  bg-slate-200 flex-col flex space-y-10 lg:text-start text-center">
              <div className="">
                <div className="mb-1">
                    <LocationOnOutlinedIcon/>
                </div>
                <label className="text-md font-semibold">Address</label>
                <p className="text-lg text-slate-700">Davao City, Philippines</p>
              </div>
              <div className="">
                <div className="mb-1">
                  <CallOutlinedIcon/>
                </div>
                <label className="text-md font-semibold">Contact Number</label>
                <p className="text-lg text-slate-700">(+63) 927 391 3735</p>
              </div>
              <div className="">
                <div className="mb-1">
                  <MailOutlinedIcon/>
                </div>
                <label className="text-md font-semibold">Email</label>
                <p className="text-lg text-slate-700">jaldreichrosales@gmail.com</p>
              </div>
            </div>

            <div className="lg:w-2/3 w-full flex items-center justify-center border px-5">
              <form className="p-6 w-full" onSubmit={handleSubmit}>
                <div className="flex mb-4 space-x-4">
                  <div className="w-1/2">
                    <label className="mb-3 block text-lg font-medium text-gray-700">Name</label>
                    <input
                      placeholder="John Aldreich Rosales"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="p-4 mt-1 h-10 block w-full border-gray-300 bg-slate-50 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-3 block text-lg font-medium text-gray-700">Email</label>
                    <input
                      placeholder="jaldreichrosales@gmail.com"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="p-4 mt-1 h-10 block w-full border-gray-300 bg-slate-50 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-lg font-medium text-gray-700">Message</label>
                  <textarea
                    placeholder="Write your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-4 mt-1 block w-full border-gray-300 bg-slate-50 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center">
                <button
                  type="submit"
                  className="mr-2 lg:w-3/12 w-5/4 py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Send Message
                </button>
                {checker === 'Success' && (
                  <div className="flex items-center">
                    <DoneAllOutlinedIcon sx={{ color: 'green' }} />
                    <p className="ml-1 text-green-700">Message Sent!</p>
                  </div>
                )}
                {checker === 'Error' && (
                  <div className="flex items-center">
                    <ErrorOutlineOutlinedIcon sx={{color:'red'}}/>
                    <p className="ml-1 text-red-700">Failed!</p>
                  </div>
                )}    
                {loading ? (
                  <div className="flex items-center">
                    <RefreshOutlinedIcon className="animate-spin"/>     
                  </div>
                ) : null} 
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
export default Contact;