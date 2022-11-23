import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { Toaster } from 'react-hot-toast';

export function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}
