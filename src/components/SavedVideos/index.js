import {Component} from 'react'
import Header from '../Header'
import SlideBar from '../SlideBar'
import ThemeContext from '../../context/ThemeContext'
// import SaveItemContext from "../../context/SaveItemContext"
import {SavedVideosContainer, SavedVideosContent} from './styledComponet'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
console.log(apiStatusConstant)
class SavedVideos extends Component {
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
                  SavedVideos
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
