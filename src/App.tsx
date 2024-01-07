
import { Outlet } from 'react-router-dom';
import Menu from './shared/menu';

const App = () => {
  return (
    <>
    <Menu/>
    <Outlet />
    </>
  );
}
export default App;
