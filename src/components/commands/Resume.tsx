import { useEffect, useState } from "react";
import styled from "styled-components";

const ResumeWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
  color: #50fa7b;
  margin-top: 0.5rem;
`;

const Resume: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  useEffect(() => {
    const downloadResume = async () => {
      if (isDownloading || hasDownloaded) return;
      
      setIsDownloading(true);
      try {
        // Create a link element
        const link = document.createElement('a');
        link.href = '/portfolio/resume.pdf';
        link.download = 'Jaswanth_Krishna_Resume.pdf';
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setHasDownloaded(true);
      } catch (err) {
        setError('Failed to download resume. Please try again or contact support.');
        console.error('Resume download error:', err);
      } finally {
        setIsDownloading(false);
      }
    };

    downloadResume();
  }, [isDownloading, hasDownloaded]);

  return (
    <ResumeWrapper data-testid="resume">
      {!hasDownloaded && !error && <p>Downloading your resume...</p>}
      {hasDownloaded && <SuccessMessage>Resume downloaded successfully!</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </ResumeWrapper>
  );
};

export default Resume; 