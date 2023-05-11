import {Component} from 'react'
import Header from '../Header'
import SlideBar from '../SlideBar'
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
      <>
        <Header />
        <SavedVideosContainer>
          <SlideBar />
          <SavedVideosContent>SavedVideos</SavedVideosContent>
        </SavedVideosContainer>
      </>
    )
  }
}

export default SavedVideos
