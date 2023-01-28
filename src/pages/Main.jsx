import React from 'react';
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='relative'>
      <div className='absolute bg-yellow-200 h-28 w-full '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          viewBox='0 0 1440 320'
          className=' fill-yellow-100  w-full h-full '>
          <path d='M0,192L21.8,202.7C43.6,213,87,235,131,250.7C174.5,267,218,277,262,256C305.5,235,349,181,393,181.3C436.4,181,480,235,524,240C567.3,245,611,203,655,170.7C698.2,139,742,117,785,112C829.1,107,873,117,916,144C960,171,1004,213,1047,240C1090.9,267,1135,277,1178,277.3C1221.8,277,1265,267,1309,218.7C1352.7,171,1396,85,1418,42.7L1440,0L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z,'></path>
        </svg>
      </div>
      <div className='container mx-auto px-3'>
        {/* Profile Info */}
        <div className='pt-10 flex flex-col items-center gap-3'>
          {/* Profile Image */}
          <img
            className='w-32 h-32 drop-shadow-xl rounded-full top-0 border border-white'
            src={require('../assets/profile-pic.jpg')}
          />

          {/* Profile Info */}
          <div className='relative text-yellow-800 border-yellow-600 text-sm px-2 text-center text-white font-bold  p-1 rounded-sm mb-5'>
            <a
              className='moveInLeft border-b pb-1 px-2 z-50 block'
              href='https://www.instagram.com/paoarens/'>
              @paorens
            </a>
          </div>
        </div>
        {/* Social Media */}
        <div className=' flex justify-center items-center gap-9 text-yellow-700 mb-5 text-xl cursor-pointer'>
          <a href='#' className='hover:text-yellow-900'>
            <FaFacebook />
          </a>
          <a href='#' className='hover:text-yellow-900'>
            <FaTwitter />
          </a>
          <a href='#' className='hover:text-yellow-900'>
            <FaYoutube />
          </a>
          <a href='https://www.instagram.com/paoarens/' className='hover:text-yellow-900'>
            <FaInstagram />
          </a>
        </div>
        {/* Links */}
        <div className='moveInRight flex flex-col gap-10  items-center '>
          <a
            href=' https://docs.google.com/forms/d/e/1FAIpQLSc0HcL8BBVVMhydcrF5N-LoQmQoVzKdPiQQ7UXvYjge0ksACQ/viewform'
            className='shadow-xl shadow-yellow-700/30 bg-white px-3 py-1 w-3/4 text-center text-yellow-600 font-bold tracking-widest rounded-sm'>
            Asesorias 📝
          </a>
          <a
            href='https://www.instagram.com/polabakery/'
            className=' shadow-xl shadow-yellow-700/30 bg-white px-3 py-1 w-3/4 text-center text-yellow-600 font-bold tracking-widest rounded-sm'>
            @polabakery 🧁
          </a>
          <a
            href='mailto: arenspaola@gmail.com'
            className='shadow-xl shadow-yellow-700/30 bg-white  px-3 py-1 w-3/4 text-center text-yellow-600 font-bold tracking-widest rounded-sm'>
            Contacto 📨
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
