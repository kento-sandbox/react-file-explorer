import React from 'react'
import PropTypes from 'prop-types'
/* パスアイテムリストの描画 */
const PathItemList = ({pathItemList = []}) => (
  <table>
    <tr>
      <th>Name</th>
      <th>Modified</th>
    </tr>
    { 
      pathItemList.map(pathItem =>
      <PathItem
        {...pathItem} // パスアイテムの描画を呼び出す
      />
      )
    }
  </table>
)
/* パスアイテムリストの型の定義*/
PathItemList.propTypes = {
  pathItemList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    isDirectory: PropTypes.bool.isRequired
  }).isRequired).isRequired,
}
/* パスアイテムの描画 */
const PathItem = ({ name, modified, isDirectory }) => (
  <tr>
    <td>
      {/* 名前 */name}{/*ディレクトリなら[/]を付ける*/isDirectory ? "/" : ""}
    </td>
    <td>
      {/* 更新日 */modified}
    </td>
  </tr>
)
/* パスアイテムの型の定義 */
PathItem.propTypes = {
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  isDirectory: PropTypes.bool.isRequired
}

export default PathItemList
