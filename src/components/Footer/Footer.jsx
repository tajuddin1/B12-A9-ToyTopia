import React from 'react';
import { FaFacebookF, FaInstagram, FaSlackHash, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='max-w-340 mx-auto px-4'>
      <footer className="grid grid-cols-2 sm:grid-cols-none justify-between footer sm:footer-horizontal bg-base-200 text-base-content py-10">
        <nav>
          <h6 className="footer-title">Category</h6>
          <a className="link link-hover hover:text-accent">Educational Toy</a>
          <a className="link link-hover hover:text-accent">Soft Toy</a>
          <a className="link link-hover hover:text-accent">Math Toy</a>
          <a className="link link-hover hover:text-accent">Building Blocks</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover hover:text-accent">About us</a>
          <a className="link link-hover hover:text-accent">Contact</a>
          <a className="link link-hover hover:text-accent">Jobs</a>
          <a className="link link-hover hover:text-accent">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Shortcut</h6>
          <a className="link link-hover hover:text-accent">Return Ploicy</a>
          <a className="link link-hover hover:text-accent">Shop</a>
          <a className="link link-hover hover:text-accent">Best Sellers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover hover:text-accent">Terms of use</a>
          <a className="link link-hover hover:text-accent">Privacy policy</a>
          <a className="link link-hover hover:text-accent">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer flex-row bg-base-200 text-base-content border-base-300 border-t py-4">
        <aside className="grid-flow-col items-center">
          <FaSlackHash className='w-8 h-8'/>
          <p>
             Toy Topia In.
            <br />
            Providing Best Toys since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaFacebookF className='w-6 h-6'/>
            </Link>
            <Link>
              <FaYoutube className='w-6 h-6'/>
            </Link>
            <Link>
              <FaInstagram className='w-6 h-6'/>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;