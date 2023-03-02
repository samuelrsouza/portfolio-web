import React from 'react';

import Image from '../assets/avatar.png';
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section id='home' className='section'>
      <div className='container mx-auto'>
        <div>
          <div>
            <div> 
              <img src={Image} width='500' alt='Avatar' /> 
            </div>
            <h1 className='mb-3'>
              SAMUEL <span>SOUZA</span>
            </h1>
            <div className='text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Eu sou um</span>
              <div className='mt-2 mb-3'>
                <TypeAnimation sequence={[
                  'Desenvolvedor Front-End',
                  2000,
                  'Desenvolvedor Web3',
                  2000,
                  'Desenvolvedor Blockchain',
                  2000,
                  'Aspirante a Auditor de Segurança',
                  2000
                ]}
                speed={50}
                className="text-accent"
                repeat={Infinity} 
                />
              </div>
                <p>
                  Em formação pela Universidade Estadual do Norte do Paraná, 
                  no curso de Ciência da Computação, meus objetivos de carreira consistem no <span className='text-purple-400'> desenvolvimento web, 
                  auditoria e segurança. 
                  </span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
