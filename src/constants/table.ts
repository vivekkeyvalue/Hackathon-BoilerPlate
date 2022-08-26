const txnTableHeaders = [
  {
    label: 'Date & Time',
    value: 'date',
    type: 'date',
    width: '25%'
  },
  {
    label: 'Id',
    value: 'id',
    width: '25%'
  },
  {
    label: 'Destination',
    value: 'destination',
    width: '25%'
  },
  {
    label: 'Amount',
    value: 'amount',
    width: '25%'
  }
];

const refundTableHeaders = [
  {
    label: 'Date & Time',
    value: 'date',
    type: 'date',
    width: '18%'
  },
  {
    label: 'ID',
    value: 'id',
    width: '30%'
  },
  {
    label: 'Ref.ID',
    value: 'reference_id',
    width: '20%'
  },
  {
    label: 'Amount',
    value: 'amount',
    width: '17%'
  }
];

export { txnTableHeaders, refundTableHeaders };
