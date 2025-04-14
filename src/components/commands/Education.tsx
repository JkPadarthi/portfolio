import styled from "styled-components";

const EducationContainer = styled.div`
  margin: 1rem 0;
`;

const EducationItem = styled.div`
  margin-bottom: 1.5rem;
`;

const School = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Degree = styled.div`
  margin: 0.25rem 0;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.colors.text[300]};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Education: React.FC = () => {
  return (
    <EducationContainer>
      <EducationItem>
        <School>Vellore Institute of Technology, Vellore</School>
        <Degree>B.Tech in CSE with specialization in AIML</Degree>
        <Date>Years: 2023 - 2027</Date>
      </EducationItem>

      <EducationItem>
        <School>Mathrusri Junior College, Hyderabad</School>
        <Degree>Intermediate Education</Degree>
        <Date>Years: 2021 - 2023</Date>
      </EducationItem>

      <EducationItem>
        <School>The Future Kids School</School>
        <Degree>Secondary Education</Degree>
        <Date>Year: 2021</Date>
      </EducationItem>
    </EducationContainer>
  );
};

export default Education;

