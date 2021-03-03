import SideBar from "../src/components/SideBar";
import Video from "../src/components/Video";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <SideBar />
      </Provider>
    </div>
  );
}

export default App;
