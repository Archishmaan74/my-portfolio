# Archishmaan Upadhyaya — Portfolio

A personal portfolio showcasing my work as a frontend and full-stack engineer, including selected projects, professional experience, technical skills, and engineering impact.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Motion for React
- Lucide React
- Docker
- Nginx

## Features

- Responsive portfolio layout
- Sections for introduction, about, engineering impact, experience, projects, skills, and contact
- Animated interface elements
- Project links to live demos and source repositories
- Production build served with Nginx in Docker
- Nginx fallback routing for client-side navigation

## Projects

### ArchBlog

A full-stack blogging platform built with React, TypeScript, Spring Boot, and PostgreSQL. It includes authentication, API error handling, and automated tests.

- Live demo: https://archblog-frontend.onrender.com
- Source code: https://github.com/Archishmaan74/ArchBlog

### Guest House Management

A guest-house management application project built around room and booking workflows, using React, Spring Boot, PostgreSQL, and REST APIs.

- Source code: https://github.com/Archishmaan74/Om-Guest-House-Management-System

## Run Locally

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal, usually http://localhost:5173.

### Create a production build

```bash
npm run build
```

The production files are generated in the `dist` directory.

### Preview the production build

```bash
npm run preview
```

## Run with Docker

Docker builds the app with Node.js and serves the production files through Nginx.

### Build the image

Run this from the repository root, where the `Dockerfile`, `nginx.conf`, and `.dockerignore` files are located.

```bash
docker build -t my-portfolio .
```

### Start the container

```bash
docker run -d -p 8080:80 --name my-portfolio --restart unless-stopped my-portfolio
```

Open http://localhost:8080 to view the Dockerized portfolio.

### Stop and restart the container

```bash
docker stop my-portfolio
docker start my-portfolio
```

To remove the container after stopping it:

```bash
docker rm my-portfolio
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Type-checks the project and creates a production build |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Serves the production build locally |

## Repository Structure

```text
src/
  components/
    Header/
    Main/
    Footer/
  data/
  App.tsx
  index.css
  main.tsx
Dockerfile
nginx.conf
.dockerignore
package.json
```

## Connect

- GitHub: https://github.com/Archishmaan74

For opportunities involving frontend or full-stack engineering, feel free to connect through GitHub.
