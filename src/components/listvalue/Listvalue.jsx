import React, { useState,useEffect } from 'react'
import './listvalue.scss';
import TransactionMethod from '../transactionMethod/TransactionMethod.jsx';

import order from '../../order_history.json';
import download from '../assets/download.png';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
//list all the information below header
export default function Listvalue() {
    const [selected, setSelected] = useState("Buy");
    const [data, setData] =  useState([]);

    const [page, setPage] = useState(1);

    const list = [
        {
            id:"Buy",
            title: "Buy"
        },
        {
            id:"Sell",
            title: "Sell"
        },
        {
            id:"All",
            title: "All"
        },
    ]


    const buylist = order.filter((item)=>item.type.includes('Buy'));
    const selllist = order.filter((item)=>item.type.includes('Sell'));
    const alllist = order;
    useEffect(() => {
        switch (selected) {
          case "Buy":
            setData(buylist);
            break;
          case "Sell":
            setData(selllist);
            break;
          case "All":
            setData(alllist);
        }
      }, [selected]);


      console.log(data);
    

  return (
    <>      
    <div className='listvalue'>

      <div className='list_menu'>
        <div className='accountSum'>
            <div className='text'>
                <p>Account Activity</p>
            </div>
        </div>
        <div className='payments'>
            <ul>
            {list.map(item=>(
                <TransactionMethod title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
            ))}
            </ul>
        </div>
        <div className='transaction'>
            {data.map((d)=>(
                <div className='item'>
                    <div className='whole'>
                        <div className='coinName'>
                            <p className='title'>{d.coinName}</p>
                            <p className='date'>{d.date}</p>
                            <p className='type' style={{background : d.type === "Buy" ? "#FDE9E9" : "#E7FCEF"}}>{d.type}</p>
                        </div>
                        <div className='comb'>                 
                            <div className='averagePrice'>
                                <p className='subtitle'>Averge Price(CAD)</p>
                                <p className='number'>{d.averagePrice}</p>
                            </div>
                            <div className='orderPrice'>
                                <p className='subtitle'>Order Price(CAD)</p>
                                <p className='number'>{d.orderPrice}</p>
                            </div>
                            <div className='executedAmount'>
                                <p className='subtitle'>Executed Amount(BTC)</p>
                                <p className='number'>{d.executedAmount}</p>
                            </div>
                            <div className='orderAmount'>
                                <p className='subtitle'>Order Amount(BTC)</p>
                                <p className='number'>{d.orderAmount}</p>
                            </div>
                        </div>
                    </div>
                    <div className='download'>
                        <img src={download} alt="download icon" />
                        <p>Trade Confirmation</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
      <div className='pagination'>
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={10}
            marginPagesDisplayed={2}

            pageRangeDisplayed={3}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"pageitem"}
            pageLinkClassName={"pagelink"}
            previousClassName={"pageitem"}
            previousLinkClassName={"pagelink"}
            nextClassName={"pageitem"}
            nextLinkClassName={"pagelink"}
            breakClassName={"pageitem"}
            breakLinkClassName={"pagelink"}
            activeClassName={"active"}
        />
    </div>
    </div> 

    </>
    
    
  )
}
