import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import TrendingVideoCard from '../TrendingVideoCard'
import Header from '../Header'
import SlideBar from '../SlideBar'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingContainer,
  TrendingContent,
  LoaderContainer,
  TrendingBanner,
  BannerLogoContainer,
  BannerHeading,
  TrendingVideoList,
  FailureImg,
  FalureViewContainer,
  FailureTitle,
  FailureDescription,
  RetryButton,
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

  onRetry = () => {
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
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#00306e' : '#0f0f0f'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const showImage =
          isDarkTheme === true
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FalureViewContainer>
            <FailureImg src={showImage} alt="failure view" />
            <FailureTitle theme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureTitle>
            <FailureDescription theme={isDarkTheme}>
              We are having some trouble to complete your request.Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </FalureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingView = () => {
    const {TrendingvideoList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <TrendingBanner theme={isDarkTheme} data-testid="banner">
                {/* banner section */}
                <BannerLogoContainer theme={isDarkTheme}>
                  <HiFire size={35} color="#ff0000" />
                </BannerLogoContainer>
                <BannerHeading theme={isDarkTheme}>Trending</BannerHeading>
              </TrendingBanner>

              {/* banner section */}
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
        }}
      </ThemeContext.Consumer>
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
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <TrendingContainer>
                <SlideBar />
                <TrendingContent theme={isDarkTheme} data-testid="trending">
                  {this.renderAllTrendingVideos()}
                </TrendingContent>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
