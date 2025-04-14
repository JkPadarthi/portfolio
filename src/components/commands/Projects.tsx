import { useContext, useState } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import { ProjectContainer, ProjectTitle, ProjectDesc } from "../styles/Projects.styled";
import MindMirror from "../projects/MindMirror";
import AIDungeonMaster from "../projects/AIDungeonMaster";
import ChronoSolus from "../projects/ChronoSolus";
import PiHole from "../projects/PiHole";
import KuroTechDashboard from "../projects/KuroTechDashboard";
import VoskPipeline from "../projects/VoskPipeline";
import SdrExperiments from "../projects/SdrExperiments";
import styled from "styled-components";

const ProjectLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BackLink = styled.div`
  margin-top: 2rem;
  text-align: left;
  
  a {
    color: #00ff9c;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const UsageMessage = styled.div`
  margin: 1rem 0;
  color: #ff6b6b;
  font-family: monospace;
`;

const projects = [
  {
    id: 1,
    title: "The Mind Mirror",
    desc: "A Raspberry Pi-powered digital reflection dashboard for tracking habits, moods, and mental well-being.",
    component: MindMirror
  },
  {
    id: 2,
    title: "AI Dungeon Master",
    desc: "A fully offline, D&D-style AI-powered game system using GPT-Neo/GPT-J. Supports procedural worldgen, dynamic NPCs, branching story arcs, and LAN-based multiplayer with a text+GUI tabletop.",
    component: AIDungeonMaster
  },
  {
    id: 3,
    title: "ChronoSolus Pomodoro",
    desc: "A darkly themed Pomodoro timer set in the ChronoSolus universe, syncing with your time, mood, and burnout. Part focus tool, part immersive productivity companion.",
    component: ChronoSolus
  },
  {
    id: 4,
    title: "Pi-Hole Ad Blocker",
    desc: "Network-wide ad blocking built on Raspberry Pi 3B+. Clean, efficient, and a must-have for reclaiming browsing sanity.",
    component: PiHole
  },
  {
    id: 5,
    title: "Flask x KuroTech Dashboard",
    desc: "A sci-fi inspired dashboard with system stats (for both Pi and Vivobook), particle backgrounds, and live AJAX updates. Designed with a Wuthering Waves x KuroTech aesthetic.",
    component: KuroTechDashboard
  },
  {
    id: 6,
    title: "Offline Vosk Voice Recognition Pipeline",
    desc: "Speech-to-text system converting Telugu to English using Vosk, then routing queries to a local LLM (Gemma 2). Fully offline voice interface experiment.",
    component: VoskPipeline
  },
  {
    id: 7,
    title: "SDR + FM Radio Experiments",
    desc: "Tuned into signals with Software-Defined Radio. From static chaos to decoding frequencies like a spy in the matrix.",
    component: SdrExperiments
  }
];

const Projects: React.FC = () => {
  const { arg } = useContext(termContext);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  // Show usage message if command is invalid
  if (arg.length > 0 && (arg[0] !== "go" || arg.length !== 2 || isNaN(parseInt(arg[1])))) {
    return (
      <UsageMessage>
        Usage: projects go &lt;project-no&gt;
        <br />
        eg: projects go 4
      </UsageMessage>
    );
  }
  
  // Check if we're navigating to a specific project via command
  if (arg.length === 2 && arg[0] === "go") {
    const projectId = parseInt(arg[1]);
    if (!isNaN(projectId) && projectId >= 1 && projectId <= projects.length) {
      const project = projects.find(p => p.id === projectId);
      if (project?.component) {
        const ProjectComponent = project.component;
        return (
          <>
            <ProjectComponent />
            <BackLink>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setSelectedProject(null);
              }}>
                ← Back to projects
              </a>
            </BackLink>
          </>
        );
      }
    }
  }

  // If a project is selected via click, show that project
  if (selectedProject !== null) {
    const project = projects.find(p => p.id === selectedProject);
    if (project?.component) {
      const ProjectComponent = project.component;
      return (
        <>
          <ProjectComponent />
          <BackLink>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setSelectedProject(null);
            }}>
              ← Back to projects
            </a>
          </BackLink>
        </>
      );
    }
  }

  // Show project list if no specific project is selected
  return (
    <div data-testid="projects">
      <ProjectsIntro>
        Talk is cheap. Show me the code? I got you.
        <br />
        Here are some of my projects you shouldn't miss:
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>
            <ProjectLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedProject(id);
              }}
            >
              {id}. {title}
            </ProjectLink>
          </ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <UsageMessage>
        Usage: Click on a project name to see more details
      </UsageMessage>
    </div>
  );
};

export default Projects; 