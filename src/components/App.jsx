import React from 'react'
import AddressBarPanel from '../containers/AddressBarPanel'
import FolderTreePanel from '../containers/FolderTreePanel'
import PathListPanel from '../containers/PathListPanel'
/* アプリケーション画面の定義 */
const App = () => (
  <div>
    <AddressBarPanel />
    <hr/>
    <FolderTreePanel />
    <hr/>
    <PathListPanel />
  </div>
)
export default App
