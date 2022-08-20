import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';
import Navbar from './Navbar';
import Home from './Home';
// import Work from './Work';
// import Projects from './Projects';
// import About from './About';
import Coop from './Coop';
import SocialFollow from './SocialFollow';
import SvgLines from 'react-mt-svg-lines'; 

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
            <div className="background">
                <SvgLines animate={ true } duration={ 7000 } playback="infinite alternate both">
                    <svg viewBox="0 0 800 1250">
                    <path stroke="#444444" id="svg_43" d="m-24.05086,-11.6925c40.88683,-177.90302 235.8101,-159.38936 331.81007,-119.46871c95.99998,39.92065 324.54176,173.19151 499.94267,118.45212l1.70195,420.57448l-836.05767,-0.13686l2.60298,-419.42103z" opacity="NaN" fill="#343434"/>
                    <path stroke="#444444" id="svg_41" d="m-12.5124,87.53827c40.88683,-177.90302 235.8101,-159.38936 331.81007,-119.46871c95.99998,39.92065 324.54176,173.19151 499.94267,118.45212l1.70195,420.57448l-836.05767,-0.13686l2.60298,-419.42103z" opacity="NaN" fill="#2e2e2e"/>
                    <path stroke="#444444" id="svg_40" d="m-8.66625,195.99981c40.88683,-177.90302 235.8101,-159.38936 331.81007,-119.46871c95.99998,39.92065 324.54176,173.19151 499.94267,118.45212l1.70195,420.57448l-836.05767,-0.13686l2.60298,-419.42103z" opacity="NaN" fill="#262626"/>
                    <path stroke="#444444" id="svg_5" d="m844.56499,319.07012" opacity="NaN" fill="none"/>
                    <path id="svg_2" d="m397.13838,524.05814" opacity="NaN" stroke="#444444" fill="none"/>
                    <path stroke="#444444" id="svg_37" d="m-13.28163,312.15366c40.88683,-177.90302 235.8101,-159.38936 331.81007,-119.46871c95.99997,39.92064 324.54176,173.19151 499.94267,118.45212l1.70195,420.57448l-836.05768,-0.13686l2.60298,-419.42103z" opacity="NaN" fill="#1e1e1e"/>
                    <path stroke="#444444" id="svg_39" d="m-12.5124,424.46135c40.88683,-177.90302 235.8101,-159.38936 331.81007,-119.46871c95.99998,39.92065 324.54176,173.19151 499.94267,118.45212l1.70195,420.57448l-836.05767,-0.13686l2.60298,-419.42103z" opacity="NaN" fill="#161616"/>
                    <path stroke="#444444" id="svg_42" d="m-12.51241,529.84598c40.88683,-177.90302 235.8101,-159.38936 331.81007,-119.46871c95.99998,39.92065 324.54176,173.19151 499.94267,118.45212l1.70195,420.57448l-836.05767,-0.13686l2.60298,-419.42103z" opacity="NaN" fill="#0e0e0e"/>                  
                    </svg>
                </SvgLines>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/skim-site" element={<Home/>}/>
                    <Route path="/coop" element={<Coop/>}/>
                </Routes>
            </div>
        </div>
        <Navbar/>
    </BrowserRouter>
  );
}

export default App;