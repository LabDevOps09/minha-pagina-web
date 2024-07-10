import React from 'react';
import './App.css';
import TaskList from './TaskList'; // Importação correta
import logo from './logo.png'; // Importar a imagem

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bem-vindo ao meu projeto React.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <TaskList />
      </main>
      <footer>
        <p>Este é o meu projeto React, construido por Mariana Dias</p>
      </footer>
    </div>
  );
}

export default App;







