import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import img1 from './img/Ellipsis-1s-200px.svg'

const Product = () => {
    const [data, setdata] = useState([])
    const [rcds, setrcds] = useState(data)
    const [loading, setloading] = useState(false);
    const Prod=async()=>{
        try {
            setloading(true);
            const resp = await axios.get('https://fakestoreapi.com/products')
            setdata(resp.data)
            setrcds(resp.data)
            setloading(false);
        }
        catch (err) {
            console.log(err)
        };
    };
    useEffect(() => {
        Prod();
    }, [])
    const Loader = () => {
        return (
            <>
            <img style={{display: 'block',margin:'auto'}} src={img1} alt="loading" />
            <h2 style={{textAlign: 'center',fontSize: '36px'}}>Loding</h2>
            </>
        )
    };
    
    const filterItem =(categ)=>{
        const UpdateItem = data.filter((curr)=>{return (curr.category===categ)})
        setrcds(UpdateItem);
    };

    const Button = ()=>{
        return (
            <div style={{textAlign: 'center'}}>
                <button className='filter-btn' onClick={()=>setrcds(data)}>All</button>
                <button className='filter-btn' onClick={()=>filterItem("men's clothing")}>Men</button>
                <button className='filter-btn' onClick={()=>filterItem("women's clothing")}>Women</button>
                <button className='filter-btn' onClick={()=>filterItem("jewelery")}>Jewellery</button>
                <button className='filter-btn' onClick={()=>filterItem("electronics")}>Electronic</button>
            
            </div>

        )
    }
    
    
    return (
        <div className='wrap-3'>
            <h2 className='title-center'>Products</h2> <br /><hr /><br />
            {loading ? <Loader /> : <Button/>} <br /> <br />
            {
                rcds.map((row, i) => {
                    return (
                        <div key={i} className="prod">
                            <Link to={`/ProductDetail/${row.id}`}><img src={row.image} className="img-responsive" alt="Product_img" /></Link>
                            <p className="price">Price : ${row.price}</p>
                            <p className="rate">Rate : {row.rating.rate} ⭐ | Count : {row.rating.count} </p>
                            <button className="btn">Buy Now</button>
                        </div>
                    )
                })
            }
             

        </div>


    )
}

export default Product;