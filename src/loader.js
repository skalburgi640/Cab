import { ThreeCircles } from 'react-loader-spinner';
import './loader.css';

const loader = () => {
	return (
		<div className="loader-container">
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
export default loader;