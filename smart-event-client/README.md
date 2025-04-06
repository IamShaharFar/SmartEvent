
# Smart Event – Frontend

## Overview

Smart Event is a React-based application that allows users to schedule events and easily add them to their personal calendars (Google, Apple, etc.). It is designed with a clean, responsive interface and can be used for sending event reminders to guests in one click.

## Features

- 📅 Add-to-calendar integration (Google / Apple)
- ⚙️ Dynamic event details (name, time, location, description)
- 🎨 Responsive and modern UI
- 🔒 Clean component-based structure using TypeScript and React
- 🌐 Social media footer integration

## Technologies

- React
- TypeScript
- Bootstrap
- Add-to-calendar-button (via CDN)
- FontAwesome + React Icons

## Project Structure

```
smart-event-client/
├── components/
│   ├── CalenderButtons.tsx   # Renders the calendar buttons
│   ├── Footer.tsx            # Footer with social links
│   ├── Header.tsx            # Page header
│   ├── Hero.tsx              # Hero section (main banner)
│   └── Input.tsx             # Input fields for event info
├── App.tsx                   # Main app logic
├── index.tsx                 # React root render
├── App.css, index.css        # Styling
```

## Installation & Running

1. **Clone the repository:**

```bash
git clone https://github.com/IamShaharFar/SmartEvent.git
cd SmartEvent/smart-event-client
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the application:**

```bash
npm start
```

The app will open on [http://localhost:3000](http://localhost:3000)

## License

This project is licensed under the MIT License.
