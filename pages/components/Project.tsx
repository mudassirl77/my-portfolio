import React from 'react';
import Image from 'next/image';

function Project({ src, alt }) {
  return (
    <>
      <div className="basis-1/3 flex-1">
        <Image
          src={src}
          alt={alt}
          className="rounded-lg object-cover"
          style={{ width: '100%', height: '100%' }}
          layout="responsive"
        ></Image>
      </div>
    </>
  );
}

export default Project;
