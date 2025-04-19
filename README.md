# Omnidoctor

A modern healthcare management system built with React.

## Features

- User Authentication
- Clinic Management
- Doctor Management
- Patient Management
- Appointment Scheduling
- Insurance Management
- Real-time Chat System
- Notification System
- Time Slot Management
- FIFO Configuration

## Tech Stack

- React.js
- React Router v6
- Tailwind CSS
- Lucide Icons

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
cd omnidoctor
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

```
omnidoctor/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button/        # Custom button component
│   │   ├── Topbar/        # Navigation header
│   │   └── Sidebar/       # Navigation menu
│   ├── pages/             # Page components
│   │   ├── Home/          # Dashboard
│   │   ├── Login/         # Authentication
│   │   └── Clinics/       # Clinic management
│   ├── App.jsx            # Main application component
│   └── main.jsx          # Application entry point
└── package.json         # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Components

### Core Components
- **Button** - Reusable button component with teal variants
- **Sidebar** - Navigation menu with dynamic routing
- **Topbar** - Header with logo and navigation controls

### Pages
- **Login** - User authentication with email/password
- **Home** - Main dashboard with lazy-loaded components
- **Clinics** - Statistics and clinic management interface

## Development

The project uses:
- Tailwind CSS for styling
- React Router for navigation
- Lazy loading for optimized performance
- Responsive design principles

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
