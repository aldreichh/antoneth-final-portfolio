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
    emailjs.send('service_wv8jite', 'template_oghkceh', formData, 'L0IJxpW6_CxTV9LC0')
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
            <p className="flex justify-center text-xl text-rose-400" data-aos="fade-up">Contact</p>
            <p className="flex justify-center text-4xl font-semibold text-rose-400" data-aos="fade-up">Get In Touch</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-full lg:space-x-8 lg:space-y-0 space-y-4">           
          <div className="lg:w-1/3 w-full lg:p-10 p-6 bg-white flex-col flex space-y-10 lg:text-start text-center rounded-2xl border border border-gray-200">
            <div data-aos="fade-up">
              <div className="mb-1 text-rose-500">
                <LocationOnOutlinedIcon/>
              </div>
              <label className="text-md font-semibold text-rose-600">Address</label>
              <p className="text-lg text-gray-600">Davao City, Davao del Sur, Philippines</p>
            </div>
            <div data-aos="fade-up">
              <div className="mb-1 text-rose-500">
                <CallOutlinedIcon/>
              </div>
              <label className="text-md font-semibold text-rose-600">Contact Number</label>
              <p className="text-lg text-gray-600">(+63) 961 072 2203</p>
            </div>
            <div data-aos="fade-up">
              <div className="mb-1 text-rose-500">
                <MailOutlinedIcon/>
              </div>
              <label className="text-md font-semibold text-rose-600">Email</label>
              <p className="text-lg text-gray-600">antonethbacalla2@gmail.com</p>
            </div>
          </div>

          <div className="lg:w-2/3 w-full flex items-center justify-center rounded-2xl px-5 border border border-gray-200">
            <form className="p-6 w-full" onSubmit={handleSubmit}>
              <div className="flex mb-4 space-x-4">
                <div className="w-1/2" data-aos="fade-up">
                  <label className="mb-3 block text-lg font-medium text-rose-600">Name</label>
                  <input
                    placeholder="Antoneth Bacalla"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-4 mt-1 h-10 block w-full bg-white rounded-lg shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="w-1/2" data-aos="fade-up">
                  <label className="mb-3 block text-lg font-medium text-rose-600">Email</label>
                  <input
                    placeholder="antonethbacalla2@gmail.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-4 mt-1 h-10 block w-full bg-white rounded-lg shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>
              <div className="mb-4" data-aos="fade-up">
                <label className="mb-3 block text-lg font-medium text-rose-600">Message</label>
                <textarea
                  placeholder="Write your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-4 mt-1 block w-full bg-white rounded-lg shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="flex items-center">
                <button data-aos="fade-up"
                  type="submit"
                  className="mr-2 lg:w-3/12 w-5/4 py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-400 rounded-lg"
                >
                  Send Message
                </button>
                {checker === 'Success' && (
                  <div className="flex items-center">
                    <DoneAllOutlinedIcon sx={{ color: 'green' }} />
                    <p className="ml-1 text-green-600">Message Sent!</p>
                  </div>
                )}
                {checker === 'Error' && (
                  <div className="flex items-center">
                    <ErrorOutlineOutlinedIcon sx={{color:'red'}}/>
                    <p className="ml-1 text-red-600">Failed!</p>
                  </div>
                )}    
                {loading ? (
                  <div className="flex items-center">
                    <RefreshOutlinedIcon className="animate-spin text-rose-500"/>     
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