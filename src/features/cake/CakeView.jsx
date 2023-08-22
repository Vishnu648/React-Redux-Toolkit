
import {useSelector,useDispatch} from "react-redux"
import { ordered,restoked } from './cakeSlice'

export default function CakeView() {
  const numOfCakes=useSelector((state) => state.cake.numOfCakes  )
  const dispatch=useDispatch()
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order Cake</button>
      <button onClick={()=>dispatch(restoked(2))}>Restoke Cake</button>
    </div>
  )
}
