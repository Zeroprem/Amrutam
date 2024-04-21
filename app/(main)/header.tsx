import Image from "next/image";

const Nav = () => {
    return (
     <header className="padding-x py-8 fixed z-10 w-full h-24 bg-[#FFF7E2]  ">
      <nav className="flex  justify-between items-center max-container">
          <a href="/">
              <Image src="/logo.png" alt="logo" width={259} height={49} />
          </a>
          <ul className="flex justify-center items-center gap-16 max-lg">
         <li className="font-medium  text-[#474747]" ><a href="/">Home </a></li>
        <li className="font-bold text-[#3A643B]"><a href="/">Find Doctors </a></li>
        <li className="font-medium  text-[#474747]"><a href="/">About Us </a></li>
  
           </ul>
           <div className=" lg:flex hidden justify-center items-center gap-7 max-lg">
              <button className="border-[1px] border-[#3A643B] rounded-xl  w-[118px] h-[56px] p-2"><span className="font-medium text-2xl">Login</span></button>
              <button className="rounded-xl bg-[#3A643B]  w-40 p-2 h-[56px]"> <span className="font-medium text-2xl text-white">Sign-Up</span></button>
           </div>
      </nav>
     </header>
    )
  }
  
  export default Nav;