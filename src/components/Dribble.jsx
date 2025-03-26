import ButtonWhite from '../reuse/ButtonWhite';
import {dribble} from '../images';

export default function Dribble() {
  return (
    <section className="container mb-10 lg:mb-2">
      <h2 className="text-white mb-4">Dribble</h2>
      <p className="parTwo text-[#8491A0] max-w-[636px] mb-6">
        Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are
        appreciated.
      </p>
      <ButtonWhite title="Follow me on Dribbble" color="white" />

      <img src={dribble} alt="dribble" className="w-full h-full mt-20 rounded-[20px]" />
    </section>
  );
}
