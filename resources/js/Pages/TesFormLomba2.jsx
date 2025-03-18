import React from 'react'
import ComponentFormLomba from '@/Components/CSS-HMIF/FormCSS/ComponentFormLomba'
import cssLogo from '../../../public/CSS-HMIF/images/formCSS/Group.svg'
import cssText from '../../../public/CSS-HMIF/images/formCSS/Computer Science Shelter.svg'
import batikPink from '../../../public/CSS-HMIF/images/formCSS/batikPink.svg'
import orangKartun from '../../../public/CSS-HMIF/images/formCSS/orangKartun.svg'
import pialaKartun from '../../../public/CSS-HMIF/images/formCSS/pialaKartun.svg'
import pathEllipse from '../../../public/CSS-HMIF/images/formCSS/pathEllipse.svg'
import '@/Components/CSS-HMIF/FormCSS/FormColors.css'

function TesFormLomba2() {
  return (
    <div className='md:h-screen w-screen bg-purple-800 h-fit'
        style={{
            backgroundImage: `url(${batikPink})`
         }}
    >

      
      <div className='md:h-screen w-screen md:p-12 bg-no-repeat'
        style={{
          backgroundImage: `url(${pathEllipse})`
        }}
      >

        <div className='md:relative md:py-4'>
          <div className='flex justify-center items-center md:justify-start md:items-start'>
            <div className='flex flex-col z-30'>
                <div className='flex items-center md:justify-start justify-center gap-4 gradient-text font-kanit font-bold md:py-0 py-4'>
                    <img src={cssLogo} />
                    {/* <h1 className=' text-[28px] md:text-[36px]'>Computer<br/>Science<br/>Shelter</h1> */}
                    <img src={cssText} />
                </div>

                <div className='overflow-scroll overflow-x-hidden md:mt-6 md:h-[415px] md:w-[600px]'>
                    <ComponentFormLomba />
                </div>
            </div>
          </div>
           
          <div className='best-position'>
                <img 
                src={orangKartun} 
                className='md:w-[400px] hidden md:block z-20'
              />
            </div>

        </div>

      <img src={pialaKartun} className='md:w-[550px] md:fixed md:bottom-0 md:right-0 z-10' alt="Piala Kartun" />
    </div>
    </div>
  )
}

export default TesFormLomba2
