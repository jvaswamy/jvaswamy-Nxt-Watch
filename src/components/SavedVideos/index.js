import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SlideBar from '../SlideBar'
import SavedVideoCard from '../SavedVideoCard'
import ThemeContext from '../../context/ThemeContext'
import SaveItemContext from '../../context/SaveItemContext'
import {
  SavedVideosContainer,
  SavedVideosContent,
  NoSavedContentContainer,
  NoSavedImg,
  NoSavedTitle,
  NoSavedDescription,
  TrendingBanner,
  BannerLogoContainer,
  BannerHeading,
  SavedVideoList,
} from './styledComponet'

class SavedVideos extends Component {
  renderSavedVideosView = () => (
    <>
      <ThemeContext.Consumer>
        {value2 => {
          const {isDarkTheme} = value2
          return (
            <TrendingBanner theme={isDarkTheme} data-testid="banner">
              {/* banner section */}
              <BannerLogoContainer theme={isDarkTheme}>
                <HiFire size={35} color="#ff0000" />
              </BannerLogoContainer>
              <BannerHeading theme={isDarkTheme}>Saved Videos</BannerHeading>
            </TrendingBanner>
          )
        }}
      </ThemeContext.Consumer>
      <SaveItemContext.Consumer>
        {value3 => {
          const {saveVideoList} = value3
          return (
            <SavedVideoList>
              {saveVideoList.map(eachItem => (
                <SavedVideoCard
                  key={eachItem.id}
                  savedVideoDetails={eachItem}
                />
              ))}
            </SavedVideoList>
          )
        }}
      </SaveItemContext.Consumer>
    </>
  )

  renderNoItems = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const showImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
        return (
          <NoSavedContentContainer theme={isDarkTheme}>
            <NoSavedImg src={showImage} alt="no saved videos" />
            <NoSavedTitle theme={isDarkTheme}>
              No saved videos found
            </NoSavedTitle>
            <NoSavedDescription theme={isDarkTheme}>
              You can save your videos while watching them
            </NoSavedDescription>
          </NoSavedContentContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSavedVideos = () => (
    <SaveItemContext.Consumer>
      {value1 => {
        const {saveVideoList} = value1
        const savedVideoLength = saveVideoList.length > 0
        return savedVideoLength
          ? this.renderSavedVideosView()
          : this.renderNoItems()
      }}
    </SaveItemContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <SavedVideosContainer>
                <SlideBar />
                <SavedVideosContent
                  theme={isDarkTheme}
                  data-testid="savedVideos"
                >
                  {this.renderSavedVideos()}
                </SavedVideosContent>
              </SavedVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
