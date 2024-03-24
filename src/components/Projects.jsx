import React from 'react';
import ProjectItem from './ProjectItem';
import carshowImg from './../assets/carshow.jpg';
import ecommerseImg from './../assets/ecommerce.jpg';
import iphoneImg from './../assets/iphone.jpg';
import travelImg from './../assets/travel.jpg';

const Projects = () => {
  return (
      <div id='projects' className='max-w[1020px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
          <p className='text-center py-8'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officia eligendi
              consectetur minima cumque voluptates dolorem deserunt magnam nemo eveniet quae
              adipisci autem commodi, quo laborum dolorum recusandae eos dignissimos.
          </p>
          <div className='grid sm:grid-cols-2 gap-12'>
              <ProjectItem img={carshowImg} title='Car Show App' />
              <ProjectItem img={ecommerseImg} title='Ecommerce App' />
              <ProjectItem img={iphoneImg} title='Iphone App' />
              <ProjectItem img={travelImg} title='Travel App' />
          </div>
      </div>
  );
}

export default Projects