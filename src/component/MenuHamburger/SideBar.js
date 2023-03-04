
const SideBar = ({ openClass,handleOn }) => {
	const classes = openClass === 'open' ? 'opneSidebar' : '';

	return (
		<nav className={`${classes} slide-bar`}>
			<ul onClick={handleOn} className="navlist">
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
				<li>
					<a
						href='/quotation'
					>
						Get a Quote
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SideBar;
