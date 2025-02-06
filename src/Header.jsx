import React, { useState } from "react";
import chulalogo from "./images/chulalogo.png"

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);

const showMenu = () => {
setMenuOpen(true);
};

const hideMenu = () => {
setMenuOpen(false);
};

return (
<div>
<div className="header">
    <nav className="navbar">
    <img src={chulalogo}/>
    <div className={`nav-links ${menuOpen ? "show" : ""}`} id="navLinks">
        <i className="fa-solid fa-xmark" onClick={hideMenu}></i>
        <ul className="flex gap-4">
        <li className="rounded-3xl btn-start"><a href="/">โครงการ 1</a></li>
        <li className="rounded-3xl btn-start"><a href="/">โครงการ 2</a></li>
        <li className="rounded-3xl btn-start"><a href="/">โครงการ 3</a></li>
        <li className="rounded-3xl btn-start"><a href="/">โครงการ 4</a></li>
        <li className="rounded-3xl btn-start"><a href="/">โครงการ 5</a></li>
        <li className="rounded-3xl btn-start "><a href="/">โครงการ 6</a></li>
        <li className="rounded-3xl btn-start"><a href="/">เกี่ยวกับเรา</a></li>
        </ul>
    </div>
    <i className="fa-solid fa-bars" onClick={showMenu}></i>
    </nav>

    <div className="text-box">
    <div className="text-6xl font-medium text-emerald-500"><h1>SONGKRAN<br />GLOBAL FESTIVAL</h1></div>
    <h4>
        แหล่งรวมความรู้เกี่ยวกับสงกรานต์วิถีใหม่ <br />
        จากโครงการของสถาบันเอเชียศึกษา จุฬาลงกรณ์มหาวิทยาลัย
    </h4>
    <div>
        <button className="btn-start">
        <a href="/">เริ่มต้นที่นี่</a>
        </button>
    </div>
    </div>
</div>
</div>
);
};

export default Header;
