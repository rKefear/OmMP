import React from 'react'
import { useSelector } from 'react-redux'
import Friend from '../UI/FriendIcon/FriendIcon'

function FriendList() {
    const friends = useSelector(state=> state.friend)

    return (
        <div>
{friends.map(el => <Friend key={el.id} name={el.login}/>)}
        </div>
    )
}

export default FriendList