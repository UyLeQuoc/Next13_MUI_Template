const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__logo'>
          <span className='text'>Fiverr</span>
          <span className='dot'>.</span>
        </div>
        <div className='navbar__menu'>
          <span className='navbar__menu__item'>Fiverr Business</span>
          <span className='navbar__menu__item'>Explore</span>
          <span className='navbar__menu__item'>English</span>
          <span className='navbar__menu__item'>Sign In</span>
          <span className='navbar__menu__item'>Become a Seller</span>
          <button className='navbar__menu__item'>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar