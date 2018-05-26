import React from 'react'
import PropTypes from 'prop-types'
import createClass from 'create-react-class'

const divStyle = { "list-style": "none" }
/* フォルダツリーアイテムの描画 */
const FolderTreeItem = createClass({
  /* フォルダ展開/折畳イベントのハンドラ */
  onExpandClick: function(fullpath, isExpanded) {
    this.props.onExpandClick(fullpath, isExpanded);
  },
  /* パスリスト表示イベントのハンドラ */
  onFolderClick: function(fullpath) {
    this.props.onFolderClick(fullpath);
  },
  /* フォルダツリーアイテムの描画処理 */
  render : function() {
    let folderTreeItem = this.props.folderTreeItem
    return <div style={divStyle}>
     <li>
       <a onClick={() => { // 展開/折畳イベントの実行（bubblingさせないようbindする）
         this.onExpandClick.bind(this, folderTreeItem.fullpath, folderTreeItem.isExpanded)
         this.onExpandClick(folderTreeItem.fullpath, folderTreeItem.isExpanded)
        }}>
         {/* (+), (-)表示 */ 
           folderTreeItem.isExpanded ? <font color='red'>(-)</font> : <font color='blue'>(+)</font>
         }
        </a>
        &nbsp;
        <a onClick={()=>{ // パス一覧表示イベントの実行（bubblingさせないようbindする）
          this.onFolderClick.bind(this, folderTreeItem.fullpath)
          this.onFolderClick(folderTreeItem.fullpath)
         }}>
          {/* フォルダ名 */folderTreeItem.name} 
        </a>
        <ul>
        { // 子フォルダツリーアイテムの再帰描画
          folderTreeItem.children.map(child =>
            <FolderTreeItem 
              folderTreeItem={child} 
              onExpandClick={this.props.onExpandClick} 
              onFolderClick={this.props.onFolderClick} />
          )
        }
        </ul>
      </li>
    </div>
  }
})
/* フォルダツリーアイテムの型の定義*/
FolderTreeItem.propTypes = {
  folderTreeItem: PropTypes.object.isRequired,
  onFolderClick: PropTypes.func.isRequired,
  onExpandedClick: PropTypes.func.isRequired,
}

export default FolderTreeItem
