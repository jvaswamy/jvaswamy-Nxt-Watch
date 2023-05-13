import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
`

export const SavedVideosContent = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
  width: 70%;
  min-height: 100vh;
  flex-grow: 1;
`
