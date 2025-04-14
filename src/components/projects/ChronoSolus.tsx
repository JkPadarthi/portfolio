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

const ChronoSolus: React.FC = () => {
  return (
    <ProjectWrapper>
      <Title>ChronoSolus Pomodoro</Title>
      
      <Section>
        <Subtitle>Overview</Subtitle>
        <Text>
          A darkly themed Pomodoro timer set in the ChronoSolus universe, syncing with your time,
          mood, and burnout. Part focus tool, part immersive productivity companion.
        </Text>
      </Section>

      <Section>
        <Subtitle>Key Features</Subtitle>
        <List>
          <ListItem>Customizable Pomodoro intervals</ListItem>
          <ListItem>Mood and burnout tracking</ListItem>
          <ListItem>Dark mode with ChronoSolus aesthetic</ListItem>
          <ListItem>Productivity statistics and insights</ListItem>
          <ListItem>Customizable break activities</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Technical Details</Subtitle>
        <Text>
          Built with React and TypeScript, using styled-components for theming.
          Implements local storage for persistence and custom hooks for timer functionality.
        </Text>
      </Section>

      <Section>
        <Subtitle>Impact</Subtitle>
        <Text>
          Helps users maintain focus while tracking their mental state, providing insights
          into productivity patterns and preventing burnout through smart break scheduling.
        </Text>
      </Section>
    </ProjectWrapper>
  );
};

export default ChronoSolus; 