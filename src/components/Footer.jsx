import Logo from './Logo';
import { twitter, inc, dribbleLogo } from '../images';

export default function Footer() {
  return (
    <footer className="bg-[#181823] py-10">
      <div className="container">
        <div className="flex items-start justify-between mb-10 lg:flex-col">
          <div className="w-1/12 lg:w-1/3 lg:mb-4">
            <Logo />
            <ul className="flex space-x-3 mt-5">
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={dribbleLogo} alt="dribble" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={inc} alt="in" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-4/12 justify-between items-start lg:flex-col">
            <ul className="flex flex-col space-y-3 mb-4">
              <li>
                <a className="text-white parOne" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white parOne" href="#skill">
                  About
                </a>
              </li>
              <li>
                <a className="text-white parOne" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="text-white parOne" href="#photo">
                  Process
                </a>
              </li>
            </ul>
            <ul className="flex flex-col space-y-3">
              <li>
                <a className="text-white parOne" href="#">
                  Store
                </a>
              </li>
              <li>
                <a className="text-white parOne" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-white parOne" href="#">
                  Reading List
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='parOne text-[#8491A0]'>Not Copyright 2020 • Robin Williams. Webflow cloneable</p>
        </div>
      </div>
    </footer>
  );
}
