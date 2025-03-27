export default function AppBar() {
  return (
    <nav className="h-full sm:z-20 sm:flex sm:absolute sm:top-0 sm:right-0 sm:w-full sm:items-center sm:h-[110vh] sm:justify-center sm:bg-black">
      <ul className="flex space-x-16 items-center sm:flex-col sm:space-x-0 sm:items-center xl:space-x-5">
        <li>
          <a className="link-nav" href="#exp">Experience</a>
        </li>
        <li>
          <a className="link-nav" href="#work">Work</a>
        </li>
        <li>
          <a className="link-nav" href="#photo">Photography</a>
        </li>
        <li>
          <a href="#contact" className="link-nav bg-[#5221E6] h-full p-[38px] -ml-10 hover:bg-transparent hover:text-white sm:p-0 sm:bg-transparent sm:-m-0 xl:-m-3">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
