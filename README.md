## 📖 About

Inspired by China’s *“Dancing Grannies”*, this React app highlights free, community gatherings around dance and music.  

✨ Project Entries 
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
- **Video edits**  
  - Trim/cut continue using jump cuts to further enhance its inherent 'homemovie feel'

---

⚡ Challenges & Learnings

The biggest challenges I faced came from places I least expected. Managing frustration when I stalled at unexpected roadblocks became part of the process — for example, wrestling with CSS to make the library card lay properly beneath its content. Along the way, I also picked up new tools and workflows. I learned to use HandBrake for video conversion and iMovie for editing, which helped me prepare custom video assets for the site. While small, these additions expanded my toolbox and gave me a taste of real-world creative problem solving.

---

📜 Credits

- TV frame overlay licensed from iStock
 (Asset ID: 157188471)
- Video clips filmed and edited by me
- Pin icon and library card deck designed/photographed by me

---

 🔗 Links
 
👉 [Live Site](https://dancing-grannies.netlify.app)  
👉 [Source Code](https://github.com/Coco-La-Guera/dancing-grannies)


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
