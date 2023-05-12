import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import '../Home/index.css'
import {
  VideoItem,
  VideothumbnailImg,
  VideoContentContainer,
  VideoProfileImg,
  VideoContentCart,
  VideoContentCart1,
  VideoTitle,
  VideoText,
} from './styledComponents'

const HomeVideoCard = probs => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videosDetails} = probs
      const {
        thumbnailUrl,
        profileImageUrl,
        title,
        name,
        viewCount,
        publishedAt,
        id,
      } = videosDetails
      let postedAt = formatDistanceToNow(new Date(publishedAt))
      const postedAtString = postedAt.split(' ')
      if (postedAtString.length === 3) {
        postedAtString.shift()
        postedAt = postedAtString.join(' ')
      }

      return (
        <VideoItem>
          <Link to={`videos/${id}`} className="link-item">
            <VideothumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <VideoContentContainer>
              <VideoProfileImg src={profileImageUrl} alt="channel logo" />
              <VideoContentCart>
                <VideoTitle theme={isDarkTheme}>{title}</VideoTitle>
                <VideoText theme={isDarkTheme}>{name}</VideoText>
                <VideoContentCart1 theme={isDarkTheme}>
                  <VideoText>{viewCount} Views</VideoText>
                  <BsDot />
                  <VideoText>{postedAt} ago</VideoText>
                </VideoContentCart1>
              </VideoContentCart>
            </VideoContentContainer>
          </Link>
        </VideoItem>
      )
    }}
  </ThemeContext.Consumer>
)
export default HomeVideoCard
