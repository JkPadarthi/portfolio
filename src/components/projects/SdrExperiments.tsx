import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  margin: 1rem 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 1rem;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const TechBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const TechItem = styled.div`
  border: 1px solid #00ff9c;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const SDREXperiments: React.FC = () => {
  return (
    <ProjectWrapper>
      <Title>SDR + FM Radio Experiments</Title>
      
      <Section>
        <Subtitle>Overview</Subtitle>
        <Text>
          A series of experiments using Software-Defined Radio (SDR) to explore and decode various radio signals,
          from FM radio to more complex digital transmissions.
        </Text>
      </Section>

      <Section>
        <Subtitle>Key Features</Subtitle>
        <List>
          <ListItem>FM radio signal reception and decoding</ListItem>
          <ListItem>Signal visualization and analysis</ListItem>
          <ListItem>Custom signal processing algorithms</ListItem>
          <ListItem>Real-time spectrum analysis</ListItem>
          <ListItem>Digital signal decoding experiments</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Technologies Used</Subtitle>
        <TechBox>
          <TechItem>GNU Radio</TechItem>
          <TechItem>Python</TechItem>
          <TechItem>RTL-SDR</TechItem>
          <TechItem>DSP</TechItem>
        </TechBox>
      </Section>
    </ProjectWrapper>
  );
};

export default SDREXperiments; 