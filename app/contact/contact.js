'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_c8bkfy5', 'template_l18by7d', form.current, '41TzPy6YdZyx5-Atf')
      .then((result) => {
          console.log(result.text);
          alert("Message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div className='w-96 pt-12'>
            <form ref={form} onSubmit={sendEmail} className='flex items-start justify-center flex-col w-full'>
            <label className='text-fuchsia-400 mt-4'>Name</label>
            <input required type="text" name="user_name" className='w-full h-9 p-2 outline-none rounded-md focus:border-2 focus:border-fuchsia-400 text-black'/>
            <label className='text-fuchsia-400 mt-4'>Email</label>
            <input required type="email" name="user_email" className='w-full h-9 p-2 outline-none rounded-md focus:border-2 focus:border-fuchsia-400 text-black'/>
            <label className='text-fuchsia-400 mt-4'>Phone Number</label>
            <input required type="phoneNumber" name="phone_number" className='w-full h-9 p-2 outline-none rounded-md focus:border-2 focus:border-fuchsia-400 text-black'/>
            <label className='text-fuchsia-400 mt-4'>Message</label>
            <textarea required name="message" className='max-w-full min-w-full w-full max-h-100 min-h-100 p-7 outline-none rounded-5 focus:border-2 focus:border-fuchsia-400 rounded-md text-black' />
            <input type="submit" value="Send Message" className='mt-8 cursor-pointer bg-black text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black border-none w-full h-12 rounded-md'/>
            </form>
        </div>
    )
}

export default Contact;