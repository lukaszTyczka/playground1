import './App.scss';
import FirstComponent from './components/FirstComponent';
import Search from './components/Search';
import Header from './Header';
import Home from './Home';

function App() {
    return (
        <div className="App">
            <Header />
            <h1>Hello </h1>
            <FirstComponent displayText="Co tam u Ciebie?" />
            <Search />
            <Home />
        </div>
    );
}

export default App;
