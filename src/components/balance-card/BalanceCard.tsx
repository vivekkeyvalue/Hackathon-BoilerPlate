import { FC, useState } from 'react';

import { splitAmount } from 'utils/common';
import CardSummary from './CardSummary';

interface BalanceCardProps {
  countryLogoUrl?: string;
  currencyCode?: string;
  amount?: string;
  className?: string;
}

const BalanceCard: FC<BalanceCardProps> = ({ countryLogoUrl, currencyCode, amount, className }) => {
  const [showCardSummary, setShowCardSummary] = useState<boolean>(false);

  const { integerPart, decimalPart } = splitAmount(amount);

  return (
    <div className={`rounded-lg shadow-lg bg-white p-[22px] w-[430px] relative h-fit ${className}`}>
      <div className='flex justify-between'>
        <div className='w-[50px] h-[50px]'>
          <img src={countryLogoUrl} alt='Country-logo' />
        </div>
        <div className='flex flex-col items-end'>
          <div className='font-normal text-sm text-[#9D9DAE]'>TOTAL BALANCE</div>
          <div className='flex'>
            <div className='text-sm items-center mr-1 flex'>{currencyCode}</div>
            <span className='text-3xl font-bold'>
              {integerPart}
              {decimalPart ? (
                <span className='text-xl font-light'>.{decimalPart}</span>
              ) : (
                <span className='text-xl font-light'>.00</span>
              )}
            </span>
          </div>
        </div>
      </div>
      <img
        src={!showCardSummary ? `icons/down-arrow-icon.svg` : `icons/up-arrow-icon.svg`}
        alt='down arrow icon'
        role='presentation'
        className='cursor-pointer ml-auto mt-14'
        onClick={() => setShowCardSummary(!showCardSummary)}
      />
      {/* TODO: dummy props need to be removed */}
      <CardSummary
        isVisible={showCardSummary}
        currencyType='$'
        cryptoType='USDC'
        currencylogo='icons/currency-logo.svg'
        cryptoLogo='icons/crypto-logo.svg'
        currencyAmount='2715.03'
        cryptoAmount='10000.00'
      />
    </div>
  );
};

export default BalanceCard;
