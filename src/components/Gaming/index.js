import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import GamingVideoCart from '../GamingVideoCart'
import Header from '../Header'
import SlideBar from '../SlideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingContainer,
  GamingContent,
  LoaderContainer,
  GamingBanner,
  BannerLogoContainer,
  BannerHeading,
  GamingVideoList,
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

class Gaming extends Component {
  state = {apiStatus: apiStatusConstant.initial, gameVideoList: []}

  componentDidMount() {
    this.getAllGameVideos()
  }

  onRetry = () => {
    this.getAllGameVideos()
  }

  getAllGameVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gameVideoList: updatedData,
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

  renderGamingView = () => {
    const {gameVideoList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <GamingBanner theme={isDarkTheme} data-testid="banner">
                <BannerLogoContainer theme={isDarkTheme}>
                  <SiYoutubegaming size={35} color="#ff0000" />
                </BannerLogoContainer>
                <BannerHeading theme={isDarkTheme}>Gaming</BannerHeading>
              </GamingBanner>
              <GamingVideoList>
                {gameVideoList.map(eachItem => (
                  <GamingVideoCart
                    gamingVideoDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </GamingVideoList>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderAllGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.success:
        return this.renderGamingView()
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
              <GamingContainer>
                <SlideBar />
                <GamingContent theme={isDarkTheme} data-testid="gaming">
                  {this.renderAllGamingVideos()}
                </GamingContent>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
