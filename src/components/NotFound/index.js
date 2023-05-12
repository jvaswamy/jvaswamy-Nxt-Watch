import {
  NotFounndContainer,
  NotFoundContentContainer,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'
import Header from '../Header'
import SlideBar from '../SlideBar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const showImage =
        isDarkTheme === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFounndContainer>
            <SlideBar />
            <NotFoundContentContainer theme={isDarkTheme}>
              <NotFoundImg src={showImage} alt="not found" />
              <NotFoundTitle theme={isDarkTheme}>Page Not Found</NotFoundTitle>
              <NotFoundDescription theme={isDarkTheme}>
                We are sorry,the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContentContainer>
          </NotFounndContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
