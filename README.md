# Documents UI

This project is a frontend application that allows users to view, drag-and-drop, and interact with document types. The application is built using React.js and is containerized with Docker for easy deployment.

## Features

- **Document Display**: Displays documents as cards in a grid layout.
- **Drag-and-Drop**: Allows reordering of document cards via drag-and-drop functionality.
- **Image Modal**: Clicking on a document card opens the image in a modal overlay.
- **Skeleton Loader**: Displays a skeleton loader while images are loading.

## Getting Started

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your system.
- **Docker**: Docker is required to build and run the application in a containerized environment.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/amarkantku/documents-ui.git
   cd documents-ui

2. **To run the application:**
   ```bash
   npm install

3. **Build the Docker image and Run the Docker container:**
   ```bash
   docker build -t documents-ui .
   docker run -p 3000:80 documents-ui

# OR

3. **To start the app using Docker Compose:**
   ```bash
   docker-compose up

# Access the application
Open your browser and go to http://localhost:3000