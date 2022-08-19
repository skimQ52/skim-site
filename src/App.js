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
            <Navbar/>
            <div className="background">
                <SvgLines animate={ true } duration={ 5000 }>
                    <svg viewBox="0 0 750 1000">
                    <path id="svg_38" d="m0,3.85714c1,1 199,111 199,111c0,0 -110,60 -110,60c0,0 163,116 163,116c0,0 102,-184 102,-184c0,0 -117,-39 -116,-39c1,0 204,-1 204,0c0,1 -6,212 -6,212c0,0 -351,144 -351,144c0,0 137,125 137,125c0,0 164,-88 164,-88c0,0 -49,-42 -53,-42c-4,0 291,5 291,6c0,1 -16,-181 -16,-181c0,0 -89,-109 -89,-109c0,0 184,-75 184,-75c0,0 66,158 66,158c0,0 -62,264 -62,264c0,0 -214,51 -214,50c0,-1 231,51 231,51c0,0 76,-31 76,-31" opacity="NaN" stroke="#444444" fill="none"/>
                    </svg>
                </SvgLines>
            </div>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/coop" element={<Coop/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
    
    // <Router>
    //   <div className="App">
    //     <Navbar/>
    //     <div className="content">
    //       <Routes>
    //         <Route exact path="/">
    //           <Home />
    //         </Route>
    //         {/* <Route path="/work">
    //           <Work />
    //         </Route>
    //         <Route path="/projects">
    //           <Projects></Projects>
    //         </Route>
    //         <Route path="/about">
    //           <About></About>
    //         </Route> */}
    //         <Route path="/coop">
    //           <Coop></Coop>
    //         </Route>
    //         <Route path="*">
    //           <NotFound />
    //         </Route>
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;