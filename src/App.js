import './App.css';
import DocumentGrid from './components/DocumentGrid';
import ImageOverlay from './components/ImageOverlay/ImageOverlay';

const App = () => {
	return (
		<div className="app">
			<header className="app-header">Drag and Drop Demo</header>
			<main className="app-main">
				<DocumentGrid />
				<ImageOverlay />
			</main>
			<footer className="app-footer">© 2024 Your Company</footer>
		</div>
	);
};

export default App;
