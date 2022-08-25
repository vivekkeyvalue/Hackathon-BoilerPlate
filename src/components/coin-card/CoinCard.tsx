import { FC } from 'react';

import { splitAmount } from 'utils/common';

interface CoinCardProps {
  countryLogoUrl?: string;
  currencyCode?: string;
  amount?: string;
  className?: string;
}

const CoinCard: FC<CoinCardProps> = ({ amount, className }) => {
  const { integerPart, decimalPart } = splitAmount(amount);

  console.group(integerPart, decimalPart);

  return (
    <div className={`flex shadow bg-white  min-w-[220px] px-[21px] py-[28px] h-fit rounded-[8px] ${className}`}>
      <div className='bg-[#F4F7FF] w-[44px] h-[44px] rounded-[4px]'>
      </div>
      <div className='ml-[17px]'>
        <div className='text-[#4F4F4F] font-semibold leading-[16px]'>Ethereum</div>
        <div className='text-[#1F1F2F] text-[18px] font-semibold leading-[16px] mt-[10px]'>0.03994 ETH</div>
      </div>
    </div>
  );
};

export default CoinCard;
