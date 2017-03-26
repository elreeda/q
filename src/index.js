import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Route, Router, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'
import Home from './components/Home'
import App from './components/App'
import ViewSurah from './components/surah/index'


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/listen/:id" component={ViewSurah}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
