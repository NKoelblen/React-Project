import { dynamicClass } from '../utils/dynamicClass';

export function Header({ page }) {
	return (
		<nav className="navbar navbar-expand-lg bg-body-secondary">
			<div className="container container-fluid">
				<a
					className="navbar-brand"
					href="#"
				>
					Mon Blog
				</a>
				<div className="navbar-nav">
					<a
						className={dynamicClass(page === 'home', 'active', 'nav-link')}
						href="#"
					>
						Accueil
					</a>
					<a
						className={dynamicClass(page === 'contact', 'active', 'nav-link')}
						href="#contact"
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}
