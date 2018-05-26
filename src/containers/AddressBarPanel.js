import React from 'react'
import { connect } from 'react-redux'
import { openButtonClickEvent } from '../actions'

const inputStyle = {"width":"300px"}
/* アドレスバーの画面とイベント発行 
   dispatch後、reducers(folderTreeItem)が呼び出される。*/
const AddressBar = ({ dispatch }) => {
  let folderPath
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!folderPath.value.trim()) {
          return
        }
        console.log('==> イベント発行(コンテナ) openButtonClickEvent rootPath=' + folderPath.value)
        dispatch(openButtonClickEvent(folderPath.value))
       }}>
        <input style={inputStyle} ref={node => {
          folderPath = node
        }} />
        <button type="submit">
          開く
        </button>
      </form>
    </div>
  )
}
/* フォルダツリーアイテムの状態の切り出し */
const mapStateToPorps = (state) => {
  return {
    folderTreeItem : state.folderTreeItem, 
  }
}
/* フォルダツリーアイテムの状態と画面(コンテナ)の接続(connect呼び出し) */
const AddressBarPanel = connect(
  mapStateToPorps
)(AddressBar)

export default AddressBarPanel
