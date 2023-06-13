import React from 'react'


const Navbar = () => {
  return (
    <nav className='w-[100%] h-[15vh] flex justify-center'>
      <div className="nav-wrapper fixed w-5/6 h-[60px] flex flex-row items-center rounded-full justify-between  mt-7 bg-transparent backdrop-blur-xl backdrop-contrast-50">
        <a href="#" className="brand-logo text-3xl font-bold mx-8 ">Univrse</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down m-3 flex items-center w-1/3 justify-evenly ">
          <li><a href="#" className=" font-normal text-xl">Home</a></li>
          <li><a href="#" className='font-normal text-xl'>About</a></li>
          <li><a href="#" className='font-normal text-xl'>Product</a></li>
        </ul>
        <button className='rounded-2xl bg-primary-500 h-10 w-40 font-semibold text-xl mx-8'>Coming Soon</button>
      </div>

    </nav>
  )
}

export default Navbar