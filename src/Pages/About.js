import React from 'react';
import SmallHero from '../Components/SmallHero';
import { SmallHeader, BiggerHeader } from '../Components/Headers';
import Footer from '../Components/Footer';
import { ThirdDiv, DarkDiv } from '../Components/SecondPage';
import Testimonials from '../Components/Testimonials';
import {MoreAbtContent} from "../Components/SecondPage";
const About = () => {
  return (
    <>
      <SmallHero title='About' />
      <ThirdDiv />
      {/* <DarkDiv />
      <Testimonials /> */}
      <MoreAbtContent  />
      <Footer />
    </>
  );
};

export default About;
