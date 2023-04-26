// react-router-dom imports
import { redirect } from 'react-router-dom';

// helper function
import { deleteItem, getAllMatchingItems } from '../helpers';

// library imports
import { toast } from 'react-toastify';

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: 'budgets',
      id: params.id,
    });

    // This function helps to remove all the expenses that are
    // associated to the budget. As we know, when we try to delete
    // budget we can run into an error as there are expenses that 
    // are associated with the budget.
    const assocExpenses = getAllMatchingItems({
      category: 'expenses',
      key: 'budgetId',
      value: params.id,
    });

    assocExpenses.forEach((expense) => {
      deleteItem({
        key: 'expenses',
        id: expense.id,
      });
    });

    toast.success('Budget deleted successfully!');
  } catch (e) {
    throw new Error('There was a problem deleting your budget.');
  }

  //return redirect
  return redirect('/');
}