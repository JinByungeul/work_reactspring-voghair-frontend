import React from "react";
import AppRouter from "./component/route/RouterComponent";
import Container from "@material-ui/core/Container"
import NavBar from "./component/route/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
