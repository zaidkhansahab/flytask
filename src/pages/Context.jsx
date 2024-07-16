import React from 'react'

const Context = () => {
  return (
    <div className='p-7 bg-[#F1F1F1]'>
        <div className='w-[450px] h-[422px] px-[30px]  mx-auto mt-5 border-[5px] border-gray-50 bg-[#FFFFFF]'>
          <p className='pt-[31px] font-bold text-[30px] '>Talk to us</p>
          <div className=' py-[30px]  '>
          <input className='border-b-2 text-[20px] w-[350px] ' type='text' placeholder='Workemail' />
          </div>
          <div className='flex gap-2  py-[30px] ' >
            <input className='border-b-2 text-[16px]  ' type="text"  placeholder='First name' />
            <input className='border-b-2 text-[16px]  ' type='text' placeholder='Last name ' />
          </div>
          <div>
          <div className="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-[#FF3366] rounded focus:ring-[#FF3366] dark:focus:ring-[#FF3366] dark:ring-offset-[#FF3366] focus:ring-2 dark:bg-[#FF3366] dark:border-[#FF3366]"/>
    <label className="ms-2 text-sm font-medium text-gray-[#FF3366] dark:text-gray-300">I agree to Fyle's terms and conditions, and provide consent to send me communication</label>
          </div>
            
          </div>
          <div className='flex justify-center  py-[30px]'>
            <button className='px-[131.9px] py-[14px] bg-[#FF3366] text-white font-bold text-[22px] rounded-md'>Contact Us</button>
          </div>
        </div>
    </div>
  )
}

export default Context