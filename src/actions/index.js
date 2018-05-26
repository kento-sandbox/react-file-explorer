export const EXPAND_ROOT   = 'ルートフォルダの展開イベント'
export const TOGGLE_EXPAND = 'フォルダの展開/折畳イベント'
export const SHOW_PATHLIST = 'フォルダの一覧表示イベント'
/* ルートフォルダの展開イベント(action) */
export const openButtonClickEvent = (rootpath) => ({
  type: EXPAND_ROOT,
  rootpath,
})
/* フォルダの展開/折畳イベント(action) */
export const toggleExpandClickEvent = (fullpath, isExpanded) => ({
  type: TOGGLE_EXPAND,
  fullpath,
  isExpanded,
})
/* フォルダの一覧表示イベント(action) */
export const folderTreeItemClickEvent = (fullpath) => ({
  type: SHOW_PATHLIST,
  fullpath,
})
