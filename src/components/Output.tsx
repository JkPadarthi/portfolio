import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import GeneralOutput from "./commands/GeneralOutput";
import Glitch from "./commands/Glitch";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Reboot from "./commands/Reboot";
import Resume from "./commands/Resume";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Whoami from "./commands/Whoami";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);
  const special = ["clear", "echo", "gui", "reboot", "resume", "glitch"];
  const commandsWithArgs = ["projects", "socials", "themes"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!special.includes(cmd) && !commandsWithArgs.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  if (special.includes(cmd)) {
    switch (cmd) {
      case "clear":
        return <Clear />;
      case "echo":
        return <Echo />;
      case "gui":
        return <Gui />;
      case "reboot":
        return <Reboot />;
      case "resume":
        return <Resume />;
      case "glitch":
        return <Glitch />;
      default:
        return null;
    }
  }

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          education: <Education />,
          glitch: <Glitch />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <Whoami />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
