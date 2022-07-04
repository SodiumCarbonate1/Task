import React from 'react'
import './transactionMethod.scss';
import order from '../../order_history.json';
export default function TransactionMethod({id,title,active,setSelected}) {
  const buylist = order.filter((item)=>item.type.includes('Buy')).length;
  const selllist = order.filter((item)=>item.type.includes('Sell')).length;
  const alllist = order.length;

  function renderElement(){
    if(title ==='Buy'){
      return(
        <>
        <div className='combination'>
          {title}
          <p style={{"color": "white","backgroundColor" :"rgb(202, 204, 257)","borderRadius":"35px","textAlign":"center","width":"19px"}}>{buylist}</p>
        </div>
        </>
      )
    }
    else if(title ==='Sell'){
      return(
        <>
        <div className='combination'>
          {title}
          <p style={{"color": "white","backgroundColor" :"rgb(220, 150, 159)","borderRadius":"35px","textAlign":"center","width":"19px"}}>{selllist}</p>
        </div>
        </>
      )

    }
    else{
      return(
        <>
        <div className='combination'>
          {title}
          <p style={{"color": "white","backgroundColor" :"#36CC66","borderRadius":"35px","textAlign":"center","width":"19px"}}>{alllist}</p>
        </div>
        </>
      )

    }
  }
    return(
        <li className= {active? "payment_method active": "payment_method"} onClick={()=> setSelected(id)}>
            {renderElement()}
        </li>
    )
}
