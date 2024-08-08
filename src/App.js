import { Provider } from "react-redux";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import NavBarComponent from "./components/NavBarComponent";
import store from "./redux/store";
import { useState } from "react";
import ChatReadOnlyComponent from "./components/ChatReadOnlyComponent";

function App() {
  const [index,setIndex] = useState(-1);
  console.log(index)
  return (
    <Provider store={store}>
      <>
        <NavBarComponent setIndex={setIndex} />
        {index < 0 && <ChatComponent />}
        {index >= 0 && <ChatReadOnlyComponent index={index}/>}
      </>
    </Provider>
  );
}

export default App;
