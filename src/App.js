import MainPage from './components/mainPage/mainPage';
import SelectionPage from './components/SelectionPage/SelectionPage';
import SplashScreen from './components/splashScreen/splashScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  setTimeout(function () {
    document.getElementById("SA").style.display = "none";
    if (document.getElementById("hints"))
      document.getElementById("hints").style.display = "flex";
  }, 2600)
  return <>
    <Router>
      <SplashScreen></SplashScreen>
      <Route path='/type/:name' exact><MainPage /></Route>
      <Route path='/' exact><SelectionPage /></Route>
    </Router>
  </>


}
