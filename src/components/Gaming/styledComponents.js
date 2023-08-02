import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
`

export const GamingContent = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
  width: 70%;
  min-height: 100vh;
  flex-grow: 1;
`

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
// banner section
export const GamingBanner = styled.div`
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
export const GamingVideoList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
