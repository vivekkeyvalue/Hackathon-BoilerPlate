import { FC } from 'react';
import { RequestDetails } from 'types';

import './style.css';

interface TransactionSummaryProps {
  toAddressName?: string;
  onRefundClick?: () => void;
  onClose?: () => void;
  selectedRow?: RequestDetails;
}

const TransactionSummary: FC<TransactionSummaryProps> = ({ selectedRow, onClose }) => {

  return (
    <div className={`rounded-[16px] shadow-lg p-[18px] w-[493px] relative bg-white simple_animation`}>
      <div className='absolute top-[10px] right-[10px] cursor-pointer' role='presentation' onClick={onClose}>
        <img src='icons/close-icon.svg' alt='Close icon' />
      </div>
      <div className='px-[21px] flex flex-col pt-[24px] justify-start'>
        <div className='text-4xl text-[#3E8C31] font-bold flex justify-start align-middle text-center'>
          <div>{selectedRow?.amount}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
