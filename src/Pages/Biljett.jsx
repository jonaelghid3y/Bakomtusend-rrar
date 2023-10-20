import styled from 'styled-components';
import TallyForm from '../components/TallyForm';

export default function Biljett() {
    const formURL = "https://tally.so/r/woRkzP?transparentBackground=1";
  return (
    <StyledDiv>
      <TallyForm formURL={formURL}/>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media (max-width: 768px) {
 
  justify-content: flex-start;
  height: 100vh;
  
  }

`;