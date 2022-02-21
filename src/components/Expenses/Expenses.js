import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
}

export default Expenses;
