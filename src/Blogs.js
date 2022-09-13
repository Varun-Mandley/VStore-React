import React from 'react';
import './All.css'
import img1 from "./img/b1.jpg";
import img2 from "./img/b2.jpg";
import img3 from "./img/b3.jpg";
import img4 from "./img/b4.jpg";
import img6 from "./img/b6.jpg";

const Blogs = () => {
  return (

<div className="wrap-4">
    <div className="container">
        <div className="row" style={{display: "flex",padding:"140px 0px 40px",}}>
            <div className="blog-box">
                <img src={img1} width='500px' alt="img" />
            </div>
            <div className="blog-detail">
                    <h4>The cotton-jersey zip-Up Hoodie</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum dolor ea ex eligendi
                        labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores
                        accusantium expedita quisquam, quae corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde. Tenetur, illum nihil. Soluta natus eos pariatur quod iste provident, nostrum reprehenderit quam id. Aliquam, perferendis. Nemo voluptates ea optio? </p>
                    <a href="#1">CONTINUE READING</a>
                </div>
        </div>
        <div className="row" style={{display: "flex",padding:"40px 0px"}}>
            <div className="blog-detail">
                <h4>How to style a Quiff</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum dolor ea ex eligendi
                    labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores
                    accusantium expedita quisquam, quae corporis.</p>
                <a href="#2">CONTINUE READING</a>
            </div>
            <div className="blog-box">
                <img src={img2}  width='700px' alt="img" />
            </div>
        </div>
        <div className="row" style={{display: "flex",padding:"40px 0px",}}>
            <div className="blog-box">
                <img src={img3}  width='600px' alt="img" />
            </div>
            <div className="blog-detail">
                <h4>Must-have skater girl item</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum dolor ea ex eligendi
                    labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores
                    accusantium expedita quisquam, quae corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iste nam molestiae rerum ipsam, et ut tempore expedita perferendis laborum sit cupiditate, commodi error ducimus aliquam non quasi dignissimos! Reiciendis. </p>
                <a href="#3">CONTINUE READING</a>
            </div>
        </div>
        <div className="row" style={{display: "flex",padding:"40px 0px",}}>
                <div className="blog-detail">
                    <h4>Runway inspired Trends</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum dolor ea ex eligendi
                        labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores
                        accusantium expedita quisquam, quae corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum molestiae omnis suscipit placeat quasi tempora deleniti ad! Sed explicabo dicta nesciunt placeat dolor fugit asperiores ipsa deleniti, vel quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum accusantium, quo porro nulla eaque corporis natus perferendis asperiores repudiandae sunt. Delectus saepe recusandae accusantium nostrum autem necessitatibus perspiciatis inventore velit!Lorem  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quae cumque veniam neque, ipsa eaque deleniti a? Impedit quod nulla natus vero sequi aperiam voluptatum voluptas recusandae ipsa sunt. Unde. .</p>
                    <a href="#4">CONTINUE READING</a>
                </div>
                <div className="blog-box">
                     <img src={img4}  width='500px' alt="img" />
                </div>
        </div>
        <div className="row" style={{display: "flex",padding:"40px 0px",}}>
            <div className="blog-box">
                <img src={img6}  width='500px' alt="img" />
            </div>
            <div className="blog-detail">
                    <h4>AW20 Menwear Tren</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum dolor ea ex eligendi
                        labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores
                        accusantium expedita quisquam, quae corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex commodi minus, ipsa facilis libero odio consequatur similique veritatis, in fuga eius nulla! Nisi quasi ex rerum eveniet nulla perferendis quas. </p>
                    <a href="#5">CONTINUE READING</a>
                </div>
        </div>
    </div>
</div>

  )
}

export default Blogs;