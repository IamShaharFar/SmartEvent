
# Smart Event – Server

## Overview

This is the backend server for the Smart Event application. It provides an API endpoint that uses OpenAI to parse free-text event descriptions into structured JSON format, and stores each request in a MongoDB database with rate-limiting per IP.

## Features

- 🤖 OpenAI GPT-3.5 integration for parsing event descriptions
- 🌐 Express server with CORS support
- 📦 MongoDB/Mongoose for logging API calls
- ⛔ IP-based request rate limiting (3 requests/day per IP)

## Technologies

- Node.js
- Express
- OpenAI API
- MongoDB & Mongoose
- dotenv
- body-parser

## Getting Started

1. Clone the repository and navigate to the server directory:
```bash
cd SmartEvent/smart-event-server
```

2. Create a `.env` file based on `.example-env`:
```
OPEN_AI_API_KEY=your_api_key_here
MONGO_URL=your_mongodb_connection_string
```

3. Install dependencies and start the server:
```bash
npm start
```

Server will run at `http://localhost:5000`

## Endpoint

### `POST /`

- **Input**: `{ "message": "<free-text event description>" }`
- **Output**: `{ "event": { name, description, startDate, startTime, location, endDate, endTime, organizer } }`

## License

MIT
