import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import HomeVideoCard from '../HomeVideoCard'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SlideBar from '../SlideBar'

import {
  HomeContainer,
  HomeContent,
  LoaderContainer,
  SearchInputContainer,
  SearchInput,
  SearchBtn,
  VideoList,
  HomeContentContainer,
  NoSearchResultContainer,
  NoSearchImg,
  NoSearchTitle,
  NoSearchDescription,
  RetryButton,
  BannerSection,
  BannerContentContainer,
  BannerImg,
  BannerDescription,
  BannerBtn,
  BannerCloseBtn,
  FailureImg,
  FalureViewContainer,
  FailureTitle,
  FailureDescription,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
console.log(apiStatusConstant)
class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstant.initial,
    searchInput: '',
    isShowBanner: true,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  onSeachInpupt = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getAllVideos()
  }

  onRetry = () => {
    this.getAllVideos()
  }

  onClickClose = () => {
    this.setState({isShowBanner: false})
  }

  getAllVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = ` https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

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

  renderVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosList} = this.state
        const shouldShowVideosView = videosList.length > 0
        return shouldShowVideosView ? (
          <VideoList>
            {videosList.map(eachItem => (
              <HomeVideoCard key={eachItem.id} videosDetails={eachItem} />
            ))}
          </VideoList>
        ) : (
          <NoSearchResultContainer>
            <NoSearchImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchTitle theme={isDarkTheme}>
              No Search results found
            </NoSearchTitle>
            <NoSearchDescription theme={isDarkTheme}>
              Try different key words or remove search filter
            </NoSearchDescription>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </NoSearchResultContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.success:
        return this.renderVideosView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, isShowBanner} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeContainer data-testid="home">
                <SlideBar />
                <HomeContentContainer theme={isDarkTheme}>
                  {isShowBanner && (
                    <BannerSection data-testid="banner">
                      <BannerContentContainer>
                        <BannerImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                        />
                        <BannerDescription>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerDescription>
                        <BannerBtn type="button">GET IT NOW</BannerBtn>
                      </BannerContentContainer>
                      <BannerCloseBtn
                        type="button"
                        onClick={this.onClickClose}
                        data-testid="close"
                      >
                        <AiOutlineClose size={16} />
                      </BannerCloseBtn>
                    </BannerSection>
                  )}

                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onSeachInpupt}
                      theme={isDarkTheme}
                    />
                    <SearchBtn
                      type="button"
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                    >
                      <BiSearch size="20" color="#f9f9f9" />
                    </SearchBtn>
                  </SearchInputContainer>
                  <HomeContent>{this.renderAllVideos()}</HomeContent>
                </HomeContentContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
