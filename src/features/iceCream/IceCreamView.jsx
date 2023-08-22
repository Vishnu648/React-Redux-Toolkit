// import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { ordered,restoked } from './iceCreamSlice'

export default function IceCreamView() {
  const numOfIceCreams=useSelector((state) => state.iceCream.numOfIceCreams  )
  const dispatch=useDispatch()
  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams}</h2>
      <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
      <button onClick={()=>dispatch(restoked(5))}>Restoke IceCreams</button>
    </div>
  )
}
