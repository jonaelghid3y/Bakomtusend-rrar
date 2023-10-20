import styled from 'styled-components';


const TallyForm = ({ formURL }) => {
    return (
       
            <StyledIframe
                src={formURL}
                title="Tally Form"
                loading="lazy" 
            >
                Loading...
            </StyledIframe>
            
       
    );
};
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  marginheight: 0;
  marginwidth: 0;

  
  text-align: center;



 

`;


export default TallyForm;

