import ExperienceCard from '../reuse/ExperienceCard';

export default function Experience() {
  return (
    <section id='exp' className="border-t-2 border-dashed border-[#8491A0] w-full px-5 pt-20 md:border-none lg:py-2">
      <div className="container">
        <p className="stoverline uppercase text-[#8491A0] mb-5">Work experience</p>
        <h2 className="max-w-[690px] text-white mb- md:text-[32px] md:max-w-[320px]">Companies I have worked for in the past</h2>
        <div className="flex items-center justify-between space-x-10 md:flex-col md:items-start md:space-x-0">
          <ExperienceCard title="01" commonRole="Google" color='#3CC74E' role='Interaction Designer' text='I currently am the lead designer on the interaction design team for Google Play.'/>
          <ExperienceCard title="02" commonRole="Facebook" color='#609BFF' role='Product Designer' text='I’ve worked on a wide variety of internal tools for facebook over the past 6 years.'/>
          <ExperienceCard title="03" commonRole="Dribbble" color='#E95D90' role='Graphic Designer' text='I started my design career with Dribbble. I was incharge of creating illustrations for the platform.' other={{position: 'relative', bottom: '-10px'}}/>
        </div>
      </div>
    </section>
  );
}
