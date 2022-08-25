import { FC } from 'react';

import { splitAmount } from 'utils/common';

import './style.css';

interface CardSummaryProps {
  isVisible: boolean;
  currencyType?: string;
  cryptoType?: string;
  currencylogo?: string;
  cryptoLogo?: string;
  currencyAmount?: string;
  cryptoAmount?: string;
}

const CardSummary: FC<CardSummaryProps> = ({
  isVisible,
  currencyType,
  cryptoType,
  currencylogo,
  cryptoLogo,
  currencyAmount,
  cryptoAmount
}) => {
  const currencyAmountSplit = splitAmount(currencyAmount);
  const cryptoAmountSplit = splitAmount(cryptoAmount);

  return (
    <div className={`summaryCard  ${isVisible ? `h-[120px]` : `h-0`}`}>
      <hr className='border-dotted mt-5'></hr>
      <div className='rounded-lg bg-[#F8F8F8] p-5 text-sm mt-5 relative'>
        <div className='absolute top-1.5 right-4 flex'>
          <div className='w-1.25 h-1.25 mr-1'>
            <img src={currencylogo} alt='Currency logo' />
          </div>
          <div className='w-1.25 h-1.25'>
            <img src={cryptoLogo} alt='Currency logo' />
          </div>
        </div>
        <div className='text-[#7A7A7A] font-bold text-sm'>
          USD + USDC
          <div className='text-[#1F1F2F] text-sm'>
            {`${currencyType} `}
            <span className='text-sm font-semibold'>
              {currencyAmountSplit.integerPart}
              {currencyAmountSplit.decimalPart ? (
                <span className='font-thin'>.{currencyAmountSplit.decimalPart}</span>
              ) : (
                <span className='font-thin'>.00</span>
              )}
            </span>
            {` + ${cryptoType} `}
            <span className='text-sm font-semibold'>
              {cryptoAmountSplit.integerPart}
              {cryptoAmountSplit.decimalPart ? (
                <span className=' font-thin'>.{cryptoAmountSplit.decimalPart}</span>
              ) : (
                <span className='font-thin'>.00</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSummary;
