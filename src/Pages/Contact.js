import React from 'react';
import { SmallHeader, BiggerHeader } from '../Components/Headers';
import Footer from '../Components/Footer';
import SmallHero from '../Components/SmallHero';
import { BiLocationPlus } from 'react-icons/bi';
import { ImQuotesLeft } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import test1 from '../resources/images/client1-1-1-1-1.jpg';

// IMAGES

const Contact = () => {
  return (
    <>
      <SmallHero title='Contact Us' />
      <section className='contact'>
        <section className='contact-upper'>
          <div className='f-address'>
            <div className='add-content'>
              <center>
                <p className='add-loc'>
                  <BiLocationPlus />
                </p>
              </center>
              <p className='loc-main'>DUBLIN IRELAND</p>
              <p>Tyrellstown Dublin, Ireland</p>
              <p className='add-mail'>Email: carefulwatchers@gmail.com</p>
            </div>
          </div>
          <div className='f-map'>
            <div class='mapouter'>
              <div class='gmap_canvas'>
                <iframe
                  width='100%'
                  height='100%'
                  id='gmap_canvas'
                  src='https://maps.google.com/maps?q=Dublin Tyrells town&t=&z=9&ie=UTF8&iwloc=&output=embed'
                  frameBorder='0'
                  scrolling='no'
                  marginHeight='0'
                  marginWidth='0'
                ></iframe>
              </div>
            </div>
          </div>
          <div id = "f-map"></div>
          {/* <div className='s-address'>
            <div className='add-content'>
              <center>
                <p className='add-loc'>
                  <BiLocationPlus />
                </p>
              </center>

              <p className='loc-main'>DUBLIN IRELAND</p>
              <p>Tyrellstown Dublin, Ireland</p>
              <p className='add-mail'>Email: Hello@carefulwatchers.co.uk</p>
            </div>
          </div>
          <div className='s-map'>
            <div class='mapouter'>
              <div class='gmap_canvas'>
                <iframe
                  width='100%'
                  height='100%'
                  id='gmap_canvas'
                  src='https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed'
                  frameborder='0'
                  scrolling='no'
                  marginheight='0'
                  marginwidth='0'
                ></iframe>
              </div>
            </div>
          </div> */}
        </section>
        <div className = 'page-two-highlight'>
          <center>
            <p style = {{
              color: "crimson",
              fontWieght: "bolder",
              fontFamily: "Roboto-Regular"
            }}>
              Contact us
            </p>
          </center>
          <h1>
          Drop Us A Message For Any Query
          </h1>
          <p>
            Drop a message with us to enquire about our services, or get any kind of feedback you may need.
            We are always available to respond to you round the clock.

          </p>
        </div>
        <section className='contact-lower'>
          <div className='cl-content'>
            <div className='c11'>
              <input type='text' placeholder='Your Name' className='u-name' />
              <input type='text' placeholder='Your Email' className='u-mail' />
            </div>

            <div className='c12'>
              <input type='text' placeholder='Your Number' className='u-name' />
              <input
                type='text'
                placeholder='Your Subject'
                className='u-mail'
              />
            </div>

            <div className='c13'>
              <textarea placeholder='Your Message'></textarea>
            </div>

            <div className='c14'>
              <input type='checkbox' /> Terms and Privacy Policy
            </div>
            <div className='c15'>
              <center>
                <button className='anim-btn'>Send Message</button>
              </center>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
