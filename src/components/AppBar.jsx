export default function AppBar() {
  return (
    <nav className="h-full sm:z-20 sm:flex sm:absolute sm:top-0 sm:right-0 sm:w-full sm:items-center sm:h-[100vh] sm:justify-center sm:bg-black">
      <ul className="flex space-x-16 items-center sm:flex-col sm:space-x-0 sm:items-center xl:space-x-5">
        <li>
          <a className="link-nav" href="#">Experience</a>
        </li>
        <li>
          <a className="link-nav" href="#">Work</a>
        </li>
        <li>
          <a className="link-nav" href="#">Photography</a>
        </li>
        <li>
          <a className="link-nav bg-[#5221E6] h-full p-[38px] -ml-10 hover:bg-transparent hover:text-white sm:p-0 sm:bg-transparent sm:-m-0 xl:-m-3"  href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
