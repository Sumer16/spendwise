// react-router-dom imports
import { useLoaderData } from 'react-router-dom';

// helper function
import { deleteItem, fetchData } from '../helpers';

// components
import Table from '../components/Table';

// library imports
import { toast } from 'react-toastify';

// loader function
// Loades data when this route is visited
export async function expensesLoader() {
  const expenses = await fetchData('expenses');

  return { expenses };
}
 
// action function
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expenses',
        id: values.expenseId,
      });
      return toast.success('Expense deleted!');
    } catch (e) {
      throw new Error('There was a problem deleting your expense.');
    }
  }
}

const Expenses = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>All expenses</h1>
      { 
        expenses && expenses.length > 0 ? (
          <div className="grid-md">
            <h2>Recent Expenses <small>({ expenses.length } total)</small></h2>
            <Table expenses={expenses} />
          </div>
        ) : (
          <p>No Expenses to show</p>
        )
      }
    </div>
  )
}

export default Expenses;
