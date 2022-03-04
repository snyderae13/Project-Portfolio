import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
        Hello <br/>
        I'm Alec Snyder, Software Developer
     </SectionTitle>
     <SectionText>
     Methodical problem solver with experience in React, Node.js, RESTful APIs, and experience in enhancing user interfaces. Efficient at absorbing new languages and technologies. Strong collaborator in team projects and passionate about making dynamic and elegant products.
     </SectionText>
     <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;