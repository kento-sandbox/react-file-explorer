import { connect } from 'react-redux'
import PathItemList from '../components/PathItemList'
/* パスアイテムリストの状態の切り出し */
const mapStateToProps = (state)=> {
  return {
    pathItemList: state.pathItemList
  }
}
/* パスアイテムリストの状態と画面(コンテナ)の接続(connect呼び出し) */
const PathItemListPanel = connect(
  mapStateToProps
)(PathItemList)

export default PathItemListPanel
