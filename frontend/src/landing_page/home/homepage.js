import React, { PureComponent } from 'react';
import Hero from './hero';
import Stats from './stats';
import Awards from './awards';
import Education from './education';
import Pricing from './pricing';
import OpenAccount from '../../OpenAccount';
import Footer from '../../footer';
import Navbar from '../../navbar';

function Homepage(){
    
        return(
            <>
              
              <Hero />
              <Stats />
              <Awards />
              <Education />
              <Pricing />
              <OpenAccount />
              
            </>
        )
   
}
export default Homepage;