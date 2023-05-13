import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  //   background-color: yellow

  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 18px;
    width: 90%;
    margin: 18px;
  }
  padding-left: 0px;
  list-style-type: none;
`
export const VideothumbnailImg = styled.img`
  width: 100%;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const VideoContentContainer = styled.div`
  display: flex;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`
export const VideoProfileImg = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoContentCart = styled.div`
  margin-left: 9px;
`
export const VideoTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 3px;
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const VideoText = styled.p`
  margin: 0px;
  margin-right: 5px;
  display: flex;
  align-items: flex-end;
`
export const VideoText1 = styled.p``
export const VideoContentCart1 = styled.div`
  display: flex;
  color: ${props => (props.theme === true ? '#94a3b8' : '#7e858e')};
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const VideoContent2 = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${props => (props.theme === true ? '#94a3b8' : '#7e858e')};
`
export const DotContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
