import Experience from './Experience';
import Philosophy from './Philosophy';
import Skillset from './Skillset';
import Companies from './Companies';
import Project from './Projects.';
import Instagram from './Instagram';
import Dribble from './Dribble';
import People from './People';
import Photography from './Photography';
import Contact from './Contact';

export default function Main() {
  return (
    <main className="bg-black ">
      <Experience />
      <Philosophy />
      <Skillset />
      <Companies />
      <Project />
      <Instagram />
      <Dribble />
      <People />
      <Photography />
      <Contact />
    </main>
  );
}
