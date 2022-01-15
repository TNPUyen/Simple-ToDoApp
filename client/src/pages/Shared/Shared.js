import React, { useEffect, useState } from 'react'
import { SharedAction } from '../../actions/sharedAction'
import SharedList from './components/sharedList';

export default function Shared({user}) {
    const [sharedList, setSharedList] = useState(null);
    useEffect(async () => {
        const tempsharedList = await SharedAction.getAllSharedList(user.info._id);
        if(tempsharedList != null){
            setSharedList(tempsharedList);
        }
    }, [])
    return (
        <div>
            <h1>Shared List</h1>
            <hr></hr>
            <SharedList sharedList={sharedList}/>

        </div>
    )
}
