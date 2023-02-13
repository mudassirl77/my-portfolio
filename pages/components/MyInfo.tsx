import React from 'react';

function MyInfo() {
  return (
    <>
      <div className="text-center p-7 py-10 dark:text-cyan-100">
        <h2 className="text-4xl py-2 text-slate-600 font-medium md:text-6xl dark:text-purple-100">
          Mudassir Lallmahamood
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-cyan-100">
          Senior Frontend Engineer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-cyan-100">
          Pragmatic engineer with a growth mindset. With almost 6 years of
          professional experience in software development, I deliver quality web
          applications. The hunger to achieve and learn more keeps me going.
        </p>
      </div>
    </>
  );
}

export default MyInfo;
