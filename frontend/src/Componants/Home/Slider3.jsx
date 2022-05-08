import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './HomeCss/Slider2.css'
import  './HomeCss/Sild.css'
import { SliderDiv } from "../../StyledComponants/SliderDiv"

export const Slider3 = () => {
  const [videoImg, setvideoImg] = useState(false)
  

  const setImg = ()=>
  (
    setvideoImg(!videoImg)
  )
  
   

    const makeupData =[
        {
            image_url:
              "https://cdn09.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012732/1.jpg",
            image2_url:
              "https://cdn12.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012729/2.jpg",
            brandname: "OLAPLEX",
            productDescription:"N°4 Bond Maintenance Shampoo",
            price: "₹ 6,500"
            
          },

          {
            image_url:
              "https://cdn17.nnnow.com/web-images/large/styles/2VPHEST7O45/1606375877521/1.jpg",
            image2_url:
              "https://i.pinimg.com/474x/f7/db/35/f7db3597c92fad06b651041c2a34a26e.jpg",
            brandname: "SEPHORA COLLECTION",
            productDescription:"Natural Effect False Eyelashes Starter Kit",
            price: "₹ 1,500"
            
          },
          {
            image_url:
              "https://cdn15.nnnow.com/web-images/large/styles/KHFROVPTCI2/1599046960541/1.jpg",
            image2_url:
              "https://cdn14.nnnow.com/web-images/large/styles/KHFROVPTCI2/1599046960541/2.jpg",
            brandname: "OLAPLEX",
            productDescription:"Natural Effect False Eyelashes Starter Kit",
            price: "₹ 2,950"
            
          },

          {
            image_url:
              "https://cdn14.nnnow.com/web-images/large/styles/UT7V8IFK4QC/1583391378147/1.jpg",
            image2_url:
              "https://cdn01.nnnow.com/web-images/large/styles/UT7V8IFK4QC/1583391378145/2.jpg",
            brandname: "SEPHORA COLLECTION",
            productDescription:"False Eyelashes - Curl Your Lashes",
            price: "₹ 990"
            
          },

          {
            image_url:
              "https://cdn16.nnnow.com/web-images/large/styles/DRW0XVO6Z4W/1583388932304/1.jpg",
            image2_url:
              "https://cdn06.nnnow.com/web-images/large/styles/DRW0XVO6Z4W/1583388932301/2.jpg",
            brandname: "BENEFIT COSMETICS",
            productDescription:"Benetint Lip & Cheek Stain Mini - Rosel",
            price: "₹ 1,720"
            
          },
          {
            image_url:
              "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1533201155002/1.jpg",
            image2_url:
              "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1617175589724/2.jpg",
            brandname: "SEPHORA COLLECTION",
            productDescription:"Glow Perfection Foundation - 25 Beige",
            price: "₹ 1,690"
            
          },
      {
        image_url:
          "https://cdn07.nnnow.com/web-images/large/styles/JY27S21V62P/1649999368078/1.jpg",
        image2_url:
          "https://cdn16.nnnow.com/web-images/thumbnail/styles/JY27S21V62P/1649999368063/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"Eye Pods",
        price: "₹ 6,500"
        
      },
      {
        image_url:
          "https://cdn17.nnnow.com/web-images/large/styles/2LJHP9ZCBV8/1645680487451/1.jpg",
        image2_url:
          "https://cdn15.nnnow.com/web-images/thumbnail/styles/2LJHP9ZCBV8/1645680487446/3.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"Macro Tech Eye Crayon - Brown",
        price: "₹ 2,350"
        
      },
      {
        image_url:
          "https://cdn18.nnnow.com/web-images/large/styles/9K63PXQWLFJ/1649998952391/1.jpg",
        image2_url:
          "https://cdn08.nnnow.com/web-images/thumbnail/styles/9K63PXQWLFJ/1649998952385/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"I Need A Rose Lip Gloss - Daphne",
        price: "₹ 2,600"
        
      },
      {
        image_url:
          "https://cdn16.nnnow.com/web-images/large/styles/LXIPKNCS9XP/1649999294883/1.jpg",
        image2_url:
          "https://cdn11.nnnow.com/web-images/large/styles/LXIPKNCS9XP/1649999294867/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"I Need A Rose Lip Gloss - Daphne",
        price: "₹ 2,600"
        
      },
      {
        image_url:
          "https://cdn08.nnnow.com/web-images/large/styles/CZLPWJPNK1M/1644913480935/1.jpg",
        image2_url:
          "https://cdn15.nnnow.com/web-images/large/styles/CZLPWJPNK1M/1644913480926/2.jpg",
        brandname: "SEPHORA COLLECTION",
        productDescription:"Recycled Plastic Sharpener",
        price: "₹ 400"
        
      },
      {
        image_url:
          "https://cdn03.nnnow.com/web-images/large/styles/DST8JG893JI/1645680474489/1.jpg",
        image2_url:
          "https://cdn19.nnnow.com/web-images/large/styles/DST8JG893JI/1645680474479/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"Glam Face Palette - Dark",
        price: "₹ 5,800"
        
      },
      {
        image_url:
          "https://cdn00.nnnow.com/web-images/large/styles/WX88ZXZP9J1/1646888841078/1.jpg",
        image2_url:
          "https://cdn06.nnnow.com/web-images/large/styles/WX88ZXZP9J1/1646888841074/3.jpg",
        brandname: "HUDA BEAUTY",
        productDescription:"Mini Nudies 5 Piece Kit",
        price: "₹ 5,3750"
        
      },
      {
        image_url:
          "https://cdn01.nnnow.com/web-images/large/styles/EDUVRFR9P45/1646888841513/1.jpg",
        image2_url:
        "https://cdn19.nnnow.com/web-images/large/styles/EDUVRFR9P45/1646888841511/3.jpg",
        brandname: "HUDA BEAUTY",
        productDescription:"GloWish Luminous Pressed Powder - 02 Fair Light",
        price: "₹ 2,900"
        
      },
      {
        image_url:
          "https://cdn00.nnnow.com/web-images/large/styles/0IAKBM2KYZ6/1645680487478/1.jpg",
        image2_url:
        "https://cdn13.nnnow.com/web-images/large/styles/0IAKBM2KYZ6/1645680487469/2.jpg",
        brandname: "NATASHA DENONA",
        productDescription:"Mini Xenon Eyeshadow Palette",
        price: "₹ 2,450"
        
      }

  ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (

    <div style={{display:"flex", textAlign:"center"}}>
    <div style={{
        width:"84%",
        marginLeft:"7%"
       
    }}>
<Carousel responsive={responsive} 
autoPlay={false}
autoPlaySpeed={50000}
>
    {makeupData.map((e,i)=>
    (
  <SliderDiv> <img id='image1' width="190px" src={e.image_url} alt="" />
  <img id='image2' width="190px" src={e.image2_url} alt="" />
  
  
<div><div id="Scrollup">
                    <button>Add To Cart</button>
                    <button>Add to Wishlist</button>
                  </div></div>

<div >
<span style={{marginRight:"5px",paddingBottom:"5px"}}><img width="20px" src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png" alt="" /></span>
  <span style={{color: "rgb(213, 0, 50)",fontWeight:"bold",fontSize:"12px"}}>OFFER</span>
  <div  >  <span className='tag1' style={{padding:"5px 0px 0px 0px"}} >{e.brandname} <p style={{fontWeight:"lighter"}}>{e.productDescription}</p>
  <span >{e.price}</span>
  </span>   
  
  </div>
  
 
</div>
</SliderDiv>
    ))}
</Carousel>

    </div>
    <div  className={videoImg ? "videoPlaynothide" : "videoPlay"}>
   <img style={{float:"right"}} onClick={setImg} width="20px" src="data:image/jpeg;base64,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" alt="" />
    <iframe  width="748" height="420" 
    src="https://www.youtube.com/embed/QFG8omRfQos" title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
   >
     
     </iframe> 
    </div>
    
    
    

    
    </div>
  )
}