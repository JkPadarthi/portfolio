import styled from "styled-components";

const WhoamiWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
`;

const Name = styled.span`
  color: #00ff9c;
`;

const Role = styled.span`
  color: #ffa500;
`;

const Section = styled.div`
  margin-top: 1rem;
  color: #00ff9c;
`;

const CategoryTitle = styled.div`
  color: #ffa500;
  margin-top: 1rem;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Skill = styled.span`
  border: 1px solid #00ff9c;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  color: inherit;
  background: transparent;
`;

const Whoami: React.FC = () => {
  return (
    <WhoamiWrapper data-testid="whoami">
      <p>
        Hi, my name is <Name>Jaswanth Krishna Padarthi</Name>!
      </p>
      <p>
        I'm <Role>Experimental Developer</Role>.
      </p>
      <p>
        Not full-stack. Not frontend. Not backend.<br />
        Just a builder who would rather break lanes than pick one.
      </p>

      <Section>Skills</Section>
      
      <CategoryTitle>Programming</CategoryTitle>
      <SkillContainer>
        <Skill>Python</Skill>
        <Skill>JavaScript</Skill>
        <Skill>C++</Skill>
        <Skill>Java</Skill>
        <Skill>Flask</Skill>
        <Skill>React</Skill>
        <Skill>HTML/CSS</Skill>
      </SkillContainer>

      <CategoryTitle>AI/ML</CategoryTitle>
      <SkillContainer>
        <Skill>Vosk</Skill>
        <Skill>GPT-J/Neo</Skill>
        <Skill>Local LLMs</Skill>
        <Skill>TTS (Festival, Coqui)</Skill>
      </SkillContainer>

      <CategoryTitle>Systems</CategoryTitle>
      <SkillContainer>
        <Skill>Raspberry Pi</Skill>
        <Skill>Linux</Skill>
        <Skill>Shell scripting</Skill>
      </SkillContainer>

      <CategoryTitle>Web</CategoryTitle>
      <SkillContainer>
        <Skill>AJAX</Skill>
        <Skill>API Integration</Skill>
        <Skill>Responsive Design</Skill>
      </SkillContainer>

      <CategoryTitle>Creative</CategoryTitle>
      <SkillContainer>
        <Skill>Game Design</Skill>
        <Skill>Procedural Storytelling</Skill>
        <Skill>UI/UX Vibes</Skill>
      </SkillContainer>
    </WhoamiWrapper>
  );
};

export default Whoami; 