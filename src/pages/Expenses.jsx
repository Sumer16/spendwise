// react-router-dom imports
import { useLoaderData } from 'react-router-dom';

// helper function
import { fetchData } from '../helpers';

// components
import Table from '../components/Table';

// loader function
// Loades data when this route is visited
export function expensesLoader() {
  const expenses = fetchData('expenses');

  return { expenses };
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
