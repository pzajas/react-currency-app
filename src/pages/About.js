import styled from "styled-components"

const StyledParagraphContainer = styled.div``

const StyledParagraph = styled.p`
  overflow-wrap: anywhere;

  color: white;
  text-align: justify;
  text-justify: inter-word;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const About = () => {
  return (
    <StyledParagraphContainer>
      <StyledParagraph>
        This application is written in React.js. <br />
        To make it work a certain number of external librariers were used: <br />
        - react-axios <br />- react-router <br />- react-select <br />- styled-components <br />- font-awesome
      </StyledParagraph>
    </StyledParagraphContainer>
  )
}

export default About
