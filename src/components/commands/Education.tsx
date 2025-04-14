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

const Details = styled.div`
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.text[200]};
`;

const Education: React.FC = () => {
  return (
    <EducationContainer>
      <EducationItem>
        <School>Vellore Institute of Technology, Vellore</School>
        <Degree>Bachelor of Technology in Computer Science and Engineering</Degree>
        <Date>2021 - 2025</Date>
        <Details>
          • CGPA: 8.89/10
          <br />
          • Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering
          <br />
          • Active member of the Google Developer Student Clubs (GDSC)
          <br />
          • Participated in various hackathons and coding competitions
        </Details>
      </EducationItem>

      <EducationItem>
        <School>Narayana Junior College, Hyderabad</School>
        <Degree>Higher Secondary Education (Class XII)</Degree>
        <Date>2019 - 2021</Date>
        <Details>
          • Percentage: 97.6%
          <br />
          • Studied Mathematics, Physics, and Chemistry
          <br />
          • Achieved state rank in JEE Mains
        </Details>
      </EducationItem>

      <EducationItem>
        <School>Narayana High School, Hyderabad</School>
        <Degree>Secondary Education (Class X)</Degree>
        <Date>2018 - 2019</Date>
        <Details>
          • CGPA: 10/10
          <br />
          • Achieved perfect score in Mathematics and Science
        </Details>
      </EducationItem>
    </EducationContainer>
  );
};

export default Education;
