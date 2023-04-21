// react-router-dom imports
import { useLoaderData } from 'react-router-dom';

// helper function
import { createBudget, fetchData, waitwa } from '../helpers';

// components
import Intro from '../components/Intro';
import AddBudgetForm from '../components/AddBudgetForm';

// library imports
import { toast } from 'react-toastify';

// loader function
// Loades data when this route is visited
export function dashboardLoader() {
  const userName = fetchData('userName');
  const budgets = fetchData('budgets');
  return { userName, budgets };
}

// action
// Handles any action submitted by forms to this page
export async function dashboardAction({ request }) {
  await waitwa();
  
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === 'newUser') {
    try {
      localStorage.setItem('userName', JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error('There was a problem creating your account.');
    }
  }

  // create budget
  if (_action === 'createBudget') {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success('Budget created!');
    } catch (e) {
      throw new Error('There was a problem creating your budget.');
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>Welcome back, <span className="accent">{userName}</span></h1>
          <div className="grid-sm">
            {/* {budgets ? () : ()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (<Intro />)}
    </>
  )
}

export default Dashboard;
