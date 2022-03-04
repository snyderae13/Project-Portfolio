import React from 'react';
import {  DiReact, DiBootstrap, DiCss3, DiJavascript,DiMongodb,DiNodejs,DiPostgresql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with with variety of technologies in the web development world.
      From Front-End technologies like JavaScript, React, HTML, and CSS to Back-End Tecnologies like Node.js, MongoDB, and SQL. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='8rem'/>
        <DiBootstrap size='8rem'/>
        <DiCss3 size='8rem'/>
        <DiJavascript size='8rem'/>
        <DiMongodb size='8rem'/>
        <DiNodejs size='9rem'/>
        <DiPostgresql size='8rem'/>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
