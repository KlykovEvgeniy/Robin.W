import { italy1, italy2, italy3, italy4 } from '../images';

export default function Photography() {
  return (
    <section id='photo' className="container mb-10 lg:mb-2">
      <h2 className="text-white mb-2 sm:text-[32px]">Photography</h2>
      <p className="parOne text-[#8491A0] mb-10 max-w-[588px]">
        Here is a collection of my best travel pictures that I took while travelling places all around the world.{' '}
      </p>
      <ul className="flex items-center space-x-5 mb-10 sm:grid  sm:grid-cols-2 sm:space-x-0 sm:gap-5">
        <li>
          <button type="button" className="uppercase py-5 px-8 border-2 border-[#5221E6] text-white bg-[#5221E6]  sm:w-full">
            Italy
          </button>
        </li>
        <li>
          <button type="button" className="uppercase py-5 px-8 border-2 border-[#5221E6] text-white transition duration-150 hover:bg-[#5221E6]  sm:w-full">
            <p className='sm:relative sm:-ml-3'>Australia</p>
          </button>
        </li>
        <li>
          <button type="button" className="uppercase py-5 px-8 border-2 border-[#5221E6] text-white transition duration-150 hover:bg-[#5221E6] sm:w-full">
            India
          </button>
        </li>
        <li>
          <button type="button" className="uppercase py-5 px-8 border-2 border-[#5221E6] text-white transition duration-150 hover:bg-[#5221E6] sm:w-full">
            Brazil
          </button>
        </li>
      </ul>
      <div className="flex items-center justify-between lg:grid lg:grid-cols-2 lg:gap-10 sm:flex sm:flex-col sm:items-center sm:space-y-5">
        <img className="w-1/5 h-full lg:w-full" src={italy1} alt="italy first" />
        <img className="w-1/5 h-full lg:w-full" src={italy2} alt="italy second" />
        <img className="w-1/5 h-full lg:w-full" src={italy3} alt="italy third" />
        <img className="w-1/5 h-full lg:w-full" src={italy4} alt="italy fourth" />
      </div>
    </section>
  );
}
