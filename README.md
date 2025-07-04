# JARVIS Demo

JARVIS is a modern web application for the Tech Society at IIT Madras, showcasing AI, research, virtual networks, IoT, and electronics. This demo features a visually engaging homepage, interactive hero section, and smooth UI/UX built with React and Vite.

## 🚀 Features

- Interactive Hero Section with animated overlay and custom cursor
- Marquee icon animation using `react-fast-marquee`
- Modular component structure (Navbar, Footer, Domain, Work, FutureWork, etc.)
- Responsive design and modern CSS
- Unit tests for components using Jest and React Testing Library

## 🛠️ Tech Stack

- **Frontend:** React (with JSX), Vite
- **Styling:** CSS Modules
- **Icons:** react-icons
- **Animation:** react-fast-marquee
- **Testing:** Jest, React Testing Library
- **Linting:** ESLint

## 📁 Project Structure

```
src/
  App.jsx
  main.jsx
  assets/
  components/
    CustomCursor.jsx
    EyeCursor.jsx
    Domain/
    Footer/
    FutureWork/
    Navbar/
    Work/
  pages/
    home/
      index.jsx
      sections/
        HeroSection.jsx
        ...
    projects/
    contact/
public/
  [static images]
```

## 🧪 Running Tests

This project uses Jest for unit testing. To run all tests:

```bash
npm test
```

Or for watch mode:

```bash
npm run test:watch
```

## 🏃‍♂️ How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧹 Linting

To check for lint errors:

```bash
npm run lint
```

## 📦 Build for Production

```bash
npm run build
```

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

MIT