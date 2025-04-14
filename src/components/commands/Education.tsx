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
        <Degree>Bachelor of Technology in Computer Science and Engineering (AIML)</Degree>
        <Date>2023 - 2027</Date>
        <Details>
          • Currently pursuing B.Tech in CSE with specialization in Artificial Intelligence and Machine Learning
          <br />
          • Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Machine Learning, Deep Learning
          <br />
          • Active member of the Google Developer Student Clubs (GDSC)
          <br />
          • Participated in various hackathons and coding competitions
        </Details>
      </EducationItem>

      <EducationItem>
        <School>Mathrusri Junior College, Hyderabad</School>
        <Degree>Intermediate Education</Degree>
        <Date>2021 - 2023</Date>
        <Details>
          • Studied Mathematics, Physics, and Chemistry
          <br />
          • Achieved excellent academic performance
          <br />
          • Participated in various academic competitions
        </Details>
      </EducationItem>

      <EducationItem>
        <School>The Future Kids School</School>
        <Degree>Secondary Education</Degree>
        <Date>2021</Date>
        <Details>
          • Completed secondary education with distinction
          <br />
          • Active participation in extracurricular activities
        </Details>
      </EducationItem>
    </EducationContainer>
  );
};

export default Education;

