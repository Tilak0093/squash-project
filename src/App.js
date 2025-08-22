import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import './styles/base.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content" style={{ paddingTop: '80px' }}>
        <MainContent />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;