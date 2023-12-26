export const PricingTable = ({total})=>{
    return (
               
        <div className="total_price_info">
        <div>
            <p><strong>OVERVIEW</strong></p>
            <div className="total_price">
                <span>Subtotal</span><span>$ {total}</span>
            </div>
            <div className="total_price" style={{color: 'rgb(255,51,153)'}}>
                <span>Disscount</span><span>-$ {Math.floor(total * 10 /100)}</span>
            </div>
            <div className="total_price">
                <span>GST</span><span>$ {Math.floor(total*4/100)}</span>
            </div>
            <div className="total_price">
                <span>Delivery Charges</span><span>$ {0}</span>
            </div>
            <hr />
             <div className="total_price"><span><strong>Total</strong></span><strong><span>$ {Math.round(total * 86 /100)}</span></strong></div>
        </div>
        </div>
                
    )
}