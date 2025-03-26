import { cbre, epiq, lines, fresh, line, place } from '../images';

export default function Companies() {
  return (
    <section className="container mb-20 flex items-center justify-between lg:mb-2 lg:grid lg:grid-cols-2 lg:place-items-center">
      <img className='p-10 border-[#181823] border-[1px] w-1/4 h-[110px] lg:w-full lg:border-none' src={cbre} alt="cbre" />
      <img className='p-10 border-[#181823] border-[1px] w-1/4 h-[110px] lg:w-full lg:border-none' src={epiq} alt="cbre" />
      <img className='p-10 border-[#181823] border-[1px] w-1/4 h-[110px] lg:w-full lg:border-none' src={lines} alt="cbre" />
      <img className='p-10 border-[#181823] border-[1px] w-1/4 h-[110px] lg:w-full lg:border-none' src={fresh} alt="cbre" />
      <img className='p-10 border-[#181823] hidden border-[1px] w-full h-[110px] lg:block lg:border-none' src={place} alt="cbre" />
      <img className='p-10 border-[#181823] hidden border-[1px] w-full h-[110px] lg:block lg:border-none' src={line} alt="cbre" />
    </section>
  );
}
