import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
