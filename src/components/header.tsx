import React from 'react'

function Header() {
  return (
    <div>
    <header>
      <div className="bg-[#A29875] flex justify-between items-center px-5 h-[10vh]">
        <div className="font-mono text-white font-extrabold text-[48px]">
          purity
        </div>
        <div>
          <input className="w-[250%] rounded-full p-2.5" type="input" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…  " />
        </div>
        <div className="flex ">
          <div className="px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>
          <div className="px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </div>
          <div className="px-4"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M2 2H3.30116C4.48672 2 5.0795 2 5.4814 2.37142C5.88331 2.74285 5.96165 3.36307 6.11834 4.60351L7.24573 13.5287C7.45464 15.1826 7.5591 16.0095 8.09497 16.5048C8.63085 17 9.42122 17 11.002 17H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <circle cx="10.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
              <circle cx="17.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
              <path d="M20 14H14C13.0572 14 12.5858 14 12.2929 13.6339C12 13.2678 12 12.6785 12 11.5C12 10.3215 12 9.73223 12.2929 9.36612C12.5858 9 13.0572 9 14 9H20C20.9428 9 21.4142 9 21.7071 9.36612C22 9.73223 22 10.3215 22 11.5C22 12.6785 22 13.2678 21.7071 13.6339C21.4142 14 20.9428 14 20 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 9H12C11.0572 9 10.5858 9 10.2929 8.63388C10 8.26777 10 7.67851 10 6.5C10 5.32149 10 4.73223 10.2929 4.36612C10.5858 4 11.0572 4 12 4H18C18.9428 4 19.4142 4 19.7071 4.36612C20 4.73223 20 5.32149 20 6.5C20 7.67851 20 8.26777 19.7071 8.63388C19.4142 9 18.9428 9 18 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </header>


    </div>
  )
}

export default Header
