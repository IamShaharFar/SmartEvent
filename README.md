
# Smart Event – Fullstack App

Smart Event is a fullstack application that enables users to enter free-text event details, automatically converts them to structured data using OpenAI, and allows them to save the event directly to their personal calendar.

## Structure

```
SmartEvent/
├── smart-event-client/   # React frontend
├── smart-event-server/   # Node.js + Express backend
```

## How it works

1. **Frontend**: A user enters event details in natural language.
2. **Backend**: The message is sent to the server, which uses OpenAI to parse the message.
3. **Response**: The server returns structured event data which is rendered on the client side and allows calendar integration (Google/Apple).

## Technologies

- React + TypeScript
- Node.js + Express
- MongoDB + Mongoose
- OpenAI API
- Bootstrap, FontAwesome, etc.

## License

MIT
