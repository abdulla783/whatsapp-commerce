import React from 'react';

export function AvatarImage({ src, alt }) {
  return <img className="w-full h-full object-cover rounded-full" src={src} alt={alt} />;
}

export function AvatarFallback({ children }) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600 font-bold text-xl rounded-full">
      {children}
    </div>
  );
}

export function Avatar({ children }) {
  return <div className="relative w-24 h-24 mx-auto">{children}</div>;
}
