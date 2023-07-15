import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  TableCaption,
  TableBody,
  TableRow,
  TableType,
  TableAmount,
  TableCurrency,
} from './TransactionsHistory.styled';

export const TransactionsHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <TableRow>
          <TableCaption>Type</TableCaption>
          <TableCaption>Amount</TableCaption>
          <TableCaption>Currency</TableCaption>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableType>{type}</TableType>
            <TableAmount>{amount}</TableAmount>
            <TableCurrency>{currency}</TableCurrency>
          </TableRow>
        ))}
      </TableBody>
    </TransactionsTable>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
