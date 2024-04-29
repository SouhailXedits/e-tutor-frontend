import { ToastContainer } from "react-toastify";
import Router from "../modules/shared/routes";
import QueryClientProvider from "../providers/queryClientProvider";
import "react-toastify/dist/ReactToastify.css";

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
