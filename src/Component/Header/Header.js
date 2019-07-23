import React from 'react';
import './HeaderStyle.css';

const Header = () => {
    return(
        <header className="menu">
	    <nav className="menu_list">
		<ul>
		    <li>
			<a href='/home' >Home</a>
		    </li>
		    <li>
			<a href='/form' >Registration</a>
		    </li>
		</ul>
	    </nav>
	</header>
    );
}

export default Header;