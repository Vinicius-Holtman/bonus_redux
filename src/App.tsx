import { Provider } from 'react-redux'
import store from './store';

import './App.css';
import { Catalog } from './components/Catalog';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
