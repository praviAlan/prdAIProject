# Portfolio Setup Checklist

Use this checklist to customize your portfolio after the initial setup.

## 🎯 Quick Start

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to start development server
- [ ] Open http://localhost:3000 in your browser

## 👤 Personal Information

- [ ] Update name in `components/Navigation.jsx` (line 8)
- [ ] Update name in `app/page.jsx` (line 18)
- [ ] Update email in `components/Footer.jsx` (line 14)
- [ ] Update GitHub URL in `components/Footer.jsx` (line 19)
- [ ] Update LinkedIn URL in `components/Footer.jsx` (line 25)

## 📄 About Page

- [ ] Update bio in `app/about/page.jsx` (lines 28-35)
- [ ] Update education details (lines 33-40)
- [ ] Update skills list (lines 43-49)
- [ ] Update email link for contact (line 71)

## 🎨 Projects

- [ ] Update 11 projects in `lib/projects.js`
  - [ ] Project 1: Weather App
  - [ ] Project 2: Todo List
  - [ ] Project 3: Portfolio Site
  - [ ] Project 4: Calculator
  - [ ] Project 5: Habit Tracker
  - [ ] Project 6: Recipe Finder
  - [ ] Project 7: Music Player
  - [ ] Project 8: Expense Tracker
  - [ ] Project 9: Chat App
  - [ ] Project 10: Image Gallery
  - [ ] Project 11: Blog CMS

For each project in `lib/projects.js`:
- [ ] Update `title`
- [ ] Update `description`
- [ ] Update `shortDescription`
- [ ] Add real `technologies` array
- [ ] Replace `image` URL with your images
- [ ] Update `overview`
- [ ] Update `problem`
- [ ] Update `solution`
- [ ] Update `challenges`
- [ ] Update `learnings`
- [ ] Update `githubUrl`
- [ ] Update `liveUrl`

## 🖼️ Images

- [ ] Add project images to `public/images/` folder
- [ ] Update image paths in `lib/projects.js`
- [ ] Each image should be:
  - [ ] At least 400x300px
  - [ ] Optimized for web (under 100KB)
  - [ ] Representative of the project

## 🎨 Styling

- [ ] Review colors in `tailwind.config.js`
- [ ] Adjust `primary` color if desired
- [ ] Adjust `secondary` color if desired
- [ ] Test on mobile, tablet, and desktop

## 📱 Homepage

- [ ] Update hero section title (line 18)
- [ ] Update hero section subtitle (line 19)
- [ ] Update hero section description (line 22-24)
- [ ] Verify featured projects display correctly
- [ ] Update About preview content

## 🚀 Deployment

**For GitHub Pages:**
- [ ] Update `next.config.js` basePath to `/your-repo-name`
- [ ] Run `npm run build`
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages in settings
- [ ] Verify site is live

**For Vercel (Recommended):**
- [ ] Push code to GitHub
- [ ] Connect to Vercel
- [ ] Click Deploy
- [ ] Verify site is live

**For Netlify:**
- [ ] Push code to GitHub
- [ ] Connect to Netlify
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `out`
- [ ] Click Deploy

## ✅ Final Checks

- [ ] All project links work
- [ ] GitHub links are correct
- [ ] Live demo links are correct
- [ ] Contact information is accurate
- [ ] Site is responsive (test on mobile)
- [ ] Images load correctly
- [ ] No console errors
- [ ] Navigation works smoothly
- [ ] Deployment successful
- [ ] Can access live URL

## 🎓 Optional Enhancements

- [ ] Add animations with Framer Motion
- [ ] Add dark mode toggle
- [ ] Add blog section
- [ ] Add project filtering
- [ ] Add case study style projects
- [ ] Add testimonials section
- [ ] Add search functionality
- [ ] Setup Google Analytics

---

After completing this checklist, your portfolio is ready to share with recruiters and peers! 🎉
