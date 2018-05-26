import { connect } from 'react-redux'
import { folderTreeItemClickEvent, toggleExpandClickEvent } from '../actions'
import FolderTreeItem from '../components/FolderTreeItem'
/* フォルダツリーのアイテムの状態の切り出し */
const mapStateToProps = (state) => ({
  folderTreeItem: state.folderTreeItem,
})
/* イベントハンドラ関数とイベント(action)のマッピング
   dispatch後、reducers(folderTreeItem)が呼び出される。*/
const mapDispatchToProps = (dispatch) => ({
   onFolderClick: (fullpath) => {
     console.log('==> イベント発行(コンテナ) folderTreeItemClickEvent fullpath=' + fullpath)
     dispatch(folderTreeItemClickEvent(fullpath))
   },
   onExpandClick: (fullpath, isExpanded) => {
     console.log('==> イベント発行(コンテナ) toggleExpandClickEvent fullpath=' + fullpath)
     dispatch(toggleExpandClickEvent(fullpath, isExpanded))
   },
})
/* フォルダアイテムの状態＋イベントマッピングと画面(コンテナ)の接続(connect呼び出し) */
const FolderTreePanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderTreeItem)

export default FolderTreePanel
