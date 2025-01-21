import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
        <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          {/* <i className="fab fa-slack"></i> */}
          <div className="logo_foo"><a href="#"><img src="https://mediadunes.com/footer-logo.png" alt="" /></a>
          <p className='footer-p'>Marasi Drive 51, DAMAC
Business Tower 907, 
Business Bay, Dubai UAE</p>
        </div>
        </div>
        <div className="media-icons">
          <a href="https://www.facebook.com/mediadunesofficial"><i className="fab fa-facebook-f"></i></a>
          <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2Fmediadunes%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1QaddXEiwEG0KnMJupOpAIGfPzr0ooGr1I0GYzybVvpPWMenAyfD1TYlQ_aem_xX2f48AHie7nJfekzUjJYA&h=AT3E8LSgv7WPpQAtUMpc7fuXUuXuTYaLWcPdoFay3teXpRFUqQAzy-a6ZhG1_KXbUSg-ceyl12-1pD0kAkCv0XFZ2r78VUZUpyu6-fhTK35HW5KhU645bNJv6SPejDQVhrWx"><i className="fab fa-twitter"></i></a>
          <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmediadunesofficial%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1QaddXEiwEG0KnMJupOpAIGfPzr0ooGr1I0GYzybVvpPWMenAyfD1TYlQ_aem_xX2f48AHie7nJfekzUjJYA&h=AT28kc4b50X0xJ3_67wxPpcfqZY7IVDguTHEMFMd8LkQaT6OWa4YfbovctsaHJ8zLmcuk1ZqiasQceVhlFX3tfpsx7yGOmoSTvuyC2KUH-e6P_XgSZVh4RuuK6DoodtNYe7n"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40mediadunesofficial%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3lqtr9JJgaLeN29-MpBMroP-Im5LlwHWcU0YSLqBkLSrEJUK9c5Tm2UjM_aem_4SXh7zIF2KBzV6RJnY8B4g&h=AT2pW-hNkS-Tov1z9mYqyECCP05Hgl_iou9svCmvrph6BCDz7vXSN9eX6_75Asy40HT-ys3gmfHliSU9GJHdst9QW7LvnDPKi1uxeO7aM28Zo8s75cF7AHcaEQVYA2rQZfj5"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="/price">Price</a></li>
          <li><a href="/contactus">Contact Us</a></li>
          <li><a href="/blogs">Blogs</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li><a href="/ourwork">App design</a></li>
          <li><a href="/Software-team">Web design</a></li>
          <li><a href="/logos">Logo design</a></li>
          <li><a href="/flyers">Banner design</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><a href="/uiuxdesign">UI/UX Design</a></li>
          <li><a href="/Digital-Design">Digital Ad Design</a></li>
          <li><a href="/Infographic-Design">Infographic Design</a></li>
          <li><a href="/Social-Media-Design">Social Media Design</a></li>
        </ul>
        {/* <ul className="box">
          <li className="link_name">Courses</li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Photoshop</a></li>
        </ul> */}
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright &#169; 2021 <a href="#">Mediadunes</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
