import React from 'react';
import { SmallHeader, BiggerHeader } from '../Components/Headers';
import Footer from '../Components/Footer';
import SmallHero from '../Components/SmallHero';
import { ImQuotesLeft } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import test1 from '../resources/images/client1-1-1-1-1.jpg';

const Testimonies = () => {
  return (
    <>
      <SmallHero title='Testimonials' />

      <section className='testimonies-main'>
        <section className='testimonies-content'>
          <div className='testimonies-headline'>
            <h1>What People are saying about Us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quam neque quibusdam corrupti aspernatur corporis alias
              nisi dolorum expedita veritatis voluptates minima sapiente.
            </p>
          </div>
          <div className='test-cards'>
            <div className='each-t-card'>
              <center>
                <span className='t-quot'>
                  <ImQuotesLeft />
                </span>
              </center>
              <div className='t-test'>
                <div className='t-test-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <p className='t-stars'>
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className='t-traingle'></div>
              <div className='t-holder'>
                <img src={test1} />
                <div className='t-names'>
                  <h2>Jane Doe</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>

            <div className='each-t-card'>
              <center>
                <span className='t-quot'>
                  <ImQuotesLeft />
                </span>
              </center>
              <div className='t-test'>
                <div className='t-test-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <p className='t-stars'>
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className='t-traingle'></div>
              <div className='t-holder'>
                <img src={test1} />
                <div className='t-names'>
                  <h2>Jane Doe</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>

            <div className='each-t-card'>
              <center>
                <span className='t-quot'>
                  <ImQuotesLeft />
                </span>
              </center>
              <div className='t-test'>
                <div className='t-test-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <p className='t-stars'>
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className='t-traingle'></div>
              <div className='t-holder'>
                <img src={test1} />
                <div className='t-names'>
                  <h2>Jane Doe</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>

            <div className='each-t-card'>
              <center>
                <span className='t-quot'>
                  <ImQuotesLeft />
                </span>
              </center>
              <div className='t-test'>
                <div className='t-test-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <p className='t-stars'>
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className='t-traingle'></div>
              <div className='t-holder'>
                <img src={test1} />
                <div className='t-names'>
                  <h2>Jane Doe</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>

            <div className='each-t-card'>
              <center>
                <span className='t-quot'>
                  <ImQuotesLeft />
                </span>
              </center>
              <div className='t-test'>
                <div className='t-test-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <p className='t-stars'>
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className='t-traingle'></div>
              <div className='t-holder'>
                <center>
                  <img src={test1} />
                </center>
                <div className='t-names'>
                  <h2>Jane Doe</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>

            <div className='each-t-card'>
              <center>
                <span className='t-quot'>
                  <ImQuotesLeft />
                </span>
              </center>
              <div className='t-test'>
                <div className='t-test-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <p className='t-stars'>
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className='t-traingle'></div>
              <div className='t-holder'>
                <img src={test1} />
                <div className='t-names'>
                  <h2>Jane Doe</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Testimonies;
