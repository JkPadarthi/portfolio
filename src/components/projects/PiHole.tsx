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

const PiHole: React.FC = () => {
  return (
    <ProjectWrapper>
      <Title>Pi-Hole Ad Blocker</Title>
      
      <Section>
        <Subtitle>Overview</Subtitle>
        <Text>
          Network-wide ad blocking built on Raspberry Pi 3B+. Clean, efficient, and a must-have
          for reclaiming browsing sanity.
        </Text>
      </Section>

      <Section>
        <Subtitle>Key Features</Subtitle>
        <List>
          <ListItem>Network-wide ad blocking</ListItem>
          <ListItem>DNS-level filtering</ListItem>
          <ListItem>Custom blocklists</ListItem>
          <ListItem>Real-time statistics</ListItem>
          <ListItem>Whitelist management</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Technical Details</Subtitle>
        <Text>
          Built on Raspberry Pi 3B+ using Pi-hole software, configured as a DNS server
          with custom blocklists and monitoring capabilities.
        </Text>
      </Section>

      <Section>
        <Subtitle>Impact</Subtitle>
        <Text>
          Provides a cleaner, faster browsing experience by blocking ads and trackers
          at the network level, improving both performance and privacy.
        </Text>
      </Section>
    </ProjectWrapper>
  );
};

export default PiHole; 