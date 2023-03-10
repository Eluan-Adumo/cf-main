import React from 'react';
import { SmallHeader, BiggerHeader } from '../Components/Headers';
import Footer from '../Components/Footer';
import SmallHero from '../Components/SmallHero';
import { ImQuotesLeft } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import test1 from '../resources/images/client1-1-1-1-1.jpg';

// IMAGES
import team1 from '../resources/images/team1-1-1-1-1.jpg';

const Team = () => {
  return (
    <>
      <SmallHero title='Team' />
      <section className='team'>
        <section className='team-content'>
          <div className='team-headline'>
            <h1>OUR EXPERT TEAM</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quam neque quibusdam corrupti aspernatur corporis alias
              nisi dolorum expedita veritatis voluptates minima sapiente.
            </p>
          </div>
          <div className='team-cards'>
            <div className='each-tm-cards'>
              <div className='t-picture-side tope-daisy'></div>
              <div className='t-role-side'>
                <h2>Tope Daisy</h2>
                <p>Penetration Tester</p>
                <p>CEO</p>
              </div>
            </div>

            <div className='each-tm-cards'>
              <div className='t-picture-side tony-obi'></div>
              <div className='t-role-side'>
                <h2>Tony Obisesan</h2>
                <p>Cyber Security analyst</p>
                <p>Co-Founder</p>
              </div>
            </div>

            <div className='each-tm-cards'>
              <div className='t-picture-side dabotubo-briggs'></div>
              <div className='t-role-side'>
                <h2>Dabotubo Briggs</h2>
                <p>Cyber Security Specialist</p>
                <p>COO Co-Founder</p>
              </div>
            </div>

            <div className='each-tm-cards'>
              <div className='t-picture-side francis'></div>
              <div className='t-role-side'>
                <h2>Dr. Francis Nwebonyi</h2>
                <p>Cyber Security Consultant</p>
                <p>Co-Visionary</p>
              </div>
            </div>

            <div className='each-tm-cards'>
              <div className='t-picture-side Ifeoluwa-Oloyede'></div>
              <div className='t-role-side'>
                <h2>Ifeoluwa Oloyede</h2>
                <p>Cyber Security Analyst</p>
                <p>Non -Executive Director</p>
              </div>
            </div>

            <div className='each-tm-cards'>
              <div className='t-picture-side segun-ebenizer'></div>
              <div className='t-role-side'>
                <h2>Segun Ebenizer</h2>
                <p>Social Media Manager</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Team;
