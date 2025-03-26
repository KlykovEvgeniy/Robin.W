import { web1, web2, web3, web4 } from '../images';
import ProjectCard from '../reuse/ProjectCard';

export default function Project() {
  const text =
    'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.';
  const title = 'Restaurant Website Design';
  return (
    <section className="container mb-20 lg:mb-2">
      <div className="flex justify-between items-start lg:flex-col lg:items-center">
        <div>
          <div className='mb-10'>
            <p className="stoverline text-[#8491A0] uppercase mb-2">My projects</p>
            <h2 className="max-w-[572px] text-white">Work that I’ve done for the past 8 years</h2>
          </div>
          <ProjectCard img={web1} title={title} text={text} />
          <ProjectCard img={web2} title={title} text={text} />
        </div>
        <div className='flex items-center flex-col'>
          <ProjectCard img={web3} title={title} text={text} />
          <ProjectCard img={web4} title={title} text={text} />
          <button className='uppercase text-white mt-10 border-[#5221E6] border-[1px] py-7 px-10 transition duration-150 hover:text-black hover:bg-[#5221E6] lg:mt-2' type="button">View all projects</button>
        </div>
      </div>
    </section>
  );
}
