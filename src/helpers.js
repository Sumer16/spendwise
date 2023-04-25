export const waitwa = () => new Promise(res => setTimeout(res, Math.random() * 500));

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

// create expense
export const createExpense = ({ name, amount, budgetId }) => {
  // crypto allows you to use in-built js functions to generate random uuid.
  const newItem = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId
  }

  // Null coalescing -> returns its right-hand side operand when it's left-hand side operand is null or undefined.
  const existingExpenses = fetchData('expenses') ?? [];
  return localStorage.setItem('expenses', JSON.stringify([...existingExpenses, newItem]));
}

// delete item
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
}

// Total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData('expenses') ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // Check if expense.id === budgetId
    if (expense.budgetId !== budgetId) return acc;

    // Add the current amt to total
    return acc += expense.amount;
  }, 0);
  return budgetSpent;
}

// Format Currency
export const formatCurrency = (amt) => {
  // undefined is used so that where ever this app is opened they get the
  // string converted in to their local language.
  return amt.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  });
}

// Format Percentage
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0,
  });
}

// Format date
export const formatDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();

// Get all items from localstorage
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
}
