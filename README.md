```
# 📊 Population Standard Deviation Lab

A fully client-side, production-ready web application that computes **population standard deviation** with mathematical precision and visual transparency. Designed to demonstrate strong fundamentals in statistics, clean front-end architecture, and professional-grade UI/UX suitable for technical interviews and portfolio review.

---

## 🚀 Project Overview

This project allows users to input a numeric dataset and instantly computes:

- **Mean**
- **Population Variance**
- **Population Standard Deviation**
- **Step-by-step calculation breakdown**

All calculations strictly follow the **population standard deviation formula**:

\[
\sigma = \sqrt{\frac{1}{n} \sum (x_i - \mu)^2}
\]

No approximations. No sample correction. No libraries.

---

## 🎯 Objectives

- Demonstrate correct statistical implementation
- Showcase clean, modular JavaScript
- Present calculations transparently
- Deliver a polished, modern UI
- Operate entirely offline
- Impress technical reviewers and hiring teams

---

## 🧠 Key Features

- ✅ Population (not sample) standard deviation
- ✅ Exact deterministic output (rounded to 3 decimals)
- ✅ Real-time parsing and validation
- ✅ Full calculation breakdown table
- ✅ Modern dark UI with responsive layout
- ✅ Zero dependencies
- ✅ Readable, maintainable source code

---

## 🗂️ Project Structure

``

standard-deviation-lab/
│
├── index.html      # Semantic HTML structure
├── styles.css      # Modern UI styling
├── advanced.js       # Core statistical logic
└── README.md       # Project documentation

``

---

## 🧮 Calculation Logic

1. Parse user input into numeric array
2. Compute mean
3. Compute deviations from mean
4. Square deviations
5. Compute variance as the average of squared deviations
6. Take square root of variance
7. Display results and breakdown

All computations are handled in pure JavaScript using IEEE-754 floating point arithmetic.

---

## 🧪 Accuracy Guarantee

- Uses `n` (population size) as divisor
- No rounding during intermediate steps
- Final output rounded to **three decimal places**
- Tested against known statistical datasets

---

## 🛠️ Technologies Used

- **HTML5** – semantic, accessible markup
- **CSS3** – modern layout, responsive design
- **JavaScript (ES6+)** – functional, modular logic
- **Zero frameworks**
- **Zero external dependencies**

---

## 📥 How to Run

1. Download or clone the repository
2. Open `index.html` in any modern browser
3. Enter comma-separated numbers
4. Click **Calculate**
5. View results instantly

No build step required.

---

## 🧩 Example Input

``

2, 4, 4, 4, 5, 5, 7, 9

``

### Output

- Mean: `5.000`
- Variance: `4.000`
- Standard Deviation: `2.000`

---

## 🧑‍💼 Interview Value

This project demonstrates:

- Mathematical correctness
- Data handling discipline
- Clean-code principles
- Separation of concerns
- UI/UX attention to detail
- Ability to explain calculations clearly

Ideal for:
- Frontend roles
- JavaScript engineering
- Data-oriented positions
- Technical screenings

---

## 📜 License

MIT License  
Free to use, modify, and distribute.

---

## 📌 Author

Jordan Leturgez  

