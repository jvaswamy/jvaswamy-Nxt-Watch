import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SlideBar from '../SlideBar'
import ThemeContext from '../../context/ThemeContext'
import SaveItemContext from '../../context/SaveItemContext'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsContent,
  LoaderContainer,
  VideoItemResponseContainer,
  VideoItemContentContainer,
  VideoItemDescription,
  VideoItemDetailsCart,
  ItemViewsDetailsContainer,
  ItemViews,
  ItemTime,
  ItemLikeAndSaveContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  Text,
  Line,
  ItemProfileContainer,
  ItemProfileImg,
  ItemProfileContentContainer,
  Name,
  SubCont,
  Description,
  Description1,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoDetails: {},
    isLike: false,
    isDisLike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const responseData = await response.json()
      const formatData = {
        name: responseData.video_details.channel.name,
        profileImageUrl: responseData.video_details.channel.profile_image_url,
        subscriberCount: responseData.video_details.channel.subscriber_count,
        description: responseData.video_details.description,
        id: responseData.video_details.id,
        publishedAt: responseData.video_details.published_at,
        thumbnailUrl: responseData.video_details.thumbnail_url,
        title: responseData.video_details.title,
        videoUrl: responseData.video_details.video_url,
        viewCount: responseData.video_details.view_count,
      }
      this.setState({
        apiStatus: apiStatusConstant.success,
        videoDetails: formatData,
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

  onLike = () => {
    this.setState(preState => ({isLike: !preState.isLike, isDisLike: false}))
  }

  onDisLike = () => {
    this.setState(preState => ({isDisLike: !preState.isDisLike, isLike: false}))
  }

  onClickSave = () => {
    this.setState(preState => ({isSave: !preState.isSave}))
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
              We are having some trouble to complete your request. Please try
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

  renderVideoItemView = () => {
    const {videoDetails, isLike, isDisLike} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
      description,
      id,
    } = videoDetails
    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtString = postedAt.split(' ')
    if (postedAtString.length === 3) {
      postedAtString.shift()
      postedAt = postedAtString.join(' ')
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideoItemResponseContainer>
              <ReactPlayer url={videoUrl} width="100%" controls />
              <VideoItemContentContainer>
                <VideoItemDescription theme={isDarkTheme}>
                  {title}
                </VideoItemDescription>
                <VideoItemDetailsCart>
                  <ItemViewsDetailsContainer theme={isDarkTheme}>
                    <ItemViews>{viewCount} views</ItemViews>
                    <BsDot />
                    <ItemTime>{postedAt} ago</ItemTime>
                  </ItemViewsDetailsContainer>
                  <ItemLikeAndSaveContainer>
                    <LikeButton
                      type="button"
                      onClick={this.onLike}
                      isLike={isLike}
                    >
                      <AiOutlineLike size={25} />
                      <Text>Like</Text>
                    </LikeButton>
                    <DisLikeButton
                      type="button"
                      onClick={this.onDisLike}
                      isDisLike={isDisLike}
                    >
                      <AiOutlineDislike size={25} />
                      <Text>DisLike</Text>
                    </DisLikeButton>
                    <SaveItemContext.Consumer>
                      {value1 => {
                        const {addVideoItem, saveVideoList, isSave} = value1
                        const findVideo = saveVideoList.find(
                          eachItem => eachItem.id === id,
                        )
                        const isActive = findVideo !== undefined
                        const showText = isSave === true ? 'Saved' : 'save'
                        return (
                          <SaveButton
                            type="button"
                            onClick={() => addVideoItem(videoDetails)}
                            isSave={isActive}
                          >
                            <BiListPlus size={25} />
                            <Text>{showText}</Text>
                          </SaveButton>
                        )
                      }}
                    </SaveItemContext.Consumer>
                  </ItemLikeAndSaveContainer>
                </VideoItemDetailsCart>
                <Line />
                <ItemProfileContainer>
                  <ItemProfileImg src={profileImageUrl} alt="channel logo" />
                  <ItemProfileContentContainer>
                    <Name theme={isDarkTheme}>{name}</Name>
                    <SubCont>{subscriberCount} subscribers</SubCont>
                    <Description theme={isDarkTheme}>{description}</Description>
                  </ItemProfileContentContainer>
                </ItemProfileContainer>
                <Description1 theme={isDarkTheme}>{description}</Description1>
              </VideoItemContentContainer>
            </VideoItemResponseContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderAllVideoItemDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.success:
        return this.renderVideoItemView()
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
              <VideoItemDetailsContainer>
                <SlideBar />
                <VideoItemDetailsContent
                  theme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderAllVideoItemDetails()}
                </VideoItemDetailsContent>
              </VideoItemDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
