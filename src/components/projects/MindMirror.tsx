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

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const TechItem = styled.div`
  background: ${({ theme }) => theme.colors?.text?.[300]};
  color: ${({ theme }) => theme.colors?.body};
  padding: 0.5rem;
  border-radius: 2px;
  text-align: center;
  font-size: 0.9rem;
`;

const Prompt = styled.div`
  color: ${({ theme }) => theme.colors?.primary};
  margin-top: 2rem;
  font-weight: 700;
  
  &:before {
    content: ">";
    margin-right: 0.5rem;
  }
`;

const MindMirror: React.FC = () => {
  return (
    <ProjectWrapper>
      <Title>The Mind Mirror</Title>
      
      <Section>
        <Subtitle>Overview</Subtitle>
        <Text>
          A Raspberry Pi-powered digital reflection dashboard for tracking habits, moods,
          and mental well-being. Your personal mirror into mindfulness and productivity.
        </Text>
      </Section>

      <Section>
        <Subtitle>Key Features</Subtitle>
        <List>
          <ListItem>Task countdown and reminders</ListItem>
          <ListItem>Dream synthesizer and journal</ListItem>
          <ListItem>Persona mode switching</ListItem>
          <ListItem>Academic progress tracking</ListItem>
          <ListItem>Burnout detection system</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Technical Details</Subtitle>
        <Text>
          Built with Python (Flask) backend and React frontend, utilizing AI modules
          for pattern recognition and SQLite for data persistence.
        </Text>
      </Section>

      <Section>
        <Subtitle>Impact</Subtitle>
        <Text>
          Helps users maintain mental clarity and track personal growth through
          data-driven insights and mindful reflection prompts.
        </Text>
      </Section>

      <Prompt>Press any key to return to terminal...</Prompt>
    </ProjectWrapper>
  );
};

export default MindMirror; 