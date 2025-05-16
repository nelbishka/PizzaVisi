import Logo from "../Assets/Logo.png"

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="footer-section-one">
        <div className='footer-logo-container'>
          <img src={Logo} alt="" />
        </div>
        <p style={{color: '#4c4c4c'}}>&copy; All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer