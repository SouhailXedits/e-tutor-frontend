import { ToastContainer } from "react-toastify";
import Router from "../modules/shared/routes";
import QueryClientProvider from "../providers/queryClientProvider";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "config";

function App() {
  return (
    <QueryClientProvider>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <div className="font-inter h-screen pb-[70px]">
          <Router />
        </div>
        <ToastContainer />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
