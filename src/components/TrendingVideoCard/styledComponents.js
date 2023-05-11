import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  margin-bottom: 18px;
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
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const VideoText = styled.p`
  margin: 0px;
  margin-right: 5px;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    // display: none;
  }
`
export const VideoText1 = styled.p``
export const VideoContentCart1 = styled.div`
  display: flex;
  align-items: flex-end;
`
