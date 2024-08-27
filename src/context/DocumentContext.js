import React, { createContext, useState, useEffect } from 'react';

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
	const [documents, setDocuments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	const loadDocuments = () => {
		setLoading(true);
		fetch('http://localhost:3001/api/documents')
			.then((response) => response.json())
			.then((data) => {
				setDocuments(data);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const updateDocumentNewPosition = (doc) => {
		setLoading(true);
		fetch(`http://localhost:3001/api/documents/${doc.type}/position`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ newPosition: parseInt(doc.position, 10) }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Failed to update document position');
				}
				return response.json();
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				loadDocuments();
				setLoading(false);
			});
	};

	useEffect(() => {
		loadDocuments();
	}, []);

	const updateDocuments = (updatedDocuments, draggedDocumentNewPosition) => {
		setDocuments(updatedDocuments);
		updateDocumentNewPosition(draggedDocumentNewPosition);
	};

	return (
		<DocumentContext.Provider
			value={{ documents, loading, updateDocuments, selectedCard, setSelectedCard }}
		>
			{children}
		</DocumentContext.Provider>
	);
};
