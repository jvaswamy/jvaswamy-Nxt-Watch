import styled from 'styled-components'

export const NotFounndContainer = styled.div`
  display: flex;
`

export const NotFoundContentContainer = styled.div`
  width: 70%;

  padding-top: 18px;
  flex-grow: 1;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`
export const NotFoundImg = styled.img`
  width: 300px;
`

export const NotFoundTitle = styled.h1`
  font-size: 22px;
  color: ${props => (props.theme === true ? '#ffffff' : 'dark')};
`

export const NotFoundDescription = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 0px;
  color: ${props => (props.theme === true ? ' #94a3b8' : 'dark')};
`
