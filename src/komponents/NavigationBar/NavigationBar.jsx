// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fappadvice.com%2Fapp%2Fnusalms%2F1599993151&psig=AOvVaw3pGU068vBW3vSwtEp6x39r&ust=1691127628802000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDbq7_jv4ADFQAAAAAdAAAAABAE" alt="Logo Brand" className="w-8 h-8" />
        <input
          type="text"
          placeholder="Cari sesuatu..."
          className="px-2 py-1 bg-white rounded-md focus:outline-none"
        />
      </div>
      <div></div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white">
          Beranda
        </a>
        <a href="#" className="text-white">
          Pelatihan
        </a>
        <a href="#" className="text-white">
          ID V
        </a>
        {/* Logo brand di sini */}
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fid%2Fsearch%3Fq%3Dnotifikasi&psig=AOvVaw0jN2L4Y-N042-QP-iNh9SN&ust=1691127670526000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj-n9Pjv4ADFQAAAAAdAAAAABAE"
          alt="Notifikasi"
          className="w-6 h-6"
        />
        <a href="#" className="text-white">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
