import styled from "styled-components";

export const ProjectsIntro = styled.div`
  margin-bottom: 1rem;
`;

export const ProjectContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const ProjectTitle = styled.div`
  color: ${({ theme }) => theme.colors?.primary};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const ProjectDesc = styled.div`
  margin-bottom: 0.5rem;
`;

export const ProjectSection = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors?.text?.[300]};
  border-radius: 4px;
`;

export const ProjectSubtitle = styled.div`
  color: ${({ theme }) => theme.colors?.secondary};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const ProjectText = styled.div`
  margin-bottom: 0.5rem;
`;

export const ProjectList = styled.ul`
  list-style-type: none;
  margin: 0.5rem 0;
  padding: 0;
`;

export const ProjectListItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: ">";
    color: ${({ theme }) => theme.colors?.primary};
    position: absolute;
    left: 0;
  }
`;

export const ProjectTechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const ProjectTechItem = styled.div`
  background: ${({ theme }) => theme.colors?.text?.[300]};
  color: ${({ theme }) => theme.colors?.body};
  padding: 0.25rem;
  border-radius: 2px;
  text-align: center;
  font-size: 0.9rem;
`;
