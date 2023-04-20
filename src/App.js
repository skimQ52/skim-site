import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Coop from './Coop';
import Machine from './Machine';
import Brock from './Brock';
import SvgLines from 'react-mt-svg-lines'; 

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
            <div className="background">
                <SvgLines animate={ true } duration={ 6000 } playback="infinite alternate both">
                    <svg viewBox="0 0 800 1250">
                    <path fill="#262626" stroke="#464646" opacity="NaN" d="m800.6,887.00002l-804,2l3,-899c121,-156 307,-120 394,-91c87,29 255,133 407,48l0,940z" id="svg_11"/>
                    <path fill="#222222" stroke="#464646" opacity="NaN" d="m800.13043,983.00002l-804,2l3,-899c121,-156 307,-120 394,-91c87,29 255,133 407,48l0,940z" id="svg_10"/>
                    <path fill="#1c1c1c" stroke="#464646" opacity="NaN" d="m800.33333,1093.66668l-804,2l3,-899c121,-156 307,-120 394,-91c87,29 255,133 407,48l0,940z" id="svg_9"/>
                    <path stroke="#464646" fill="#181818" opacity="NaN" d="m800.52381,1206.31542l-809,1.99015l3.01866,-894.57359c121.75249,-155.2319 308.90921,-119.40916 396.45025,-90.55194c87.54105,28.85721 256.58582,132.34515 409.5311,47.76366l0,935.37172z" id="svg_8"/>
                    <path stroke="#464646" fill="#141414" opacity="NaN" d="m801,1310.34319l-812.00003,1.99015l3.02985,-894.57359c122.20398,-155.2319 310.05474,-119.40916 397.92041,-90.55194c87.86567,28.85721 257.53732,132.34515 411.04976,47.76366l0,935.37172z" id="svg_7"/>
                    <path stroke="#464646" fill="#101010" opacity="NaN" d="m801,1428.33333l-804,2l3,-899c121,-156 307,-120 394,-91c87,29 255,133 407,48l0,940z" id="svg_6"/>
                    <path fill="#0e0e0e" stroke="#464646" opacity="NaN" d="m799,599" id="svg_2"/>
                    <path stroke="#464646" fill="#0c0c0c" opacity="NaN" d="m806.99999,1547.6647l-812.99998,2.00197l3.03358,-899.88524c122.35447,-156.15361 310.43656,-120.11816 398.41044,-91.08961c87.97388,29.02856 257.85447,133.13096 411.55596,48.04727l0,940.92561z" id="svg_4"/>
                    </svg>
                </SvgLines>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/skim-site" element={<Home/>}/>
                    <Route path="/coop/machine" element={<Machine/>}/>
                    <Route path="/coop/brock" element={<Brock/>}/>
                    <Route path="/coop" element={<Coop/>}/>     
                </Routes>
            </div>
        </div>
        <Navbar/>
    </BrowserRouter>
  );
}

export default App;