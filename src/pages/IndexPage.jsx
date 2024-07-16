import React from 'react'
import hero from "../assets/hero.png";
import za from "../assets/za.png";
import zai from "../assets/zai.png";
import icon from "../assets/icon.png";
import zaid from "../assets/zaid.png";
import image from "../assets/image.png";
import am from "../assets/am.png";
import clock from "../assets/clock.png";
import heart from "../assets/heart.png";
import ama from "../assets/ama.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import { Link } from 'react-router-dom';





const IndexPage = () => {
    
  return (
     <div>
    <div className=' flex items-center   mx-auto relative overflow-hidden max-w-[1170px] h-[937px]'>
        <div className='ml-[10px] max-w-[650px]'>
     <p className='text-[#FF3147] text-[30px]'> AWAED WINNING  </p>
     <p className='text-[60px] font-bold '> DIGITAL MARKETHING AGAENCY</p>
     <p className='w-[584px]'> Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
     <Link to={"/contact"} ><button className='bg-[#FF3147] py-[15px] px-[28px] my-14 text-white '>CONTACT US</button></Link>
     </div>
    
        <img src={hero} alt='hero' className='absolute right-0   h-[737px] w-[487px]' />
     
    </div>
    <div className='h-[1030px] '>
    <div className='w-[1174px] h-[806px]  mx-auto'>
        <p className='text-[#FF3147] text-[24px] pt-[100px]'>WHAT WE DO</p>
        <div className='flex gap-[145px] py-[40px]'>
            <p className='h-[110px] w-[442px] text-[45px] font-bold '>SERVICES PROVIDE FOR YOU</p>
            <p className='w-[584px] h-[84px] pt-[47px] text-[16px]'>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
        </div>
        
        <div className='flex gap-[30px] pt-[60px]'>
        
            <img src={za} alt='za' className='' />
            <img src={zai} alt='zai' />
            <div className='w-[370px] h-[526px] bg-[#FF3147] rounded-[5px]'>
            <div className='flex justify-center mt-[116px]'>
            <img src={icon} alt='icon'  />
            
            </div>
            <p className='text-center py-[36.42px] text-[24px] text-white'> WEB DEVELOPMENT </p>
            <p className='text-center text-[16px] text-white '>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
            <div className='flex justify-center py-[53.92px]  '>
                <button className='bg-[white] text-[#FF3147] py-[15px] px-[21]text-[14px] w-[185px] h-[50px]'>READ MORE ---</button>>
            </div>
            </div>
            
        </div>
        
    </div>
    </div>
    <div className='h-[1320px]'>
        <div className='w-[1174px] h-[806px]  mx-auto '>
            <div className='flex justify-center pt-[65px]'>
            <p className='text-[#FF3147] text-[24px]'>WHY CHOOSE US</p>
            </div>
            <div className='flex justify-center py-[35px]'>
                <p className='text-[45px] font-bold '>WHY WE ARE BEST</p>
            </div>
            <div className='flex gap-[48px] py-[40px]'>
            <div className='w-[256px] h-[256px] '>
            <img src={a1} alt='a1'  className='w-[72px] h-[72px]'  />
            <p className='py-[20px] font-bold text-[20px]'>Clarified Vision & Target</p>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            <div className='w-[256px] h-[256px]'>
            <img src={a2} alt='a2' className='w-[72px] h-[72px]'  />
            <p className='py-[20px] font-bold text-[20px]'>High Performance</p>
            <p className='text-[16px]'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            <div className='w-[256px] h-[256px]'>
            <img src={a3} alt='a3' className='w-[72px] h-[72px]'  />
            <p className='py-[20px] font-bold text-[20px]'>Maintain Security</p>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            <div className='w-[256px] h-[256px]'>
            <img src={zaid} alt='zaid' className='w-[72px] h-[72px]'  />
            <p className='py-[20px] font-bold text-[20px]'>Better Strategy & Quality</p>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>



            </div>
            <div className=''>
            <div className='flex justify-center'>
                <p className='text-[24px] text-[#FF3147]'>OUR PROJECT</p>
            </div>
            <div className='flex justify-center'>
                <p className='text-[45px] font-bold'>WHY WE ARE BEST</p>
            </div>
            <div className='flex'>
                <img src={image} alt='image' className='w-[770px] h-[567px]' />
                <div className=''>
                    <div className='hover:bg-[#FF3147] hover:text-white  w-[370px] h-[189px] bg-[#F6F6F6]'>
                     <div className='flex justify-center'>
                        <p className='text-[20px] font-bold pt-[34px] '>Genderless Kei – Japan’s Hot</p>
                     </div>
                     <div className='flex justify-center'>
                        <p className='px-[36px] pt-[20px]'>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                     </div>
                    </div>
                    <div className='hover:bg-[#FF3147] hover:text-white  w-[370px] h-[189px] bg-[#F6F6F6]'>
                     <div className='flex justify-center'>
                        <p className='text-[20px] font-bold pt-[34px] '>Better Strategy & Quality</p>
                     </div>
                     <div className='flex justify-center'>
                        <p className='px-[36px] pt-[20px]'>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                     </div>
                    </div>
                    <div className='hover:bg-[#FF3147] hover:text-white  w-[370px] h-[189px] bg-[#F6F6F6]'>
                     <div className='flex justify-center'>
                        <p className='text-[20px] font-bold pt-[34px] '>Genderless Kei – Japan’s Hot</p>
                     </div>
                     <div className='flex justify-center'>
                        <p className='px-[36px] pt-[20px]'>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                     </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
        
    </div>
    <div className=' bg-[#FAFAFA] '>
        <div className='w-[1174px] h-[602px] bg-[#FAFAFA] mx-auto'> 
            <div className='flex justify-center pt-[120px]'>
                <p className='text-[24px] text-[#FF3147]'>EXPERTS GROWTS</p>
            </div>
            <div className='flex justify-center py-[40px]'>
                <p className='text-[45px] font-bold'>OUR COMPANY GROWTH</p>
            </div>
            <div className='flex gap-[30px]'>
                <div className='w-[270px] h-[233px]  hover:shadow-2xl '>
                    <div className='flex justify-center pt-[33.35px]'>
                        <img src={heart} alt='heart' className='w-[39px] h-[34px]' />
                        
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-[60px]'>199 +</p>
                    </div>
                    <div className='flex justify-center '>
                        <p className='text-[20px]'>Staticfied Customers</p>
                    </div>
                </div>
                <div className='w-[270px] h-[233px] hover:shadow-2xl   '>
                    <div className='flex justify-center pt-[33.35px]'>
                        <img src={clock} alt='clock' className='w-[39px] h-[34px]' />
                        
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-[60px]'>1591+</p>
                    </div>
                    <div className='flex justify-center '>
                        <p className='text-[20px]'>Days Of Operation</p>
                    </div>
                </div>
                <div className='w-[270px] h-[233px] hover:shadow-2xl  '>
                    <div className='flex justify-center pt-[33.35px]'>
                        <img src={ama} alt='ama' className='w-[39px] h-[34px]' />
                        
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-[60px]'>283 +</p>
                    </div>
                    <div className='flex justify-center '>
                        <p className='text-[20px]'>Complete Project</p>
                    </div>
                </div>
                <div className='w-[270px] h-[233px] hover:shadow-2xl  '>
                    <div className='flex justify-center pt-[33.35px]'>
                        <img src={am} alt='am' className='w-[39px] h-[34px]' />
                        
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-[60px]'>75 +</p>
                    </div>
                    <div className='flex justify-center '>
                        <p className='text-[20px]'>Win Awards</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='h-[500px] w-[831px] mx-auto'>
        <div className='flex justify-center pt-[100px]'>
         <p className='text-[#FF3147] text-[24px]'>CLIENT'S FEEDBACK</p>
        </div>
        <div className='flex justify-center pt-[45px]'>
            <p className='text-[45px] font-bold'>PEOPLE SAY'S ABOUT US !</p>
        </div>
        <div className='flex justify-center w-[700px] pt-[76px]'>
            <p className='text-[20px] '>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
        </div>
        <div className='pt-[24px]'>
            <p className=' text-[20px] opacity-[1px]'><span className='text-[#FF3147] font-bold'>JANNAT TUMPA</span> - COO, AMERIMAR ENTERPRISES, INC . </p>
        </div>
    </div>
    </div>
    
     
  )
}

export default IndexPage