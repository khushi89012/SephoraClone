import styled from "styled-components"

const ProductCard=styled.div`
  width: 100%;
  /* border: 1px solid gray; */
&:hover #Scrollup_Button{
    bottom: 0;
    opacity: 1;
}
&:hover #productimg{
  content: url({pros.Product.image2_url});
}
`

export {ProductCard}