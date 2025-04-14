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

const VoskPipeline: React.FC = () => {
  return (
    <ProjectWrapper>
      <Title>Offline Vosk Voice Recognition Pipeline</Title>
      
      <Section>
        <Subtitle>Overview</Subtitle>
        <Text>
          A fully offline speech-to-text system that converts Telugu speech to English text using Vosk,
          then routes the queries to a local LLM (Gemma 2) for processing.
        </Text>
      </Section>

      <Section>
        <Subtitle>Key Features</Subtitle>
        <List>
          <ListItem>Offline Telugu speech recognition using Vosk</ListItem>
          <ListItem>Local LLM integration with Gemma 2</ListItem>
          <ListItem>Real-time speech processing</ListItem>
          <ListItem>Custom voice command system</ListItem>
          <ListItem>Low-latency response pipeline</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Technical Details</Subtitle>
        <Text>
          Built with Python, using Vosk for speech recognition and Gemma 2 for language processing.
          Implements a custom pipeline for efficient processing of voice commands and responses.
        </Text>
      </Section>

      <Section>
        <Subtitle>Impact</Subtitle>
        <Text>
          Enables voice-controlled interfaces in Telugu without requiring internet connectivity,
          making it ideal for privacy-focused applications and areas with limited internet access.
        </Text>
      </Section>
    </ProjectWrapper>
  );
};

export default VoskPipeline; 