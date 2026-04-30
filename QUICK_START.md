# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
npm install
```

This installs all required packages (Next.js, React, Tailwind CSS).

## Step 2: Start Development Server (1 minute)

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see your portfolio!

## Step 3: Customize Content (2 minutes)

### Update Your Name
- Open `components/Navigation.jsx`
- Replace "Alan Horvat" with your name (line 8)

### Update Contact Info
- Open `components/Footer.jsx`
- Update email, GitHub, and LinkedIn URLs

### Add Your Projects
- Open `lib/projects.js`
- Replace the 11 sample projects with your actual projects
- Update project title, description, tech stack, GitHub link, etc.

## Step 4: Add Project Images

1. Create folder: `public/images/`
2. Add your project images there
3. Update image paths in `lib/projects.js`

## Step 5: Deploy

### Option A: GitHub Pages (Free)

```bash
# 1. Build the site
npm run build

# 2. Update basePath in next.config.js:
# basePath: '/your-repo-name'

# 3. Configure GitHub Pages to deploy from 'main' branch
# 4. Push to GitHub
```

**Your site will be live at:** https://yourusername.github.io/portfolio

### Option B: Vercel (Easiest)

1. Push code to GitHub
2. Go to vercel.com → New Project
3. Select your portfolio repository
4. Click Deploy

**Your site will be live at:** https://your-portfolio-name.vercel.app

## 📝 Common Customizations

### Change Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1f2937',  // Dark background
      secondary: '#3b82f6', // Blue accent
    },
  },
}
```

### Add More Projects

1. Open `lib/projects.js`
2. Add new project object to array:
```javascript
{
  id: 'my-project',
  title: 'My Awesome Project',
  description: 'What it does',
  shortDescription: 'One liner',
  technologies: ['React', 'Tailwind CSS'],
  image: 'https://path-to-image.jpg',
  overview: 'Detailed description...',
  problem: 'The problem it solves...',
  solution: 'How you solved it...',
  challenges: 'Challenges faced...',
  learnings: 'What you learned...',
  githubUrl: 'https://github.com/yourname/project',
  liveUrl: 'https://demo.com',
}
```

## 🔍 Project File Structure

```
Selected key files you'll edit:

components/
├── Navigation.jsx     ← Your name/links
├── Footer.jsx         ← Contact info
└── ProjectCard.jsx

app/
├── page.jsx           ← Homepage content
├── about/
│   └── page.jsx       ← About you
└── projects/
    └── [id]/
        └── page.jsx   ← Individual project

lib/
└── projects.js        ← All 11 projects data
```

## ✅ Verification Checklist

After setup, verify:

- [ ] Homepage displays correctly
- [ ] All 11 projects appear on projects page
- [ ] Click on a project → detail page loads
- [ ] Navigation menu works (Home, Projects, About, Contact)
- [ ] Images load correctly
- [ ] Links open in new tabs (GitHub, LinkedIn, etc.)
- [ ] Mobile view is responsive
- [ ] No console errors

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
# Use port 3001 instead
```

**Changes not showing?**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Images not loading?**
- Check file path in `lib/projects.js`
- Images should be in `public/images/` folder
- Use relative paths: `/images/my-image.png`

## 📚 Learn More

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev

## 🎉 That's It!

Your portfolio is ready. Now customize it with your information and projects! Good luck sharing it with recruiters! 🚀
