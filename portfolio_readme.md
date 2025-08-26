# Data Science Portfolio Website

A modern, responsive portfolio website designed for data scientists to showcase their skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, fade-in animations, and interactive elements
- **Fast Loading**: Optimized for performance with efficient CSS and JavaScript
- **Contact Form**: Working contact form with validation and success notifications
- **Mobile Menu**: Collapsible mobile navigation menu
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Download the Files
- Save all three files (`index.html`, `style.css`, `script.js`) in the same folder
- Make sure they're all in the same directory for proper linking

### 2. Customize Your Information
Edit `index.html` to replace placeholder content with your information:

#### Navigation & Branding
- Replace "Your Name" in the logo and title
- Update navigation if needed

#### Hero Section
- Update the main title and subtitle
- Customize the description paragraph
- Add your professional summary

#### About Section
- Replace the about text with your own story
- Update the statistics (projects, experience, etc.)
- Modify the stats to reflect your achievements

#### Skills Section
- Update skill cards with your expertise areas
- Modify descriptions to match your experience
- Add or remove skill cards as needed

#### Projects Section
- Replace project examples with your actual projects
- Update project titles, descriptions, and tags
- Add links to your GitHub repos and live demos
- Replace emoji icons with actual project images if desired

#### Contact Section
- Update email, LinkedIn, and GitHub links
- Modify social media links
- Customize the contact form action (see Form Setup below)

### 3. Form Setup (Optional)
The contact form currently shows a success simulation. To make it functional:

#### Option 1: Use a Form Service (Recommended)
- Sign up for a service like Formspree, Netlify Forms, or Getform
- Replace the form submission code in `script.js` with their provided code
- Update the form action attribute in `index.html`

#### Option 2: Use Your Own Backend
- Set up a server endpoint to handle form submissions
- Update the fetch URL in the form submission handler
- Implement server-side email sending

### 4. Add Your Own Images (Optional)
To replace emoji icons with real project images:
- Create an `images/` folder in your project directory
- Add your project screenshots/images
- Update the project-image divs in `index.html`:

```html
<!-- Replace this: -->
<div class="project-image">📊</div>

<!-- With this: -->
<div class="project-image">
    <img src="images/your-project-image.jpg" alt="Project Name">
</div>
```

## 🎨 Customization

### Colors
The color scheme is defined in CSS custom properties at the top of `style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #06b6d4;       /* Cyan accent */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    --bg-light: #f8fafc;           /* Light background */
    --bg-dark: #0f172a;            /* Dark background */
}
```

### Fonts
The website uses Inter font from Google Fonts. To change fonts:
1. Update the Google Fonts link in `index.html`
2. Modify the font-family in `style.css`

### Animations
- Modify animation durations in the CSS keyframes
- Adjust scroll animation thresholds in `script.js`
- Disable animations by removing animation classes

## 📱 Browser Compatibility

This website works on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `username.github.io/repository-name`

### Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Get instant deployment with custom domain options

### Vercel (Free)
1. Sign up at vercel.com
2. Import your GitHub repository
3. Automatic deployment with each push

## 📝 Content Guidelines

### Writing Project Descriptions
- Keep descriptions concise but informative
- Focus on the problem solved and impact achieved
- Include specific technologies and methodologies used
- Mention quantifiable results when possible

### Professional Photos
- Use a professional headshot for your about section
- Ensure project screenshots are high-quality
- Optimize images for web (use compressed formats)

### SEO Optimization
- Update the page title in `<title>` tag
- Add meta descriptions
- Use descriptive alt text for images
- Include relevant keywords naturally in content

## 🔧 Technical Notes

### Performance
- The website is optimized for fast loading
- CSS and JavaScript are minified for production use
- Images should be compressed and optimized
- Consider using a CDN for better global performance

### Accessibility
- Semantic HTML structure for screen readers
- Proper color contrast ratios
- Keyboard navigation support
- Focus indicators for interactive elements

### Security
- Form submissions should be validated server-side
- Sanitize user input to prevent XSS attacks
- Use HTTPS for production deployment

## 🤝 Support

If you need help customizing this portfolio:
1. Check the comments in the code files
2. Review this README thoroughly
3. Search for solutions to common web development issues
4. Consider hiring a web developer for complex customizations

## 📄 License

This portfolio template is free to use for personal and commercial projects. Attribution is appreciated but not required.

---

**Good luck with your portfolio! 🎉**

Remember to keep your content updated and showcase your best work. A great portfolio can make a significant difference in your career opportunities.