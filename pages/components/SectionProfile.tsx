import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import muda from '../../public/muda3.png';
import MyInfo from './MyInfo';
import NavBar from './NavBar';

function SectionProfile() {
  return (
    <>
      <section className="min-h-screen pb-10">
        <NavBar />
        <MyInfo />
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-cyan-100">
          <AiFillFacebook />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={muda} layout="fill" objectFit="cover" alt={''} />
        </div>
      </section>
    </>
  );
}

export default SectionProfile;
