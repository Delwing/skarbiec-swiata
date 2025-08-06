# Skarbiec Świata

Skarbiec Świata is a small educational web game built with **React**, **TypeScript** and **Vite**. Players explore a stylised map of the world, collect coins and discover cultural icons. The app uses React Router for navigation between a start screen and the main game interface.

## Features
- Interactive world map with clickable coins and items
- Simple scoring system that tracks the number of collected coins
- Pop‑up messages displayed after collecting a coin or discovering an item

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- [Yarn](https://yarnpkg.com/)

### Installation
```bash
yarn install
```

### Development
Start a local development server:
```bash
yarn dev
```
Open http://localhost:5173 in your browser.

### Production Build
Build the application for production:
```bash
yarn build
```
Preview the build locally:
```bash
yarn preview
```

### Linting
Run ESLint to check the code style:
```bash
yarn lint
```

## Project Structure
```
src/
  components/     # reusable components like Coin and MapItem
  screens/        # StartScreen and GameScreen views
  assets/         # SVG icons and images
```

---
This project is a work in progress and is intended for educational purposes.
