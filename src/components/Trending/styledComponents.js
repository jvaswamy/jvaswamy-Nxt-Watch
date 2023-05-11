import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
`

export const TrendingContent = styled.div`
  background-color: lightblue;
  width: 70%;
  min-height: 100vh;
  flex-grow: 1;
`
export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
// banner section
export const TrendingBanner = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 9px 0px 9px 16px;
`
export const BannerLogoContainer = styled.div`
  background-color: #e2e8f0;
  padding: 16px;
  border-radius: 100%;
  margin-left: 18px;
`
export const BannerHeading = styled.h1`
  font-size: 32px;
  margin-left: 9px;
`

// Trending videos list

export const TrendingVideoList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  background-color: #f8fafc;
  margin-top: 0px;
  height: 100%;
  background-color: gray;
  display: flex;
  flex-wrap: wrap;
  //   justify-content: center;
`
