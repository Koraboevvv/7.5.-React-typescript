import { memo } from 'react';
import Main from './components/form/Main';

const App = () => {
  return (
    <div className="App">
      <Main/>
    </div>
  );
};

export default memo(App);