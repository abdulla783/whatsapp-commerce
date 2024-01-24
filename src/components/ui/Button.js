import React from 'react';

export function Button({ children, size }) {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-2';
      // Add more size classes if needed
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <button
      className={`bg-blue-500 text-white rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-600 ${getSizeClass()}`}
    >
      {children}
    </button>
  );
}