import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="h1-header">Welcome to G Automotive</h1>
        <p className="p-header">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est totam a, quisquam obcaecati accusamus fuga assumenda pariatur ipsam? Ex nemo impedit excepturi deserunt neque unde ad doloremque dicta modi tempore, sit molestiae veritatis. Magnam quas porro quis necessitatibus culpa alias itaque qui nostrum minus ut facilis ipsum eligendi provident possimus ducimus, ullam saepe repudiandae quisquam dolor? Provident, ratione sit.</p>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="body-cards">
        <Card />
      </div>
    </div>
  );
}

export default App;
