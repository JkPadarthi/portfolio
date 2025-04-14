import { useEffect } from "react";
import styled from "styled-components";

const ResumeWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
`;

const Resume: React.FC = () => {
  useEffect(() => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf.pdf'; // Updated path to match the actual file name
    link.download = 'Jaswanth_Krishna_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <ResumeWrapper data-testid="resume">
      <p>Downloading your resume...</p>
    </ResumeWrapper>
  );
};

export default Resume; 