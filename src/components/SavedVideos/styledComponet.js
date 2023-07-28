import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
`

// banner section
export const TrendingBanner = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.theme === true ? ' #212121' : '#f1f1f1')};
  padding: 9px 0px 9px 16px;
`
export const BannerLogoContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#181818' : '#e2e8f0')};
  padding: 16px;
  border-radius: 100%;
  margin-left: 18px;
`
export const BannerHeading = styled.h1`
  font-size: 32px;
  margin-left: 9px;
  color: ${props => (props.theme === true ? '#f1f1f1' : '#212121')};
`

export const SavedVideosContent = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
  width: 70%;
  min-height: 100vh;
  flex-grow: 1;
`
// No Saved Videos
export const NoSavedContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const NoSavedImg = styled.img`
  width: 300px;
`

export const NoSavedTitle = styled.h1`
  font-size: 22px;
  color: ${props => (props.theme === true ? '#ffffff' : 'dark')};
`

export const NoSavedDescription = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 0px;
  color: ${props => (props.theme === true ? ' #94a3b8' : 'dark')};
`

// Saved videos list

export const SavedVideoList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
