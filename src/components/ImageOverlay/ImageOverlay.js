import React, { useContext, useEffect } from 'react';
import { DocumentContext } from '../../context/DocumentContext';
import './ImageOverlay.css';

/**
 * This component to displays the document (card) image as an overlay with hint text
 * @returns
 */
const ImageOverlay = () => {
	const { selectedCard, setSelectedCard } = useContext(DocumentContext);

	const handleKeyDown = (event) => {
		if (event.key === 'Escape') {
			setSelectedCard(null);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	if (!selectedCard) return null;

	return (
		<div className="image-overlay">
			<div className="image-content">
				<img src={selectedCard.image} alt={selectedCard.title} />
				<p>{selectedCard.title}</p>
				<p className="image-help-text">Press ESC to close modal</p>
			</div>
		</div>
	);
};

export default ImageOverlay;
