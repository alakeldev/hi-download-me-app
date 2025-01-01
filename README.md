# Hi Download Me - File Downloader

## Description

Hi Download Me - File Downloader is a web application built with HTML, CSS, and JavaScript. It utilizes vanilla JavaScript and DOM manipulation to provide a seamless file downloading experience. The application fetches binary file data using the Fetch API and handles it with Blob objects. Additionally, it creates temporary URLs for the files using `URL.createObjectURL` and ensures proper cleanup by revoking these URLs with `URL.revokeObjectURL`.

## Features

- Built with vanilla JavaScript, HTML, and CSS.
- Utilizes Blob binary objects to fetch and handle file data.
- Employs `URL.createObjectURL` and `URL.revokeObjectURL` for managing file URLs.
- Simple and user-friendly interface.

## How to Use

1. Enter the URL of the file you want to download in the input field.
2. Click the "Download" button.
3. The file will be fetched, and a download link will be generated.
4. Click the download link to save the file to your device.

## Note

This application will not work with websites that use CORS policies to block unauthorized requests, such as YouTube, Spotify, and SoundCloud.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- DOM Manipulation
- Blob API
- Fetch API
