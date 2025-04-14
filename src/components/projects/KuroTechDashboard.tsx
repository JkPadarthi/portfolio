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

const KuroTechDashboard: React.FC = () => {
  return (
    <ProjectWrapper>
      <Title>Flask x KuroTech Dashboard</Title>
      
      <Section>
        <Subtitle>Overview</Subtitle>
        <Text>
          A sci-fi inspired dashboard with system stats for both Raspberry Pi and Vivobook systems.
          Features particle backgrounds and live AJAX updates, designed with a Wuthering Waves x KuroTech aesthetic.
        </Text>
      </Section>

      <Section>
        <Subtitle>Key Features</Subtitle>
        <List>
          <ListItem>Real-time system monitoring (CPU, RAM, Disk, Network)</ListItem>
          <ListItem>Interactive particle background effects</ListItem>
          <ListItem>Live AJAX updates without page refresh</ListItem>
          <ListItem>Dark mode with neon accents</ListItem>
          <ListItem>Responsive design for all screen sizes</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Technical Details</Subtitle>
        <Text>
          Built with Flask for the backend, React for the frontend, and Chart.js for real-time data visualization.
          Uses WebSocket for live updates and custom particle effects using Canvas API.
        </Text>
      </Section>

      <Section>
        <Subtitle>Impact</Subtitle>
        <Text>
          Provides a beautiful and functional way to monitor system resources, with a unique aesthetic that
          makes system monitoring more engaging and visually appealing.
        </Text>
      </Section>
    </ProjectWrapper>
  );
};

export default KuroTechDashboard; 