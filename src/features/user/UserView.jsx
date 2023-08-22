import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchUsers} from './userSlice'

export default function UserView() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.user)

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  

  return (
    <div>
      <h2>List of users</h2>
      <ol>
      {user.loading && <div>loading...</div>}
      {user.users ?
      user.users.map((user) => {
       return <li key={user.id}>{user.name}</li>
      }
      ) : null }
      </ol>
    </div>
  )
}
