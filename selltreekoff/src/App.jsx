import "./App.css";
import Approutes from "./routes/Approutes";
import "@fontsource/noto-sans-lao"; 
import { SocketProvider } from "../src/socket-provider/SocketProvider"


function App() {

  return (
    <SocketProvider>
    <div className="app">
      <Approutes />
    </div>
  </SocketProvider>
  );
}

export default App;
