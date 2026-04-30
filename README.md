# 🎓 Alan Horvat - Personal Portfolio

A modern, responsive portfolio website showcasing 11 academic Computer Science projects. Built with **Next.js**, **React**, and **Tailwind CSS** for a clean, professional presentation to recruiters, professors, and peers.

## 📋 Features

✨ **Modern Design**
- Clean, professional layout with gradient hero sections
- Responsive grid layouts for mobile, tablet, and desktop
- Smooth transitions and hover effects

📱 **Responsive**
- Mobile-first design
- Optimized for all screen sizes
- Touch-friendly navigation

⚡ **Performance**
- Fast loading with static generation
- Optimized images
- SEO-friendly structure

🎯 **Project Showcase**
- Grid/list view of all 11 projects
- Detailed project pages with:
  - Overview & problem statement
  - Solution description
  - Technology stack
  - Challenges & learnings
  - Links to GitHub and live demos
- Easy navigation between projects

📄 **Additional Sections**
- Homepage with featured projects
- About page with skills and education
- Contact section with social links
- Project navigation (prev/next)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.jsx           # Root layout with Navigation & Footer
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── page.jsx             # Homepage
│   ├── projects/
│   │   ├── page.jsx         # Projects listing page
│   │   └── [id]/
│   │       └── page.jsx     # Individual project detail page
│   └── about/
│       └── page.jsx         # About page
├── components/
│   ├── Navigation.jsx       # Navigation bar component
│   ├── ProjectCard.jsx      # Project card component
│   └── Footer.jsx           # Footer with contact info
├── lib/
│   └── projects.js          # Project data (11 projects)
├── public/                  # Static assets (images, resume, etc.)
├── package.json
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Installation

1. **Clone the repository** (or navigate to the project folder)
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to http://localhost:3000

## ✏️ Customization Guide

### 🎨 Update Your Information

**Homepage & Navigation** (`app/page.jsx`, `components/Navigation.jsx`)
- Replace "Alan Horvat" with your name
- Update the navigation links and styling

**About Page** (`app/about/page.jsx`)
- Update bio and background
- Add your education details
- Customize skills list
- Add your social links and email

**Footer & Contact** (`components/Footer.jsx`)
- Add your email address
- Update GitHub URL
- Update LinkedIn URL

### 📂 Add Your Projects

Edit `lib/projects.js`:

```javascript
{
  id: 'unique-project-id',
  title: 'Your Project Title',
  description: 'Short description',
  shortDescription: 'One-liner',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: 'https://path-to-image.jpg',
  overview: 'Detailed overview...',
  problem: 'Problem statement...',
  solution: 'Your solution...',
  challenges: 'Challenges faced...',
  learnings: 'What you learned...',
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://demo-link.com',
}
```

### 🖼️ Add Project Images

1. Create a `public/images/` folder
2. Add project images there
3. Update the `image` field in `projects.js`:
   ```javascript
   image: '/images/my-image.png'
   ```

### 🎨 Customize Colors & Styling

**Tailwind Configuration** (`tailwind.config.js`)
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1f2937',  // Change primary color
      secondary: '#3b82f6', // Change accent color
    },
  },
},
```

## 🚢 Deployment

### Deploy to GitHub Pages

1. **Update `next.config.js`:**
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Replace 'portfolio' with your repo name
  images: {
    unoptimized: true,
  },
}
```

2. **Build the project:**
```bash
npm run build
```

3. **Create a GitHub repository** named `portfolio` (or your desired name)

4. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select `main` branch and `/root` folder
   - Save

6. **Your portfolio will be live at:** `https://yourusername.github.io/portfolio`

### Deploy to Vercel (Recommended)

1. **Push code to GitHub** (as above)

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Create new project** → Select your portfolio repository

4. **Click Deploy** → Done!

Your site will be live at `https://your-project-name.vercel.app`

### Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)**

2. **Click "New site from Git"** → Connect GitHub

3. **Select your portfolio repository**

4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`

5. **Click Deploy**

## 📱 Features to Add Later

- Blog system with markdown support
- Case study style projects with more detail
- Filtering by technology
- Animations and transitions
- Dark mode toggle
- Comments on projects
- Download resume functionality

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint

# Export static HTML (GitHub Pages)
npm run export
```

## 📚 Technologies Used

- **Next.js** - React framework for production
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## 📝 License

This is your personal portfolio - feel free to use and modify as needed!

## 🤝 Support

For Next.js documentation: https://nextjs.org/docs
For Tailwind CSS documentation: https://tailwindcss.com/docs

---

**Updated:** April 2026  
**Version:** 1.0.0
