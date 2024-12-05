import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background text-black">
      <h1 className="text-9xl">Not Found</h1>
      <p className="font-bold text-4xl">The page you are looking for does not exist</p>
    </div>
  );
};

export default NotFound;
