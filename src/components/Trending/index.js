import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import TrendingVideoCard from '../TrendingVideoCard'
import Header from '../Header'
import SlideBar from '../SlideBar'

import {
  TrendingContainer,
  TrendingContent,
  LoaderContainer,
  TrendingBanner,
  BannerLogoContainer,
  BannerHeading,
  TrendingVideoList,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstant.initial, TrendingvideoList: []}

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const responseData = await response.json()
      const updatedData = responseData.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        TrendingvideoList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingView = () => {
    const {TrendingvideoList} = this.state

    return (
      <>
        <TrendingBanner>
          <BannerLogoContainer>
            <HiFire size={35} color="#ff0000" />
          </BannerLogoContainer>
          <BannerHeading>Trending</BannerHeading>
        </TrendingBanner>
        <TrendingVideoList>
          {TrendingvideoList.map(eachItem => (
            <TrendingVideoCard
              key={eachItem.id}
              trendingVideoDetails={eachItem}
            />
          ))}
        </TrendingVideoList>
      </>
    )
  }

  renderAllTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.success:
        return this.renderTrendingView()
      case apiStatusConstant.failure:
        return <h1>failure</h1>
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingContainer>
          <SlideBar />
          <TrendingContent>{this.renderAllTrendingVideos()}</TrendingContent>
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
