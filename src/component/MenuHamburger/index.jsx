import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';

import './styles.css';
const MenuHamburger = () => {
	const wrapperRef = useRef(null);
	const [on, setOn] = useState(false);
	const handleOn = () => {
		setOn(!on);
	};

	useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOn(false);
    }
  };


	return (
		<div className="App" ref={wrapperRef}>
			<aside className={on ? 'to-left' : ''}>
				<a href="#" onClick={handleOn}>
					<FontAwesomeIcon icon={faBars} />
				</a>
			</aside>
			{on && <SideBar openClass="open" />}
		</div>
	);
}
export default MenuHamburger;