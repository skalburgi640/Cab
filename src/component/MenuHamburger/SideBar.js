
const SideBar = ({ openClass }) => {
	const classes = openClass === 'open' ? 'opneSidebar' : '';

	return (
		<nav className={`${classes} slide-bar`}>
			<ul className="navlist">
				<li>
					<a
						href='/'
						aria-current="page"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href='/#services'
					>
						Services
					</a>
				</li>
				<li>
					<a
						href='/#about'
					>
						About
					</a>
				</li>
				<li>
					<a
						href='/#contactus'
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SideBar;
