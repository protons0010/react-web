import React from 'react'

function navbar() {
    return (
        <div>
    <nav class="navbar sticky">
	 	 <div class="inner-width">
	 	 	 <a href="home" class="logo">Dacons</a>
	 	 	 <button class="menu-toggler active">
	 	 	 	 <span></span>
	 	 	 	 <span></span>
	 	 	 	 <span></span>
	 	 	 </button>
	 	 	 <div class="navbar-menu active">
	 	 	 	<a href="#home">Home</a>
	 	 	 	<a href="#about">About</a>
	 	 	 	<a href="#services">Services</a>
	 	 	 	<a href="#education">Eduction</a>
	 	 	 	<a href="#works">Works</a>
	 	 	 	<a href="#contact">Contact</a>
	 	 	 </div>
	 	 </div>
	 </nav>

        </div>
    );
}

export default navbar;
