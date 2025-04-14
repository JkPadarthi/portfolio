import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const BootWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 1.25rem;
  line-height: 1.2;
  background-color: ${({ theme }) => theme.colors?.body};
  font-family: monospace;
  white-space: pre;
  z-index: 9999;
  overflow: hidden;
`;

const BootMessage = styled.div`
  color: ${({ theme }) => theme.colors?.primary};
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

interface BootSequenceProps {
  onComplete?: () => void;
  messages?: string[];
}

const defaultMessages = [
  "> Connecting to port@jk...",
  "> Spooling memory nodes...",
  "> Syncing build history...",
  "> Initiating Glitch Protocol...",
  "> Reconstructing persona layer...",
  "> Dream Engine online."
];

const BootSequence: React.FC<BootSequenceProps> = ({ 
  onComplete, 
  messages = defaultMessages 
}) => {
  const [bootMessages, setBootMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (currentMessage < messages.length) {
      const timer = setTimeout(() => {
        setBootMessages(prev => [...prev, messages[currentMessage]]);
        setCurrentMessage(prev => prev + 1);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentMessage, messages.length, onComplete]);

  return (
    <BootWrapper data-testid="boot-sequence">
      {bootMessages.map((message, index) => (
        <BootMessage key={index} style={{ animationDelay: `${index * 0.5}s` }}>
          {message}
        </BootMessage>
      ))}
    </BootWrapper>
  );
};

export default BootSequence; 