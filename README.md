# 🌊 The East Sea of Korea Campaign

A global campaign to reclaim the rightful name of Korea's territorial waters.

## 📋 Project Overview

This website serves as the central hub for the East Sea of Korea campaign, dedicated to raising global awareness about Korea's historical claim to the waters known in Korean as "동해" (East Sea) and internationally, often wrongly called the "Sea of Japan."

## 🎯 Mission

To educate the world about:
- Korea's 2,000+ year history of calling these waters the "East Sea"
- The injustice of Japan's colonial imposition of "Sea of Japan" 
- Korea's rightful authority over its own territorial waters
- The importance of historical and legal recognition

## 📂 File Structure

```
eastseaofkorea/
├── index.html          # Main website
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── CNAME               # Domain configuration (eastseaofkorea.com)
└── README.md          # This file
```

## 🌍 Features

- **Multilingual Support**: English, Korean, and Japanese
- **Responsive Design**: Works on all devices
- **Fast Loading**: Optimized for performance
- **Call to Action**: Sign petition, share campaign, support movement
- **Historical Timeline**: Visual representation of key events
- **Educational Content**: Facts, FAQ, current status

## 🚀 Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The site will work perfectly without any server needed

### Deploying to GitHub Pages

1. Create a GitHub account if you don't have one
2. Create a new repository named `eastseaofkorea` (or use existing one)
3. Upload all files to the repository
4. Enable GitHub Pages in repository settings
5. Select `main` branch as source
6. The site will be available at `https://username.github.io/eastseaofkorea`

### Connecting Custom Domain

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `eastseaofkorea.com`
3. This will automatically use the CNAME file we've created
4. Update your domain's DNS settings:
   - A Records:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME Record:
     - www → [your-github-username].github.io

5. Wait 2-6 hours for DNS to propagate
6. Your site will be live at `eastseaofkorea.com`

## 📝 Customization

### Update Petition Link
In `index.html`, find the petition link and replace with your form URL:
```html
<a href="https://your-petition-form-url" target="_blank">
```

### Update Contact Email
In `index.html`, update:
```html
<a href="mailto:your-email@domain.com">contact@eastseaofkorea.com</a>
```

### Update Social Media Links
In `index.html`, update the social links in the footer

### Change Colors
In `css/style.css`, modify the color variables:
```css
:root {
    --primary-blue: #1e90ff;
    --dark-blue: #0047ab;
    --accent-yellow: #ffd700;
    /* etc... */
}
```

## 🌐 SEO Optimization

The site includes:
- Meta descriptions and keywords
- Proper heading hierarchy
- Fast loading times
- Mobile optimization
- Structured content

## 📱 Browser Compatibility

Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔒 Security

- No external dependencies
- No user data collection beyond petition
- HTTPS enabled (GitHub Pages automatic)
- Clean, safe code

## 📞 Support

For GitHub Pages deployment questions, visit:
- GitHub Pages Documentation: https://pages.github.com
- GitHub Docs: https://docs.github.com/en/pages

## 📄 License

This project is dedicated to the cause of historical justice and international awareness. Feel free to share and support the campaign.

---

**🌊 The East Sea of Korea - Reclaiming Our Heritage, Asserting Our Right**
