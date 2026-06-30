<div align="center">

# Hi Download Me 🚀

### A fast, no-dependency file downloader built with vanilla JavaScript

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## Table of Contents

- [Run Locally](#run-locally)
- [Overview](#overview)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Features](#features)
- [Limitations](#limitations)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

---

## Run Locally

This project is a **pure static web application** — no build step, no package manager, no dependencies to install.

### Prerequisites

You need **one** of the following:

| Option | Requirement |
|--------|-------------|
| Direct open | Any modern browser (Chrome, Firefox, Edge, Safari) |
| Local server — VS Code | [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) |
| Local server — Python | Python 3.x installed |
| Local server — Node.js | Node.js installed |

---

### Option 1 — Open directly in the browser (simplest)

**Step 1.** Clone the repository:

```bash
git clone https://github.com/alakeldev/hi-download-me-app.git
```

**Step 2.** Navigate into the project folder:

```bash
cd hi-download-me-app
```

**Step 3.** Open the app:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows (Command Prompt or PowerShell)
start index.html
```

Or simply drag the `index.html` file into your browser window.

---

### Option 2 — VS Code Live Server (recommended for development)

**Step 1.** Clone the repository:

```bash
git clone https://github.com/alakeldev/hi-download-me-app.git
```

**Step 2.** Open the project folder in VS Code:

```bash
code hi-download-me-app
```

**Step 3.** In VS Code, right-click `index.html` in the Explorer panel and select **"Open with Live Server"**.

The app will open at `http://127.0.0.1:5500` and auto-reload on any file change.

---

### Option 3 — Python local server

**Step 1.** Clone and navigate into the project:

```bash
git clone https://github.com/alakeldev/hi-download-me-app.git
cd hi-download-me-app
```

**Step 2.** Start the server:

```bash
python -m http.server 8080
```

**Step 3.** Open your browser and visit:

```
http://localhost:8080
```

---

### Option 4 — Node.js local server

**Step 1.** Clone and navigate into the project:

```bash
git clone https://github.com/alakeldev/hi-download-me-app.git
cd hi-download-me-app
```

**Step 2.** Start the server using `npx` (no install required):

```bash
npx serve .
```

**Step 3.** Open your browser and visit the URL shown in the terminal (usually `http://localhost:3000`).

---

## Overview

**Hi Download Me** is a lightweight browser-based tool that lets you download any publicly accessible file — images, videos, PDFs, audio, and more — directly from a URL.

Paste a URL, click **Download File**, and the file is saved to your device using nothing but the browser's native APIs. No server, no backend, no third-party services.

---

## How It Works

1. The user submits a file URL via the form.
2. The browser sends a `fetch()` request to that URL.
3. The response body is read as a binary `Blob` object.
4. A temporary in-memory URL is created with `URL.createObjectURL()`.
5. A hidden `<a>` element is programmatically clicked to trigger the browser's native download dialog.
6. The temporary URL is revoked with `URL.revokeObjectURL()` to free memory.

```
User pastes URL
       │
       ▼
  fetch(url)
       │
       ▼
  res.blob()  ──── binary file data
       │
       ▼
 createObjectURL()  ──── temporary blob:// URL
       │
       ▼
 <a download> click  ──── browser saves file
       │
       ▼
 revokeObjectURL()  ──── memory freed
```

---

## Usage

1. Open the application in your browser.
2. Paste a direct file URL into the input field (e.g. `https://example.com/sample.pdf`).
3. Click **Download File** or press **Enter**.
4. The button shows **Downloading...** while the file is being fetched.
5. Your browser's download dialog opens automatically with the correct filename.
6. The input is cleared automatically after a successful download.

---

## Features

- ⚡ Zero dependencies — pure HTML, CSS, and JavaScript
- 📦 Downloads any file type: images, videos, PDFs, audio, documents, and more
- 🏷️ Preserves the original filename from the URL
- 🔒 Prevents duplicate requests by disabling the button during download
- 🛡️ Distinguishes CORS errors from HTTP errors with a clear message
- 📱 Responsive layout — works on desktop and mobile
- 🧹 Automatically clears the input and frees memory after each download
- ♿ Accessible markup — semantic HTML5, `aria-label`, `<main>` landmark

---

## Limitations

> ⚠️ **CORS Policy**
>
> This application relies on the browser's `fetch()` API, which enforces **Cross-Origin Resource Sharing (CORS)** rules.
>
> If the server hosting the target file does not include the appropriate CORS headers (e.g. `Access-Control-Allow-Origin: *`), the browser will block the request before it reaches the file.
>
> **Platforms known to block this:**
> - YouTube
> - Spotify
> - SoundCloud
> - Most social media platforms
>
> **What works well:**
> - Direct links to files on public CDNs
> - Open-access file hosting (e.g. GitHub raw content, public S3 buckets)
> - Public APIs that return files with permissive CORS headers

---

## Project Structure

```
hi-download-me-app/
├── index.html          # Main application page
├── 404.html            # Custom 404 error page
└── assets/
    ├── css/
    │   └── style.css   # Application styles
    ├── js/
    │   └── main.js     # Download logic (Fetch API + Blob handling)
    └── favicon/
        └── favicon.ico # Browser tab icon
```

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling and responsive layout |
| JavaScript (Vanilla) | Download logic and DOM interaction |
| Fetch API | HTTP requests to retrieve file data |
| Blob API | Binary file data handling |
| `URL.createObjectURL` | Temporary in-memory download URL |
| `URL.revokeObjectURL` | Memory cleanup after download |

---

<div align="center">

Made with ❤️ by [alakeldev](https://github.com/alakeldev)

</div>
