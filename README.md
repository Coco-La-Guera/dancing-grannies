## 📖 About

Inspired by China’s *“Dancing Grannies”*, this React app highlights free, community dance gatherings.  

The first entries include:  
- **Dancing Grannies** — square-dance troupe in Seward Park, NYC.  
- **Dancing Generations** — outdoor tango evenings on Sundays in a Buenos Aires park.  

### Why I built this  
This project is intentionally designed as a **Scrimba Travel Journal practice**, departing slightly:  
- Uses **video instead of a still image**.  
- Adds a **TV frame overlay** around the video.  
- Mirrors the Travel Journal’s **data → map → props** component pattern.  

---

## 🛠️ Built With
- React + Vite  
- CSS Flexbox  
- Netlify (deployment)  

---

## 🚀 Current Features
- TV frame overlay with embedded video 🎥  
- Location text with an **inline clickable pin** to Google Maps 📍  
- Description blurbs ✍️  
- Static comments rendered from data 💬  

---

## 🗺️ Roadmap / Intentions
- **Interactive comments** (add form + local state; later, persistence)  
- **Deeper design**  
  - Make **TV knobs interactive** (hover/active states; potential controls)  
  - Style the text panel like a **library index card** (background texture)  
- **Video edits**  
  - Trim/cut to highlight best moments  
  - Compress for faster load times  
  - Subtle color/brightness tweaks and audio leveling  

---

## 📂 Project Structure
dancing-grannies/
├─ public/ # assets (TV frame, pin, videos)
├─ src/
│ ├─ components/ # React components
│ ├─ data.js # entries data
│ ├─ App.jsx
│ └─ styles.css # or App.css
├─ package.json
└─ README.md
