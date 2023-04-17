// react-router-dom imports
import { useLoaderData } from 'react-router-dom';

// helper function
import { fetchData } from '../helpers';

// loader function
export function dashboardLoader() {
  const userName = fetchData('userName');
  return { userName }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  )
}

export default Dashboard;
