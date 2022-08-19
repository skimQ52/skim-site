import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SocialFollow from './SocialFollow';

const Navbar = () => {

    let navigate = useNavigate();

    const goHome = (e) => {
        navigate('/', { replace: true })
    }

    return ( 
        <div className="navbar">
            <h1 onClick={goHome} id="sky">SKY</h1>
            <nav className="bar">
                <div className="links">
                    {/* <Link className="link" to="/work">Work Experience</Link>
                    <Link className="link" to="/projects">Personal Projects</Link>
                    <Link className="link" to="/about">About Me</Link> */}
                    <Link className="link" to="/coop">Co-op</Link>
                </div>
            </nav>
            <div className='socials'>
                <SocialFollow />
            </div>
        </div>
    );
}
 
export default Navbar;