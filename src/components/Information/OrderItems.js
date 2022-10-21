import "./OrderItems.css";
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


const OrderItems = () => {
  return (
    <div className="order-information">
        <div className="order-information_items">
            <div className="item done">
                <AiFillCheckCircle className="check-sign"/>
                <div className="number-container">
                    <p className="item-number-mobile">1</p>
                </div>
                <p className="item-text">Siuntos informacija</p>
            </div>
            <div className="item active">
                <p className="item-number">2.</p>
                <div className="number-container grey">
                    <p className="item-number-mobile dark">2</p>
                </div>
                <p className="item-text black">Siuntėjas</p>
                <MdOutlineKeyboardArrowRight className="arrow-right"/>
            </div>
            <div className="item">
                <p className="item-number">3.</p>
                <div className="number-container grey">
                    <p className="item-number-mobile dark">3</p>
                </div>
                <p className="item-text black">Gavėjas</p>
            </div>
            <div className="item">
                <p className="item-number">4.</p>
                <div className="number-container grey">
                    <p className="item-number-mobile dark">4</p>
                </div>
                <p className="item-text black">Apmokėjimas</p>
            </div>    
    
        </div>
    </div>
  )
}

export default OrderItems