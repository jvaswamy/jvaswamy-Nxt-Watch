import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f0f5f1')};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 500px;
    flex-shrink: 0;

    padding: 64px 48px 64px 48px;
  }
`
export const WebsiteImage = styled.img`
  width: 185px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.outline ? '#ffffff' : '#475569')};
`
export const UsernameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid ${props => (props.outline ? '#1e293b' : '#d7dfe9')};
  background-color: ${props => (props.outline ? 'transparent' : '#e2e8f0')};
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 12px;
`
export const CheckBox = styled.input`
  margin: 0px;
  margin-right: 8px;
  height: 15px;
  width: 15px;
`
export const CheckBoxText = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.outline ? '#ffffff' : '#000000')};
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorMgs = styled.p`
  align-self: flex-start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
