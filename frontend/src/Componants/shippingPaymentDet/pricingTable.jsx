export const PricingTable = ({total})=>{
    return (
               
        <div className="total_price_info">
        <div>
            <p><strong>OVERVIEW</strong></p>
            <div className="total_price">
                <span>Subtotal</span><span>$ {total}</span>
            </div>
            <div className="total_price" style={{color: 'rgb(255,51,153)'}}>
                <span>Disscount(10%)</span><span>-$ {Math.floor(total * 10 /100)}</span>
            </div>
            <div className="total_price">
                <span>GST(18%)</span><span>$ {Math.floor(total * 18/100)}</span>
            </div>
            <div className="total_price">
                <span>Delivery Charges</span><span>$ {0}</span>
            </div>
            <hr />
             <div className="total_price"><span><strong>Total</strong></span><strong><span>${
                total + Math.floor(total * 18/100) - Math.floor(total * 10 /100)
                } </span></strong></div>
        </div>
        </div>
                
    )
}