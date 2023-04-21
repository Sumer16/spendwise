export const waitwa = () => new Promise(res => setTimeout(res, Math.random() * 2000));

// colors
const generateRandomColor = () => {
  // If budgets is undefined or null then optional chaining '?' will return undefined instead of an error.
  const existingBudgetLen = fetchData('budgets')?.length ?? 0;
  return `${existingBudgetLen * 34} 65% 50%`; // HSL
}

// localStorage functions are added here
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

// create budget
export const createBudget = ({ name, amount }) => {
  // crypto allows you to use in-built js functions to generate random uuid.
  const newItem = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  }

  // Null coalescing -> returns its right-hand side operand when it's left-hand side operand is null or undefined.
  const existingBudgets = fetchData('budgets') ?? [];
  return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]));
}

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
}
