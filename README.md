<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:11998e,100:38ef7d&height=200&section=header&text=AlgoSort&fontSize=80&fontColor=white&fontAlignY=38&desc=See%20how%20sorting%20algorithms%20work%20—%20step%20by%20step&descAlignY=60&descSize=18" />

<br/>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-11998e?style=for-the-badge)](https://algo-sort-visualizer-tau.vercel.app/)


<br/>

![React](https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)

</div>

---

## 📊 What is AlgoSort?

AlgoSort is a **sorting algorithm visualizer** — it shows you exactly what happens inside an algorithm, one step at a time, using smooth animations.

Instead of just reading about how Bubble Sort or Merge Sort works, you can **watch it happen live** on a set of bars. Each bar represents a number, and you can see how they move and swap until everything is sorted.

> 🎯 Great for students learning DSA &nbsp;·&nbsp; 🎬 Smooth animations with GSAP &nbsp;·&nbsp; 🎛️ Control the speed and array size

---

## ✨ What can you do with it?

| Feature | What it does |
|---|---|
| 👁️ **Visual Step-by-Step** | Watch each comparison and swap happen as an animation |
| ⚡ **Sorting Algorithms** | Like Bubble Sort, Merge Sort, Quick Sort — all in one place |
| 🎛️ **Speed Control** | Slow it down to understand, or speed it up to see the full run |
| 📐 **Array Size Control** | Choose how many bars to sort — small or large |
| 🔀 **Random Array** | Generate a new random set of numbers anytime |
| ❓ **Help Module** | Built-in FAQ that answers common questions about each algorithm |

---

## 🛠️ Built With

| Part | Tool | Why |
|---|---|---|
| **UI Framework** | React.js | Easy to manage each bar as a component |
| **Animations** | GSAP | Smooth, frame-by-frame animation control |
| **Styling** | Tailwind CSS | Fast and clean styling without writing much CSS |
| **Logic** | JavaScript | Algorithm logic written in plain JS functions |
| **Deployed On** | Vercel | Free, fast, and connects directly to GitHub |

---

## 📁 Folder Structure

```
AlgoSort-Visualizer/
│
├── src/
│   ├── components/
│   │   ├── ArrayBar.jsx        # Each bar you see on screen
│   │   ├── Controls.jsx        # Speed slider, size slider, buttons
│   │   └── HelpModule.jsx      # FAQ popup with algorithm info
│   │
│   ├── algorithms/
│   │   ├── bubbleSort.js       # Bubble sort logic + animation steps
│   │   ├── mergeSort.js        # Merge sort logic + animation steps
│   │   └── quickSort.js        # Quick sort logic + animation steps
│   │
│   ├── App.jsx                 # Main app — connects everything
│   └── index.js                # Entry point
│
└── README.md
```

---

## ⚙️ How the animation works

The idea is simple:

```
You click "Sort"
        ↓
The algorithm runs and records every swap it makes
        ↓
Those swaps are turned into a list of animation steps
        ↓
GSAP plays each step one by one on the bars
        ↓
You see the bars moving in real time — slow or fast
```

This way the algorithm logic and the animation are kept separate — making the code clean and easy to follow.

---

## 🎮 How to use it

1. Open the app
2. Pick a sorting algorithm from the top bar
3. Use the **size slider** to set how many bars you want
4. Use the **speed slider** to set how fast the animation runs
5. Click **"Play"** and watch it go
6. Click **"Help"** anytime to open the help section

---

## 🌐 Where it's hosted

| What | Where |
|---|---|
| Frontend | Vercel |
| Deploy trigger | Auto-deploys when code is pushed to GitHub |

---

## 🙋‍♂️ Made by

<div align="center">

**Rishabh Tomar😉**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/rishabh-tomar-8a7885243/)
[![Email](https://img.shields.io/badge/Email-Say%20Hi-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rishabhtomar.in@gmail.com)

</div>

---

<div align="center">

If this helped you understand sorting algorithms better, drop a ⭐ — it keeps me going!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:11998e,100:38ef7d&height=100&section=footer"/>

</div>
