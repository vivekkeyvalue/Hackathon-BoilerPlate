import { PaymentStatus, TransactionTypes } from "pages/home/types";

export const splitAmount = (amount) => {
  const amountSplit = String(amount).split('.');

  return {
    integerPart: amountSplit[0],
    decimalPart: amountSplit[1]
  };
};


//TODO: to be removed after API integration
export const TransactionDetailsProps = {
  transactionType: TransactionTypes.PAY_IN,
  fromAddressLogo: 'icons/metamask-logo.svg',
  fromAddressName: 'Metamask',
  toAddressName: 'XYZ Company',
  transactionDate: 'Jul 4 at 1:53 PM',
  paymentStatus: PaymentStatus.SUCCESS,
  transactionId: 'xyz_88',
  referenceId: 'H778290901H',
  orderId: 'ZAJ453129913iL4',
  currencyCode: '$',
  amount: '354.08',
  onRefundClick: () => console.log('refund clicked')
};
