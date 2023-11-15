import { Outlet } from "react-router";
import SearchHeader from "./component/SearchHeader";
import { QueryClient, QueryClientProvider } from "react-query";
import { DarkModeContextProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <DarkModeContextProvider>
        <SearchHeader />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </DarkModeContextProvider>
    </>
  );
}

export default App;
