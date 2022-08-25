import React from 'react';

const Home: React.FC = () => (
  <div className='flex flex-col h-full px-[40px]'>
    <div className='text-[24px] mt-[30px]'>
      Hello Alan
    </div>
    <div className='text-[14px] text-[#707EAE]'>
      4.45 pm 19 Jan 2022
    </div>

    <div className='rounded-[24px] mt-[30px]'>
      <div className='text-[20px] font-semibold leading-[20px]'>
        Post a Plan
      </div>
      <div className='flex justify-between mt-[20px] flex-wrap '>
        Filters
      </div>
    </div>
    <div className='text-[24px] mt-[26px] mb-[30px]'>
      Recent Responses
    </div>
  </div>
);


export default Home;
