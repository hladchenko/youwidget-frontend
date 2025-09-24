# YouWidget Dashboard

A modern widget management dashboard built with React, TypeScript, and Vite. This application allows users to create, manage, and visualize different types of widgets including charts and text components.

## Features

- **Widget Management**: Create, edit, and delete widgets with different types (line charts, bar charts, text)
- **Interactive Dashboard**: Clean, responsive interface built with Tailwind CSS and Headless UI
- **Data Visualization**: Chart widgets powered by Recharts library
- **Form Handling**: React Hook Form integration for efficient form management
- **State Management**: TanStack Query for server state and data fetching
- **Routing**: Client-side routing with React Router DOM
- **TypeScript**: Full TypeScript support for type safety

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS 4
- **UI Components**: Headless UI, Heroicons
- **Charts**: Recharts
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **State Management**: TanStack Query
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd youwidget-frontend
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run check` - Run TypeScript compiler without emitting files
- `npm run format` - Format code using Prettier

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── layouts/            # Layout components
├── shared/
│   ├── api/           # API configuration
│   ├── config/        # App configuration and constants
│   ├── hooksQuery/    # TanStack Query hooks
│   └── utils/         # Utility functions
├── types/             # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## Widget Types

The application supports the following widget types:

- **Line Chart**: Interactive line charts for data visualization
- **Bar Chart**: Bar charts for comparative data display
- **Text**: Simple text widgets for displaying information

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Guidelines

- Follow TypeScript best practices and maintain type safety
- Use the existing component patterns and styling conventions
- Ensure responsive design with Tailwind CSS
- Write clean, readable code with proper error handling
- Test your changes thoroughly before submitting

## License

This project is private and proprietary.
