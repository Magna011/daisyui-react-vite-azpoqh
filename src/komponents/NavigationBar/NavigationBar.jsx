import React, { useState } from 'react';

const Navbar = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">NusaLearinng</span>
        <a className="link link-hover">2023 NusaLearning</a>
        <a className="link link-hover">All rights reversed</a>
        <a className="link link-hover">PT. Solusi Teknologi Nusantara</a>
      </div>
      <div>
        <span className="footer-title">About</span>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Terms & Condition</a>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Check Certificate </a>
      </div>
    </footer>
  );
};

export default Navbar;
