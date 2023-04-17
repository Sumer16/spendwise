// react-router-dom imports
import { Outlet, useLoaderData } from 'react-router-dom';

// assets
import wave from '../assets/wave.svg';

// componenets
import Nav from '../components/Nav';

// helper function
import { fetchData } from '../helpers';

// loader function
export function mainLoader() {
  const userName = fetchData('userName');
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  )
}

export default Main;
