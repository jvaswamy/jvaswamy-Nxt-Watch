import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 16px;
  }
  padding-left: 0px;
  list-style-type: none;
`
export const VideothumbnailImg = styled.img`
  width: 100%;
  border-radius: 5px;
`
export const VideoContentContainer = styled.div`
  display: flex;
  margin-top: 9px;
  @media screen and (max-width: 767px) {
    padding: 18px;
    margin-top: 0px;
  }
`
export const VideoProfileImg = styled.img`
  width: 50px;
  height: 50px;
`

export const VideoContentCart = styled.div`
  margin-left: 9px;
`
export const VideoTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 3px;
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
`

export const VideoText = styled.p`
  margin: 0px;
  margin-right: 5px;
  color: ${props => (props.theme === true ? '#94a3b8' : '#7e858e')};
`
export const VideoContentCart1 = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${props => (props.theme === true ? '#94a3b8' : '#7e858e')};
`
