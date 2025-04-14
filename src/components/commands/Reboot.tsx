import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const RebootWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  line-height: 1.5;
`;

const RebootMessage = styled.div`
  animation: ${blink} 1s infinite;
`;

const Reboot: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RebootWrapper>
      <RebootMessage>Rebooting system...</RebootMessage>
      <div>Please wait while the system restarts.</div>
    </RebootWrapper>
  );
};

export default Reboot; 