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
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(preState => ({isDarkTheme: !preState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exaxt
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
