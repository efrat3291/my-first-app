import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';


function App() {
  return (
      <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="main-content">
          <h2>Welcome</h2>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
