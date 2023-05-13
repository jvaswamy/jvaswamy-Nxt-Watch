import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
`

export const VideoItemDetailsContent = styled.div`
  width: 70%;
  flex-grow: 1;
  min-height: 100vh;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
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
export const VideoItemDescription = styled.p`
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
`

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
  color: ${props => (props.theme === true ? '#94a3b8' : '#7e858e')};
`
export const ItemViews = styled.p``
export const ItemTime = styled.p``

export const ItemLikeAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeButton = styled.button`
  color: ${probs => (probs.isLike === true ? '#2563eb' : '#64748b')};
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
  color: ${probs => (probs.isDisLike ? '#2563eb' : '#64748b')};
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
  color: ${probs => (probs.isSave ? '#2563eb' : '#64748b')};
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
  border: 0.5px solid ${props => (props.theme === true ? '#94a3b8' : '#ebebeb')};
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
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
`
export const SubCont = styled.p`
  margin-top: 0px;
  line-height: 30px;
  color: ${props => (props.theme === true ? '#94a3b8' : '#7e858e')};
`
export const Description = styled.p`
  align-self: flex-end;
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Description1 = styled.p`
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const FalureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 25px;
`
export const FailureImg = styled.img`
  width: 300px;
`
export const FailureTitle = styled.h1`
  font-size: 22px;
  color: ${props => (props.theme === true ? '#ffffff' : 'dark')};
`
export const FailureDescription = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 0px;
  color: ${props => (props.theme === true ? ' #94a3b8' : 'dark')};
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #00306e;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  width: 100px;
  cursor: pointer;
  outline: none;
`
