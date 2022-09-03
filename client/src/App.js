import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

function App() {
    return (
        <div className='App'>
            <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'></div>
            <h1 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>
                Budget Planner
            </h1>

            <div className='grid md:grid-cols-2 gap-4'>
                <Chart></Chart>
            </div>
        </div>
    );
}

export default App;
