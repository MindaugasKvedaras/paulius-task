import "./OrderItems.css";
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsInfo } from 'react-icons/bs';


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
        <div className="more-information_container">
            <div className="container-item">
                <BsInfo className="information-sign"/>
                <p className="information-text">
                    Siuntą <span className="important-text">virš 30 kg būtinai pakuokite</span> į dvi mažesnes 
                    pakuotes, nes kaina nuo pakuočių skaičiaus nesikeičia.
                </p>
            </div>
            <div className="container-item higher">
                <BsInfo className="information-sign"/>
                <p className="information-text more-text">
                    Siuntos dalinamos/renkamos trečiadienį darbo valandomis <br/>
                    Vairuotojas su Jumis susisieks 1 valandą prieš atvykdamas.
                </p>
            </div>
        </div>
    </div>
  )
}

export default OrderItems