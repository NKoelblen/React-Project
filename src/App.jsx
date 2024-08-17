import { Header } from './components/header';
import { useHashNavigation } from './hooks/useHashNavigation';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Single } from './pages/Single';

function App() {
	const { page, params } = useHashNavigation();
	const pageContent = getPage(page);
	return (
		<>
			<Header page={page} />
			<main className="container">{pageContent}</main>
		</>
	);
}

function getPage(page) {
	if (page === 'home') {
		return <Home />;
	}
	if (page === 'post') {
		return <Single />;
	}
	if (page === 'contact') {
		return <Contact />;
	}
	return <NotFound page={page} />;
}

export default App;
