import { memo } from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-2 ">
      <span className="text-lg font-semibold bg-black px-4 py-1 rounded-full text-white" >
        Target Audience
      </span>

      <button
        type="button"
        className="rounded-lg py-2 font-medium text-black hover:bg-gray-900"
      >
        Digit Banking Platform
      </button>
    </nav>
  );
};

export default memo(Navbar);