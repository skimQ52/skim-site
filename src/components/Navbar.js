import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import SocialFollow from './SocialFollow';

const Navbar = () => {

    // let navigate = useNavigate();

    // const goHome = (e) => {
    //     navigate('/skim-site', { replace: true })
    // }

    return ( 
        <div className="navbar">
            <div className='navbar-inner'>
                <nav className="bar">
                    <div className="links">
                        <Link className="hover-shine link" to="/skim-site">Home</Link>
                        <Link className="hover-shine link" to="/experience">Experience</Link>
                        <Link className="hover-shine link" to="/projects">Projects</Link>
                        <Link className="hover-shine link" to="/coop">Co-op</Link>
                    </div>
                </nav>
                <div className='socials'>
                    <SocialFollow />
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;