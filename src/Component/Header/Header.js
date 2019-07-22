import React from 'react';
import './HeaderStyle.css';

const Header = () => {
    return(
        <header class="menu">
	    <nav class="menu_list">
		<ul>
		    <li>
			<a href='/home' >Home</a>
		    </li>
		    <li>
			<a href='/form' >Registration</a>
		    </li>
		    <li>
			<a href='/counter' >Counter</a>
		    </li>
		</ul>
	    </nav>
	</header>
    );
}

export default Header;