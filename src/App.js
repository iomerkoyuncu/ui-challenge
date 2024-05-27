import React from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import Products from './components/Products';
import Check from './assets/check.svg';

function App() {

  return (
    <>
      <Header />
      <Featured />
      <Products />
      <div className='flex justify-center items-center'>
        <div className='flex max-w-[1440px] h-[816px] justify-center items-center px-40 py-20'>
          <div className='max-w-[1280px] w-full h-[416px] rounded-[30px] p-20 shadow-custom-3 shadow-custom-4'>
            <div className=' flex-col gap-6 justify-center items-center w-[520px]'>
              <div className='w-full'>
                <span className='font-extrabold text-[56px]'>Why join us</span>
              </div>
              <div>
                <div className='flex justify-start items-center'>
                  <img src={Check} alt='Check' />
                  <p className='text-[20px] pl-4'>Est et in pharetra magna adipiscing ornare aliquam.</p>
                </div>
                <div className='flex justify-start items-center'>
                  <img src={Check} alt='Check' />
                  <p className='text-[20px] pl-4'>Tellus arcu sed consequat ac velit ut eu blandit.</p>
                </div>
                <div className='flex justify-start items-center'>
                  <img src={Check} alt='Check' />
                  <p className='text-[20px] pl-4'>Ullamcorper ornare in et egestas dolor orci.</p>
                </div>
              </div>
              <div>
                <button className='h-[56px] p-4 rounded-lg border-2 border-[#78350F] flex justify-center items-center'>
                  <span className='text-[#78350F] px-4 font-medium text-[20px]'>
                    Sign Up Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
