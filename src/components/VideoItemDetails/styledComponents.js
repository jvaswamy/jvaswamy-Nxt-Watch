import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
`

export const VideoItemDetailsContent = styled.div`
  background-color: gray;

  width: 70%;
  flex-grow: 1;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`
export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideoItemResponseContainer = styled.div``

export const VideoItemContentContainer = styled.div`
  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`
export const VideoItemDescription = styled.p``

export const VideoItemDetailsCart = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ItemViewsDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ItemViews = styled.p``
export const ItemTime = styled.p``

export const ItemLikeAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeButton = styled.button`
  color: ${probs => (probs.isLike === true ? 'blue' : 'black')};
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0px;
`
export const DisLikeButton = styled.button`
  display: flex;
  color: ${probs => (probs.isDisLike ? 'Blue' : 'black')};
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0px;
`
export const SaveButton = styled.button`
  display: flex;

  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0px;
`
export const Text = styled.p`
  font-size: 16px;
  margin: 0px;
  margin-left: 5px;
`
export const Line = styled.hr`
  border: 1px solid white;
  margin-top: 20px;
  margin-bottom: 26px;
`
export const ItemProfileContainer = styled.div`
  display: flex;
`
export const ItemProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const ItemProfileContentContainer = styled.div`
  margin-top: 0px;
  margin-left: 12px;
`
export const Name = styled.p`
  margin: 0px;
`
export const SubCont = styled.p`
  margin-top: 0px;
  line-height: 30px;
`
export const Description = styled.p`
  align-self: flex-end;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Description1 = styled.p`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
