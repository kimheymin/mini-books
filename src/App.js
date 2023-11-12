import { Outlet } from 'react-router';
import './App.css';
import SearchHeader from './component/SearchHeader';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <>
    <SearchHeader />
    <QueryClientProvider client={queryClient}>
    <Outlet />
    </QueryClientProvider>
    </>
  );
}

export default App;
