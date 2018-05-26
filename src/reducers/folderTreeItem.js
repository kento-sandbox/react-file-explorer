import {EXPAND_ROOT, TOGGLE_EXPAND} from '../actions'
/* フォルダアイテムの初期値 */
const initialState = {
  name:'アドレスバーにフォルダパスを貼り付けて「開く」を押してください', 
  fullpath:'', 
  children:[],
  isExpanded: false,
}
/* フォルダアイテムの状態更新 */
const folderTreeItem = (state = initialState, action) => {
  console.log("--イベント(action)の内容---")
  console.log(JSON.stringify(action))
  console.log("--------------------------")
  console.log("--変更前の状態(state)------")
  console.log(state)
  console.log("--------------------------")
  switch (action.type) {
    case EXPAND_ROOT: // 'ルートフォルダの展開イベント'
      const path = window.require('path')
      let name = path.basename(action.rootpath)
      let folderTreeItem = createFolderTreeItem(name, action.rootpath)
      return folderTreeItem
    case TOGGLE_EXPAND: // 'フォルダの展開/折畳イベント'
      if( action.fullpath === '')
        return state
      console.log('* 対象のフォルダパス=' + action.fullpath)
      console.log('* フォルダの展開状態=' + action.isExpanded)
      if(action.isExpanded === false) {
        let children = getChildFolderTreeItemList(action.fullpath)
        console.log("* 展開する 子の数=" + children.length)
        return toggleExpandChildren(state, action.fullpath, true, children)
      }
      else {
        console.log("* 折り畳む")
        return toggleExpandChildren(state, action.fullpath, false, [])
      }
    default:
      return state
  }
}
/* フォルダアイテムの作成 */
const createFolderTreeItem = (name, fullpath, children = []) => {
  return {
    name: name,
    fullpath: fullpath,
    children: children,
    isExpanded: false,
  }
}
/* 子のフォルダアイテム一覧の取得 */
const getChildFolderTreeItemList = (folderPath) => {
  const fs = window.require('fs')
  const path = window.require('path')
  let names = fs.readdirSync(folderPath)
  let children = []
  names.map(name => {
    let fullpath = path.join(folderPath, name)
    let stat = fs.statSync(fullpath)
    if(stat.isDirectory()) {
        children.push(createFolderTreeItem(name,fullpath))
    }
  })
  return children
}
/* サブフォルダと展開状態の入れ替え */
const toggleExpandChildren = (state, fullpath, isNewExpanded, children) => {
  let newState = Object.assign({}, state)
  seekAndUpdateChildren(newState, fullpath, isNewExpanded, children)
  return newState
}
/* 子のフォルダツリーアイテムの検索と更新(再帰検索) */
const seekAndUpdateChildren = (folderTreeItem, fullpath, isNewExpanded, children) => {
  if( folderTreeItem.fullpath === fullpath ) {
     folderTreeItem.children = children
     folderTreeItem.isExpanded = isNewExpanded
     return true
  }
  folderTreeItem.children.map( child => {
     if( seekAndUpdateChildren(child, fullpath, isNewExpanded, children) )
       return true
  })
  return false
}

export default folderTreeItem
