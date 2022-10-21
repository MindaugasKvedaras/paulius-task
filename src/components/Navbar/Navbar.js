import "./Navbar.css";
import { LT } from 'country-flag-icons/react/3x2';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsQuestionCircle } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar_left-items">
            <div className="navbar_left-items_blue-circle"/>
            <div className="navbar_left-items_language_help">
                <div className="language">
                    <LT className="language_flag"/>
                    <p className="text">LT</p>
                    <MdOutlineKeyboardArrowDown className="arrow"/>
                </div>
                <div className="help">
                    <BsQuestionCircle className="help_question"/>
                    <p className="text mobile_text">Pagalba</p>
                    <MdOutlineKeyboardArrowDown className="arrow"/>
                </div>
            </div>
        </div>
        <div className="navbar_right-items">
            <HiOutlineUser className="navbar_right-items_user"/>
            <p className="text mobile_text">Prisijungti</p>
        </div>
    </div>
  )
}

export default Navbar