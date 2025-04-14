import styled from "styled-components";
import { useEffect } from "react";

const GlitchWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 1.25rem;
  line-height: 1.2;
  background-color: black;
  font-family: monospace;
  white-space: pre;
  z-index: 9999;
  overflow: hidden;
`;

const GlitchAscii = styled.pre`
  color: #00ff00;
  margin-bottom: 1rem;
`;

const Command = styled.div`
  color: #00ff00;
  margin-bottom: 1rem;
`;

const Output = styled.div`
  color: #00ff00;
  margin-bottom: 0.5rem;
`;

const Protocol = styled.div`
  color: #00ff00;
  font-weight: bold;
  margin: 1rem 0;
`;

const Info = styled.div`
  color: #00ff00;
  margin-bottom: 0.5rem;
`;

const Status = styled.div`
  color: #00ff00;
  margin: 1rem 0;
  line-height: 1.5;
  white-space: pre;
`;

const Prompt = styled.div`
  color: #00ff00;
  margin-top: 1rem;
`;

const Glitch: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GlitchWrapper data-testid="glitch">
      <GlitchAscii>
{`..######...##.......####.########..######..##.....##
.##....##..##........##.....##....##....##.##.....##
.##........##........##.....##....##.......##.....##
.##...####.##........##.....##....##.......#########
.##....##..##........##.....##....##....##.##.....##
.##....##..##........##.....##....##....##.##.....##
..######...########.####....##.....######..##.....##`}
      </GlitchAscii>

      <Command>{"sudo glitch --unlock"}</Command>

      <Output>{"Authenticating..."}</Output>
      <Output>{"Bypassing creative constraints..."}</Output>
      <Output>{"Decrypting core identity..."}</Output>

      <Protocol>{"G.L.I.T.C.H Protocol [ACTIVE]"}</Protocol>

      <Info>Graphical Layer for Interactive Terminals, Code, & Hardware</Info>
      <Info>JK's experimental ecosystem for building outside the stack.</Info>

      <Status>{`Status: Rogue
Mode: Tinkering
Aesthetic: Terminal-native / HUD-infused
Power Source: Curiosity, Raspberry Pi, and way too many ideas`}</Status>

      <Info>Welcome to the layer where systems think, screens breathe,</Info>
      <Info>and the prompt always listens.</Info>

      <Prompt>{">"}</Prompt>
    </GlitchWrapper>
  );
};

export default Glitch; 