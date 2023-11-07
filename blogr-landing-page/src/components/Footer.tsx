import React from 'react'

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-verydarkblue lg:py-0 py-10 lg:h-[80.5rem]" id="container">
        
        <h1 className='font-bold text-white pb-10 lg:pb-0 md:text-[2.5rem] sm:text-[2.3rem] relative lg:top-[17.6rem] lg:left-[-27rem]
        lg:text-[2.7rem] 2xl:left-[-36rem]'>
            Blogr
        </h1>

        <div className="grid grid-rows-3 space-y-[3rem] lg:space-y-0 sm:text-[1.1rem] md:text-[1.2rem] lg:grid-cols-3
        lg:space-x-[8rem] lg:pl-[12rem] relative lg:top-[14rem] 2xl:text-[1.3rem] 2xl:space-x-[12rem]" id="items">
            <div className="text-center" id="firt-table">
                <ul>
                    <li className='flex flex-col space-y-4 text-grayishblue lg:text-start'>
                        <h3 className='text-white font-medium pb-5'>Product</h3>
                        <button className='hover:underline duration-100 lg:text-start'>Overview</button>
                        <button className='hover:underline duration-100 lg:text-start'>Pricing</button>
                        <button className='hover:underline duration-100 lg:text-start'>Marketplace</button>
                        <button className='hover:underline duration-100 lg:text-start'>Features</button>
                        <button className='hover:underline duration-100 lg:text-start'>Integrations</button>
                    </li>
                </ul>
            </div>

            <div className="text-center" id="second-table">
                <ul>
                    <li className='flex flex-col space-y-4 text-grayishblue lg:text-start'>
                        <h3 className='text-white font-medium pb-5'>Company</h3>
                        <button className='hover:underline duration-100 lg:text-start'>About</button>
                        <button className='hover:underline duration-100 lg:text-start'>Team</button>
                        <button className='hover:underline duration-100 lg:text-start'>Blog</button>
                        <button className='hover:underline duration-100 lg:text-start'>Careers</button>
                    </li>
                </ul>
            </div>

            <div className="text-center" id="third-table">
                <ul>
                    <li className='flex flex-col space-y-4 text-grayishblue lg:text-start'>
                        <h3 className='text-white font-medium pb-5'>Connect</h3>
                        <button className='hover:underline duration-100 lg:text-start'>Contact</button>
                        <button className='hover:underline duration-100 lg:text-start'>Newsletter</button>
                        <button className='hover:underline duration-100 lg:text-start'>LinkedIn</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
