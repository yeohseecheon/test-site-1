# ITVersity Website

This is the official website for ITVersity, Inc., showcasing our training programs and placement assistance services.

## Features

- Modern, responsive design
- Interactive UI elements
- Smooth scrolling navigation
- Contact form
- Location information
- Course details
- Mobile-friendly layout

## Directory Structure

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    └── hero-bg.jpg (to be added)
```

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```

2. Add your images to the `images` directory:
   - Add a hero background image named `hero-bg.jpg`
   - Optimize images for web use

3. Test locally:
   - Open `index.html` in a web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     ```
   Then visit `http://localhost:8000`

## Deployment to GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" under "Code and automation"
3. Select your main branch as the source
4. Click "Save"
5. Your site will be published at `https://<username>.github.io/<repository-name>`

## Customization

- Colors: Edit CSS variables in `css/styles.css`
- Content: Modify text in `index.html`
- Styling: Adjust styles in `css/styles.css`
- Behavior: Modify JavaScript in `js/main.js`

## Contact Form Integration

The contact form currently shows an alert on submission. To make it functional:

1. Create a backend API endpoint
2. Update the form submission handler in `js/main.js`
3. Add proper form validation
4. Implement error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this template for your own projects.

## Support

For any questions or issues, please open an issue in the GitHub repository. 