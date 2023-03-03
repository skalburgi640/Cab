import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';
import {useState} from 'react';

 import './styles.css';
const MenuHamburger = () => {
	const [on, setOn] = useState(false);

  const handleOn = () => {
    setOn(!on);
  };
  return (
    <div className="App">
      <aside className={on ? 'to-left' : ''}>
        <a href="#" onClick={handleOn}>
        <FontAwesomeIcon icon={faBars}/>
        </a>
      </aside>
      {on && <SideBar openClass="open" />}
    </div>
  );
}
export default MenuHamburger;