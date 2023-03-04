import { useRef, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import './loader.css';

const Loader = ({ classes }) => {
	const loaderref = useRef();
	useEffect(() => {
		if (loaderref && loaderref.current && !classes) {
			loaderref.current.style.height = `${window.outerHeight + 150}px`;
		}
	})
	return (
		<div ref={loaderref} className={`${classes} loader-container`} >
			<ThreeCircles
				height="100"
				width="100"
				color="#4fa94d"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="three-circles-rotating"
				outerCircleColor=""
				innerCircleColor=""
				middleCircleColor=""
			/>
		</div>


	)
}
export default Loader;