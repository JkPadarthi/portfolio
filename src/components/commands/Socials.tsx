import { useContext } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import { termContext } from "../Terminal";
import styled from "styled-components";

const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Socials: React.FC = () => {
  const { arg } = useContext(termContext);

  return (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>
            <SocialLink href={url} target="_blank" rel="noopener noreferrer">
              {`${id}. ${title}`}
            </SocialLink>
          </Cmd>
          {Array(tab).fill("\u00A0").join("")}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/satnaing",
    tab: 3,
  },
  {
    id: 2,
    title: "Dev.to",
    url: "https://dev.to/satnaing",
    tab: 3,
  },
  {
    id: 3,
    title: "Facebook",
    url: "https://www.facebook.com/satnaing.dev",
    tab: 1,
  },
  {
    id: 4,
    title: "Instagram",
    url: "https://instagram.com/satnaing.dev",
    tab: 0,
  },
];

export default Socials;
