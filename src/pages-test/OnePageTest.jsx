import { Button } from 'antd';
import '../pages/OnePageTest.css';
import { NavBar } from '../ui/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TwoPageTest } from './TwoPageTest';
import { ThreePageTest } from './ThreePageTest';
import { FourthPageTest } from './FourthPageTest';

export const OnePageTest = () => {
    return (
        <Router>
            <div className="contenedor">
                <h1>Manera Tradicional - MediaQueries</h1>
                <br/> <br/> <br/>
            </div> 
                    
            <div className="navBar">    
                <NavBar />
                <br/>
                </div> 

            <div className="routes">
                {/* <Routes> replaces <Switch> in recent versions of react-router-dom */}
                <Routes>
                    <Route path="/TwoPage" element={<TwoPageTest />} />
                    <Route path="/ThreePage" element={<ThreePageTest />} />
                    <Route path="/FourthPage" element={<FourthPageTest />} />
                </Routes>
                </div>
        </Router>
        
    );
};
