import React from 'react';
import Image from 'next/image';
import code from '../../public/code.png'

function SectionTechnologies() {
  return (
    <>
      <section className="dark:text-cyan-100">
        <div>
          <h3 className="text-3xl py-1">Web technologies I love and master</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-cyan-100">
            These are the <span className="text-slate-900-500">technologies</span> I love.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image
              className="mx-auto"
              src={code}
              alt={''}
              width={100}
              height={100}
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Quality Code</h3>
            <p>Implementing web applications with quality</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionTechnologies;
