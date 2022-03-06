import 'bulma/css/bulma.min.css';
import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    );
}

export default App;