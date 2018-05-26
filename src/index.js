import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import explorerApp from './reducers'
/* 状態遷移(reducers)をstoreとして取得 */
const store = createStore(explorerApp)
/* アプリケーションをstoreを指定して描画 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
