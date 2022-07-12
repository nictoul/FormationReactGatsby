import styled from "styled-components"
export const StyledSubscribe = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 2rem;
  color: #4C4C78;
  padding: 1.25rem;
`
export const SubscribeRow = styled.div`
  margin-bottom: 1.5rem;
  width: 80%;
  display: flex;
  flex-flow: row wrap;
&:last-of-type {
    margin-bottom: 2rem;
  }
`
export const SubscribeField = styled.input`
  border: 2px solid transparent;
  border-radius: 2rem;
  flex-grow: 1;
  background: #FFFFFF;
  color: #4C4C78;
  padding: 1rem 2rem;
  font-size: 14px;
  margin-right: 0.75rem;
  margin-top: 0.75rem;
&::placeholder {
  }
&:hover {
    border: 2px solid #e32248;
  }
&:focus {
    color: #e32248;
    border: 2px solid #e32248;
    outline: none;
  }
`
export const StyledFieldsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
a {
    margin-top: 0;
    margin-right: 2rem;
  }
`;
export const SubscribeLabel = styled.label`
  color: #4C4C78;
  font-size: 14px;
`
export const SubscribeButton = styled.button`
  text-decoration: none;
  flex-grow: 1;
  font: inherit;
  font-weight: 600;
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin-top: 0.75rem;
  margin-right: 0.75rem;
  transition: all .3s cubic-bezier(0,.89,.44,1);  
`
export const StyledSubscribeButton = styled(SubscribeButton)`
  border: none;
  background: linear-gradient(
    to right,
    #e32248,
    #A31149);
  color: #FFFFFF;
&:hover {
    background: #FFFFFF;
    box-shadow: 0 9px 21px 0 #FFE1EC;
    -moz-box-shadow: 0 9px 21px 0 #FFE1EC;
    -webkit-box-shadow: 0 9px 21px 0 #FFE1EC;
    -webkit-text-fill-color: #e32248;
    cursor: pointer;
`
export const SubscribeFieldsContainer = styled(StyledSubscribeButton)`
  width: 100%;
`;