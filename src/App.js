import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import SaveItemContext from './context/SaveItemContext'
import NotFound from './components/NotFound'
import './App.css'

const activeItemConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  saveItemVideo: 'SAVEITEM',
}

class App extends Component {
  state = {
    isDarkTheme: false,
    saveVideoList: [],
    activeStatus: activeItemConstants.initial,
    isSave: false,
  }

  toggleTheme = () => {
    this.setState(preState => ({isDarkTheme: !preState.isDarkTheme}))
  }

  onChangeActive = status => {
    this.setState({activeStatus: status})
  }

  addVideoItem = videoItem => {
    const {saveVideoList} = this.state
    const findVideo = saveVideoList.find(
      eachItem => eachItem.id === videoItem.id,
    )
    this.setState(preState => ({isSave: !preState.isSave}))
    if (findVideo !== undefined) {
      const filterVideos = saveVideoList.filter(
        eachItem => eachItem.id !== videoItem.id,
      )
      this.setState({saveVideoList: filterVideos})
    } else {
      this.setState(preState => ({
        saveVideoList: [...preState.saveVideoList, videoItem],
      }))
    }
  }

  render() {
    const {isDarkTheme, saveVideoList, activeStatus, isSave} = this.state
    return (
      <SaveItemContext.Provider
        value={{
          saveVideoList,
          isSave,
          addVideoItem: this.addVideoItem,
        }}
      >
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            activeStatus,
            toggleTheme: this.toggleTheme,
            onChangeActive: this.onChangeActive,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exaxt
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </ThemeContext.Provider>
      </SaveItemContext.Provider>
    )
  }
}

export default App
