import React, { useState } from "react";

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
<header className="header">
    <nav className="navbar">
    
    <div className="text-2xl font-medium topbar"><h1>SONGKRANCHACHACHA</h1></div>
    <div className={`nav-links ${menuOpen ? "show" : ""}`} id="navLinks">
        <i className="fa-solid fa-xmark" onClick={hideMenu}></i>
        <ul>
        <li><a href="/">หน้าหลัก</a></li>
        <li><a href="/">โครงการ 1</a></li>
        <li><a href="/">โครงการ 2</a></li>
        <li><a href="/">โครงการ 3</a></li>
        <li><a href="/">โครงการ 4</a></li>
        <li><a href="/">โครงการ 5</a></li>
        </ul>
    </div>
    <i className="fa-solid fa-bars" onClick={showMenu}></i>
    </nav>

    <div className="text-box">
    <div className="text-6xl font-medium"><h1>SONGKRAN<br />CHACHACHA</h1></div>
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
</header>
</div>
);
};

export default Header;
