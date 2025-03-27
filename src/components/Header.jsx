import AppBar from './AppBar';
import Logo from './Logo';
import Hero from './Hero';

export default function Header() {
  return (
    <header className="bg w-full p-5 mb-30 h-full pb-20 lg:pb-5 md:pb-1 sm:pb-0">
      <div className="container flex justify-between items-center mb-14 md:mb-5">
        <Logo />
        <AppBar />
      </div>
      <div className='container'>
        <Hero />
      </div>
    </header>
  );
}
