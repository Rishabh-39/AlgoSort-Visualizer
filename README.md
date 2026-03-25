# 🔢 AlgoSort — Sorting Algorithm Visualizer

A visual, step-by-step tool that shows you **exactly how sorting algorithms work** — no guessing, no confusion. Just watch the bars move and understand what's happening under the hood.

🔗 **[Live Demo](https://algo-sort-visualizer-tau.vercel.app/)**

---

## 🤔 What Is This?

Most people learn sorting algorithms by staring at code — which honestly isn't the easiest way. **AlgoSort** fixes that.

It turns abstract algorithms into **animated bar charts** so you can literally *see* how elements get compared, swapped, and sorted in real time. Great for students, beginners, or anyone who wants a visual refresher.

---

## ✨ What It Can Do

- 📊 **Visualizes 3 sorting algorithms** — Bubble Sort, Merge Sort, and Quick Sort
- 🎬 **Step-by-step GSAP animations** — smooth and easy to follow
- ⚡ **Speed control** — slow it down to understand, or speed it up once you get it
- 🔢 **Array size selector** — test with small or large arrays
- ❓ **Built-in Help / FAQ module** — explains what each algorithm does, right inside the app
- 📱 **Works on all screen sizes**

---

## 🛠️ Built With

| Technology | Why It's Used |
|---|---|
| **React.js** | Handles all the UI and state (hooks-based) |
| **JavaScript** | Core logic for all three sorting algorithms |
| **Tailwind CSS** | Fast, clean styling |
| **GSAP** | Smooth bar animations |

---

## 📖 How to Use It

1. **Pick an algorithm** — choose between Bubble Sort, Merge Sort, or Quick Sort
2. **Set your array size** — use the slider to pick how many bars you want
3. **Adjust the speed** — slower = easier to understand what's happening
4. **Hit Sort** — watch the algorithm work through the array live
5. **Not sure how it works?** — open the Help module for a quick explanation

---

## 🧠 Algorithms Covered

### Bubble Sort
The simplest one. Repeatedly compares two neighboring elements and swaps them if they're in the wrong order. Slow, but very easy to follow visually.
- ⏱️ Time: O(n²) &nbsp;|&nbsp; 💾 Space: O(1)

### Merge Sort
Splits the array in half, sorts each half, then merges them back together. Faster than Bubble Sort and great for understanding "divide and conquer."
- ⏱️ Time: O(n log n) &nbsp;|&nbsp; 💾 Space: O(n)

### Quick Sort
Picks a "pivot" element and puts everything smaller on the left and bigger on the right, then repeats. One of the most popular algorithms in real-world use.
- ⏱️ Time: O(n log n) avg &nbsp;|&nbsp; 💾 Space: O(log n)

---

## 📁 Project Structure

```
AlgoSort-Visualizer/
├── src/
│   ├── components/        # UI components (controls, bars, help modal)
│   ├── algorithms/        # Sorting logic (bubble, merge, quick)
│   ├── App.js             # Main app
│   └── index.js           # Entry point
├── public/
└── package.json
```

---

## 🙌 Why I Built This

I made this to get better at React and to actually *understand* sorting algorithms beyond just memorizing code. Turns out, watching them visually makes a huge difference — hope it helps you too!

---

## 📬 Connect

**Rishabh Tomar😉**  
📧 [rishabhtomar.in@gmail.com](mailto:rishabhtomar.in@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/rishabh-tomar-8a7885243/)  

---

> If this helped you, consider dropping a ⭐ on the repo — it really does help!
