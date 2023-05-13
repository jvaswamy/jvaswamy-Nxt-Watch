// import {Component} from 'react'
import {Link} from 'react-router-dom'
import '../Home/index.css'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingVideoItem,
  GamingThumblai,
  GamingVideoContent,
  GamingTitle,
  GamingViews,
} from './styledComponents'

const GamingVideoCart = props => {
  const {gamingVideoDetails} = props
  const {thumbnailUrl, title, viewCount, id} = gamingVideoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingVideoItem>
            <Link to={`videos/${id}`} className="link-item">
              <GamingThumblai src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoContent>
                <GamingTitle theme={isDarkTheme}>{title}</GamingTitle>
                <GamingViews theme={isDarkTheme}>
                  {viewCount} Watching WorldWide
                </GamingViews>
              </GamingVideoContent>
            </Link>
          </GamingVideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCart
