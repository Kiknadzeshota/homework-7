import { useState } from "react";
import "./App.css";
import GlobalStyles from "./styled/GlobalStyled";
import Card from "./components/Card";
function App() {
  const [sun, setSun] = useState(true)
  return (
    <>
      <GlobalStyles sun={sun} />
      <Card sun={sun} setSun={setSun}/>
    </>
  );
}

export default App;
