# Setting Up and Running Next.js Project with Environment Variables

This guide will walk you through the process of setting up and running a Next.js project while managing environment variables using a `.env` file. You have a `example.env` file containing the environmental keys that you need in your project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- Package manager like [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Steps

### 1. **Clone the Repository:**

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. **Create a `.env` File:**

Create a new file named `.env` in your project root. Copy the keys from `example.env` into this file and add appropriate values to them. For example:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_API_KEY=your_api_key
```

### 3. **Install Dependencies:**

```bash
yarn
```

### 4. **Run the Next.js Project:**

```bash
yarn dev --port 3000
```

This command will start the development server, and you can access your Next.js application at `http://localhost:3000`.
