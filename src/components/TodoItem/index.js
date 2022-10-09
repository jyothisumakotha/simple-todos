import './index.css'

const TodoItem = props => {
  const {todoDetails, key} = props
  const {title, deleteUser} = todoDetails
  const onDelete = () => {
    deleteUser(key)
  }
  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
