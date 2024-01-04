import "./Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";

export const Navbar = () => {
  var navigate= useNavigate()
  const z = JSON.parse(localStorage.getItem("user"))||"Login";
  const [refreser,setRefreser]=useState(false)
  const handleCart = ()=>{

     if(z=="Login"){
      alert("you are not logged in please login")
      navigate('/login')
      return
     }
    navigate('/checkoutpage')
  }
  const logouter = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("sephoraAddress")
    localStorage.removeItem("sai")

    setRefreser(!refreser)
  }
  
  return (
    <>
      <div className="NavbarContainer-1">
        <div className="Navbar-11">
          <div className="Navbar-12">
            <div className="Searchlogo">
              {" "}
              <FiSearch />{" "}
            </div>
            <input
              className="Navbar-13"
              type="text"
              placeholder="Search SEPHORA"
            />
          </div>
          <div className="Navbar-14" title={'Click me'}>
          <Link className="Navbar-15" to={`/`}>
            <div className="Navbar-15" >SEPHORA</div>
            </Link>
          </div>
          <div className="Navbar-16">
            <div className="Navbar-17">
              <li>
                <FiHeart />
              </li>
              <li>|</li>
                <li className="hellohover" onClick={()=>handleCart()} style={{cursor: "pointer"}} title={'Click to view cart'}>
                  Cart <HiOutlineShoppingBag />
                </li>
              <li>|</li>
              {z=="Login" ?
              <Link to={`/login`} title={'Click to login'}>
              <span id="adjustment1">
                <li  className="hellohover" style={{color:"rgb(255,51,153)", display:'flex',justifyContent:'space-between'}}>
                  <RiContactsLine /> <p style={{marginLeft:'5px',color:"rgb(255,51,153)"}}>{z=="Login" ? z : ''}</p> 
                </li>
              </span>
            </Link>:null}
              
              <div className="hellohover" style={z!=="Login" ? { color:"rgb(255,51,153)",cursor: "pointer"}:{color:"black"}}> 
              {z=="Login" ? '' : z} 
              </div>
              {z!=="Login" ? <p className="hellohover" onClick={()=>logouter()} style={{color:"rgb(255,51,153)",cursor: "pointer"}}>Logout</p>:null}
              
            </div>
          </div>
        </div>
      </div>
      <div className="NavbarContainer-2">
        <div className="header--left">
          <ul>
            <li className="nav-hover ">
              {" "}
              <Link to={`/mackupproduct`} title={'Click me'}>
              <a className="heading1">
                SALE
              </a>
              </Link>
            </li>
            <li className="nav-hover">
            <Link to={`/mackupproduct`} title={'Click me'}>

              <a className="heading">
                MAKEUP
              </a>
              </Link>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>FACE</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Foundation</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>BB & CC Cream</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Concealer</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Face Primer</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Highlighter</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Makeup Palette</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Face Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>	EYE</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>EYE</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eye Palettes</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Mascara</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eyeliner</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eyebrow</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eyeshadowr</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eye Primer</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eye Brushes</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Contact Lenses</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>LIP</h5> */}
                    <ul>
                        <li className="first">
                          <Link to={`/mackupproduct`} title={'Click me'}>LIP</Link>
                        </li>
                        <li>
                          <Link to={`/mackupproduct`} title={'Click me'}>Lip Stain</Link>
                        </li>
                        <li>
                          <Link to={`/mackupproduct`} title={'Click me'}>Lipstick</Link>
                        </li>
                        <li>
                          <Link to={`/mackupproduct`} title={'Click me'}>Lip Gloss</Link>
                        </li>
                        <li>
                          <Link to={`/mackupproduct`} title={'Click me'}>Lip Liner</Link>
                        </li>
                        <li>
                          <Link to={`/mackupproduct`} title={'Click me'}>Lip Balm & Treatment</Link>
                        </li>
                        <li>
                          <Link to={`/mackupproduct`} title={'Click me'}>Lip Brushes </Link>
                        </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>CHEEK</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>CHEEK</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Blush</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Bronzer</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Highlighter</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Face Oils</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>NAIL MAKEUP</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>NAIL MAKEUP </Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Nail Polish</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Nail Care</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Highlighter</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Manicure Tools</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Pedicure Tools</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
            <Link to={`/hairproduct`} title={'Click me'}>
              <a className="heading">
                SKINCARE
              </a>
              </Link>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>FACE</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/hairproduct`} title={'Click me'}>FACE</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Foundation</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>BB & CC Cream</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Concealer</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Face Primer</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Highlighter</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Makeup Palette</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Face Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="first">
                        <Link to={`/hairproduct`} title={'Click me'}>EYE </Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Eye Palettes</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Mascara</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Eyeliner</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Eyebrow</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Eyeshadowr</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Eye Primer</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Eye Brushes</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Contact Lenses</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>LIP</h5> */}
                    <ul>
                        <li className="first">
                          <Link to={`/hairproduct`} title={'Click me'}>LIP</Link>
                        </li>
                        <li>
                          <Link to={`/hairproduct`} title={'Click me'}>Lip Stain</Link>
                        </li>
                        <li>
                          <Link to={`/hairproduct`} title={'Click me'}>Lipstick</Link>
                        </li>
                        <li>
                          <Link to={`/hairproduct`} title={'Click me'}>Lip Gloss</Link>
                        </li>
                        <li>
                          <Link to={`/hairproduct`} title={'Click me'}>Lip Liner</Link>
                        </li>
                        <li>
                          <Link to={`/hairproduct`} title={'Click me'}>Lip Balm & Treatment</Link>
                        </li>
                        <li>
                          <Link to={`/hairproduct`} title={'Click me'}>Lip Brushes </Link>
                        </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>CHEEK</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/hairproduct`} title={'Click me'}>CHEEK </Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Blush</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Bronzer</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Highlighter</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Face Oils</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h3>NAIL MAKEUP</h3> */}

                    <ul>
                      <li className="first">
                        <Link to={`/hairproduct`} title={'Click me'}>NAIL MAKEUP </Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Nail Polish</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Nail Care</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Highlighter</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Manicure Tools</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Pedicure Tools</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
            <Link to={`/hairproduct`} title={'Click me'}>
              <a className="heading">
                FRAGRANCE
              </a>
              </Link>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>WOMEN</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>WOMEN </Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Perfume</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Mists and Deodorants</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>MEN</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>MEN </Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Perfume</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Body Sprays & Deodorant</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
            <Link to={`/mackupproduct`} title={'Click me'}>
              <a className="heading">
                HAIRCARE
              </a>
              </Link>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>SHAMPOO & CONDITIONER</h5> */}
                    <ul>
                        <li className="first">
                          <Link to={`/hairproduct`} title={'Click me'}>SHAMPOO & CONDITIONER </Link>
                        </li>
                        <li>
                          <Link to={`/hairproduct`} title={'Click me'}>Shampoo</Link>
                        </li>
                        <li>
                          <Link to={`/hairproduct`} title={'Click me'}>Conditioner</Link>
                        </li>
                    </ul>
                  </div>

                  <div>
                    {/* <h5>HAIR STYLING & TREATMENTS</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/hairproduct`} title={'Click me'}>HAIR STYLING & TREATMENTS </Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Hair Spray & Styling Products</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Hair Masks</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Hair Clips</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Hair Oil</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
            <Link to={`/hairproduct`} title={'Click me'}>

              <a className="heading">
                TOOLS & BRUSHES
              </a>
              </Link>
              <div className="hover">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>	BRUSHES</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>BRUSHES </Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eye Brushes</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Face Brushes</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Lip Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>TOOLS</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>TOOLS </Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Sponges & Applicators</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Face Tools</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Hair Clips</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Sharpeners</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eyelash Curlers</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Accessories</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Brush Cleaners</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>VEGAN</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/mackupproduct`} title={'Click me'}>VEGAN </Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Face Brushes</Link>
                      </li>
                      <li>
                        <Link to={`/mackupproduct`} title={'Click me'}>Eye Brushes</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
            <Link to={`/mackupproduct`} title={'Click me'}>
              <a className="heading">
                BRANDS
              </a>
              </Link>
              <div className="hover">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>TOP MAKEUP BRANDS</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/hairproduct`} title={'Click me'}>TOP MAKEUP BRANDS</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Lancôme</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Caudalie</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Kora Organics</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Foreo</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Shiseido</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Estee Lauder</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Elizabeth Arden</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Clarins</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Gallinee</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>TOP FRAGRANCE BRANDS</h5> */}
                    <ul>
                      <li className="first">
                        <Link to={`/hairproduct`} title={'Click me'}>FRAGRANCE BRANDS</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Shiseido</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Estee Lauder</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Elizabeth Arden</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Clarins</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Gallinee</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Lancôme</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Caudalie</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Kora Organics</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to={`/hairproduct`} title={'Click me'}>Foreo</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {" "}
                    <li className="first">
                      <Link to={`/hairproduct`} title={'Click me'}> BRANDS A-Z</Link>
                    </li>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
      {/* ///////////////////////////////// */}
    </>
  );
};
