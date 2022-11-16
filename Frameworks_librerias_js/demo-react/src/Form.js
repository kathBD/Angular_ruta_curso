
import React from 'react'

export default function form (props) {

//react hook

// eslint-disable-next-line react-hooks/rules-of-hooks
const [quantity, setQuantity] = React.useState(0);

  const{movie}= props;

  return (
    <form>
        <h3>{movie.name}</h3>
     
        <button type='button'onClick={()=>setQuantity(quantity -1)} disabled={quantity <= 0}>-</button>
        {quantity}
        <button type='button' onClick={()=>setQuantity(quantity +1)} disabled={quantity >= movie.available}>+</button>
    </form>




  );
}

