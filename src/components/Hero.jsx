import { headTablet, head, headMobile } from '../images';

export default function Hero() {
  return (
    <div className="flex items-center md:flex-col ">
      <img
        loading="lazy"
        src={headMobile}
        srcSet={`${headMobile} 640w, ${headTablet} 768w, ${head}, 1024w `}
        className="object-cover md:h-[288px] md:mb-3 w-[672px] h-full xl:w-1/3 md:w-full"
        alt="header image"
      />
      <div>
        <div className="relative w-full">
          <h1 className="relative text-white right-10 md:text-[32px] xl:right-0 title mb-6 md:mb-3">
            I’m Robin Williams. A Product Designer <span className="text-[#5B6876]">based in Italy.</span>
          </h1>
          <p className="relative right-9 xl:right-0 text-white max-w-[738px] parOne xl:font-">
            I’m probably the most passionate designer you will ever get to work with. If you have a great project that
            needs some amazing skills, I’m your guy.
          </p>
        </div>
      </div>
    </div>
  );
}
