import React from 'react'

function contact() {
    return (
    <div>
    <section id="contact">
	<div class="inner-width">
		<h1 class="section-title">Get in touch</h1>
		
		<div class="contact-info">
			<div class="item">
				<i class="fa fa-mobile"></i>
				<p class="box">+8801646296408</p>
			</div>

			<div class="item">
				<i class="fa fa-envelope"></i>
				<p class="box"> protons0010@gmail.com </p>
			</div>
			
			<div class="item">
				<i class="fa fa-map-marked-alt"></i> 
				<p class="box">Sylhet, Bangladesh</p>
			</div>
		 </div>


         <form action="#" class="contact-form">
         	<input type="text" class="nameZone" placeholder="Your Full Name" />
         	<input type="email" class="emailZone" placeholder="Your Email" />
            <input type="text" class="subjectZone" placeholder="Subject" />
            <textarea class="messageZone" placeholder="Message"></textarea>
            <input type="submit" value="Send Message" class="btn"    />
         </form>
	</div>
</section>

    </div>
    );
}

export default contact;
