import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 5px;
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
`

export const VideoText = styled.p`
  margin: 0px;
  margin-right: 5px;
`
export const VideoContentCart1 = styled.div`
  display: flex;
  align-items: flex-end;
`
