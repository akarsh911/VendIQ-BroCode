import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/body/Main';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
