import styled from 'styled-components';
const StyledDiv = styled.div`
  margin: auto;
  margin-top: 50px;
  width: ${props => (props.expand ? '90%' : '50%')};
  height: 300px;
  overflow: ${props => (props.hideOverflow ? 'hidden' : 'visible')};
`;
export default StyledDiv;
