export type Country = {
  name: string;
};
export enum TransactionTypes {
  PAY_IN = 'Pay in',
  PAY_OUT = 'Pay out'
}
export enum PaymentStatus {
  PENDING = 'pending',
  FAILED = 'failed',
  SUCCESS = 'success'
}
