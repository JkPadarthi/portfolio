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

const AIDungeonMaster: React.FC = () => {
  return (
    <ProjectWrapper>
      <Title>AI Dungeon Master</Title>
      
      <Section>
        <Subtitle>Overview</Subtitle>
        <Text>
          A fully offline, D&D-style AI-powered game system using GPT-Neo/GPT-J. Supports procedural
          worldgen, dynamic NPCs, branching story arcs, and LAN-based multiplayer with a text+GUI tabletop.
        </Text>
      </Section>

      <Section>
        <Subtitle>Key Features</Subtitle>
        <List>
          <ListItem>Procedural world generation</ListItem>
          <ListItem>Dynamic NPC personalities and behaviors</ListItem>
          <ListItem>Branching narrative system</ListItem>
          <ListItem>LAN multiplayer support</ListItem>
          <ListItem>Hybrid text/GUI interface</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Technical Details</Subtitle>
        <Text>
          Built with Python and React, using GPT-Neo for AI, SQLite for world state,
          and WebSocket for real-time multiplayer interactions.
        </Text>
      </Section>

      <Section>
        <Subtitle>Impact</Subtitle>
        <Text>
          Creates immersive, AI-driven tabletop experiences that adapt to player choices,
          making D&D-style gaming more accessible while maintaining the depth of traditional gameplay.
        </Text>
      </Section>
    </ProjectWrapper>
  );
};

export default AIDungeonMaster; 