import React, { Component } from "react";
import "./styles.css";

import ListaDeNotas from "./components/ListaDeNotas.js";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
