import './theme/global.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routing/Router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
