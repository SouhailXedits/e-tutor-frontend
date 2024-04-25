import { ToastContainer } from 'react-toastify';
import { QueryClient } from '@tanstack/react-query';
import Router from '../modules/shared/routes';
import 'react-toastify/dist/ReactToastify.css';
import QueryClientProvider from '../providers/queryClientProvider';

function App() {
  return (
    <QueryClientProvider>
      <div className="font-inter h-screen pb-[70px]">
        <Router />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
