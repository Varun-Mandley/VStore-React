import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ProductDetail = () => {
    const [data, setdata] = useState([])
    let {fn} = useParams(); 
    const Prod=async()=>{
        try {
            const resp = await axios.get(`https://fakestoreapi.com/products/${fn}`)
            // console.log(resp.data)
            setdata(resp.data)
        }
        catch (err) {
            console.log(err)
        };
    };
    useEffect(() => {
        Prod();
    },[]);

    const history =useHistory();
  return (
    <div>
        {
            <>
                <div style={{marginTop: '100px',display: 'flex'}}>
                    <div>
                    <img src={data.image}  width="400px" alt="Product_img" />
                    </div>
                    <div style={{marginLeft: '100px'}}>
                        <p style={{fontSize: '28px',textTransform:'capitalize'}}>{data.category}</p> 
                        <p style={{fontSize: '38px',textTransform:'capitalize',marginTop: '10px'}}>{data.title}</p>
                        {/* <h4 style={{marginTop: '20px'}}>Rating : {data.rating.count} </h4>  */}
                        <h2 style={{margin: '28px 0',fontSize:"50px"}}>$ {data.price}</h2>
                        <p style={{marginBottom:'30px',fontSize:'22px'}}>{data.description}</p>
                        <button style={{fontSize:"24px",padding:'10px',borderRadius:"6px",backgroundColor:"transparent",margin:"5px 5px"}}>Add Cart</button>
                        <button style={{fontSize:"24px",padding:'10px',borderRadius:"6px",backgroundColor:"transparent",margin:"5px 5px"}}>Go to Cart</button> <br />
                        <button onClick={history.goBack} style={{fontSize:"24px",padding:'10px',borderRadius:"6px",backgroundColor:"transparent",margin:"5px 5px"}}>Go to Prev.</button>

                    </div>
                </div>
                            
            </>
                    
        }
    </div>
  )
}

export default ProductDetail;