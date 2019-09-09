import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import TypingHeadline from '../components/TypingHeadline';
import PhotographyPage from '../components/photography/PhotographyPage';

import nudge from '../assets/images/nudge.png';
import pirateShip from '../assets/images/pirate_ship.gif';
import simpleQuoteBook from '../assets/images/simpleQuoteBook.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            <TypingHeadline strings={config.subHeading} />
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Code | Ball | Surf</h2>
            <p className="text-white-50">
              I am a software engineer based out of West LA with a passion for learning new technologies 
              and building cool stuff. After receiving my BA in Business Administration from UC Irvine I 
              worked in operations management for ALDI, <a href="https://www.citizensjournal.us/huge-crowd-welcomes-new-grocery-store-oxnard/" target="_blank" rel="noopener noreferrer">
              helping with their largest expansion ever into the west coast</a>. After interviewing,
              hiring, and training hundreds of employees for ALDI, I reconnected with my first passion 
              of technology. I enrolled in a <a href="https://www.trilogyed.com/blog/taking-risks-and-tackling-challenges-donovan-lowkeen-full-stack-developer-at-currency/" target="_blank" rel="noopener noreferrer">
              full stack bootcamp at UCLA</a> in late 2017 and haven't looked back!. 
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <a href="http://www.simplequotebook.com/" target="_blank" rel="noopener noreferrer">
              <img className="img-fluid mb-3 mb-lg-0" src={simpleQuoteBook} alt="" />
            </a>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>SimpleQuoteBook</h4>
              <p className="text-black-50 mb-0">
                A place to store interesting quotes online.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <a href="http://www.nudge-me.com/" target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" src={nudge} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-black">Nudge</h4>
                  <p className="mb-0 text-black-50">
                  We curate dates, gifts, and gestures based on your relationship, location, and interests. 
                  Then we search the web and notify you of great deals and events so you don't have to.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <a href="https://github.com/ARKrew/workingArgo" target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" src={pirateShip} alt="" />
            </a>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-black">ARgo</h4>
                  <p className="mb-0 text-black-50">
                  ARgo is a mobile application that uses location intelligence and augmented reality to 
                  immerse users into new worlds through AR portals and collect badges with their friends.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-12 col-lg-12">
            <PhotographyPage />
          </div>
        </div>
      </div>
    </section>

    <br />
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
