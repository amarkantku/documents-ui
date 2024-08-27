import React, { useContext, useRef, useState } from 'react';
import { DocumentContext } from '../context/DocumentContext';
import Loader from './Loader/Loader';

/**
 * This component to display the card (document) details
 */
const DocumentCard = ({ document, index, moveCard }) => {
	const { setSelectedCard } = useContext(DocumentContext);
	const [isLoading, setIsLoading] = useState(true);
	const cardRef = useRef(null);

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	const onDragStart = (e) => {
		e.dataTransfer.setData('cardIndex', index);
		e.dataTransfer.setData('cardType', document.type);
	};

	const onDragEnd = (e) => {
		cardRef.current.style.display = 'block';
	};

	const onDragOver = (e) => {
		e.preventDefault();
	};

	const onDrop = (e) => {
		const draggedCardIndex = e.dataTransfer.getData('cardIndex');
		const draggedCardType = e.dataTransfer.getData('cardType');
		moveCard(draggedCardIndex, index, draggedCardType);
	};

	return (
		<div
			ref={cardRef}
			className="card"
			draggable
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			onDragOver={onDragOver}
			onDrop={onDrop}
			onClick={() => setSelectedCard(document)}
		>
			{isLoading && (
				<div className="card-image">
					<Loader />
				</div>
			)}
			<img
				fetchpriority="high"
				src={document.image}
				alt={document.title}
				className={`card-image ${isLoading ? 'hidden' : ''}`}
				onLoad={handleImageLoad}
			/>
			<h3 className="card-title">{document.title}</h3>
		</div>
	);
};

export default DocumentCard;
