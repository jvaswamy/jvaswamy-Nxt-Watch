import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`

export const HomeContent = styled.div``
// modifying
export const HomeContentContainer = styled.div`
  width: 70%;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    // padding: 20px;
  }
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
// banner section
export const BannerSection = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
export const BannerContentContainer = styled.div``
export const BannerImg = styled.img`
  width: 150px;
`
export const BannerDescription = styled.p`
  font-size: 24px;
`
export const BannerBtn = styled.button`
  font-size: 16px;
  padding: 12px;
  border: 1px solid #606060;
  background-color: transparent;
`
export const BannerCloseBtn = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #909090;
  width: 70%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
  margin: 16px;
`
export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  padding: 5px 12px 5px 12px;
  font-size: 18px;
  color: #616e7c;
  outline: none;
  background-color: ${props => (props.theme === true ? '#181818' : '#ffffff')};
`
export const SearchBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  height: 40px;
  width: 80px;
  border-left: 1px solid #909090;
  background-color: #909090;
`
export const VideoList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
// no search results
export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`
export const NoSearchImg = styled.img`
  width: 300px;
`
export const NoSearchTitle = styled.h1`
  font-size: 22px;
  color: ${props => (props.theme === true ? '#ffffff' : 'dark')};
`
export const NoSearchDescription = styled.p`
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
// failure View container

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
