import React, { useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';
import DocumentCard from './DocumentCard';

const DocumentGrid = () => {
	const { documents, updateDocuments } = useContext(DocumentContext);

	const moveCard = (fromIndex, toIndex, type) => {
		const updatedDocuments = [...documents];
		const [movedDocument] = updatedDocuments.splice(fromIndex, 1);
		updatedDocuments.splice(toIndex, 0, movedDocument);
		updateDocuments(updatedDocuments, {
			type,
			position: toIndex,
		});
	};

	return (
		<div className="card-grid">
			{documents.map((document, index) => (
				<DocumentCard key={document.type} index={index} document={document} moveCard={moveCard} />
			))}
		</div>
	);
};

export default DocumentGrid;
