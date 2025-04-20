# Maulana Abul Kalam Azad University Of Technology (MAKAUT WB)

## Project Title: Rock Paper Scissors Game

**Submitted by:**  
**Name**: Sumanta Bhattacharya  
**Course**: BCA  
**Department**: Computer Applications


---

## File Structure

```
Project10
├── images
│   ├── paper.png
│   ├── rock.png
│   └── scissors.png
├── index.html
├── style.css
└── test.js
```

---

## System Requirement Analysis

- **Planning**: Identifying project components and goals.
- **Feasibility Study**: Determines cost-effectiveness and resource availability.
- **Implementation, Testing, and Documentation**:
  - Write and test the code.
  - Fix bugs early.
  - Document design for maintenance.

---

## Approach

### Scope & Objectives
- Player vs computer mode
- Score tracking
- Reset functionality

### HTML
- Title, buttons, scores, results display

### CSS
- Responsive design
- Intuitive layout

### JavaScript
- Game logic and scoring
- Interactivity using event listeners
- Real-time updates of UI

### Deployment & Feedback
- Host on GitHub Pages or server
- Collect feedback and improve

---

## Game Winner Conditions

- Paper vs Scissor → Computer wins
- Rock vs Scissor → Player wins
- Paper vs Rock → Player wins
- Same choices → Draw

---

## Design

### Objectives
- System architecture
- Wireframes/UI mockups
- Database schema
- Flowchart

---

## Project Overview

Simple Rock Paper Scissors game using HTML, CSS, and JavaScript. Player and computer each make a choice. Winner is decided using standard rules. The score is updated, and the result is displayed.

---

## Coding

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rock Paper Scissors Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Rock Paper Scissors</h1>
  <div class="choices">
    <div class="choice" id="rock"><img src="./images/rock.png" alt=""></div>
    <div class="choice" id="paper"><img src="./images/paper.png" alt=""></div>
    <div class="choice" id="scissor"><img src="./images/scissors.png" alt=""></div>
  </div>
  <div class="score-board">
    <div class="score"><p id="user-score">0</p><p>You</p></div>
    <div class="score"><p id="comp-score">0</p><p>Comp</p></div>
  </div>
  <div class="msg-container"><p id="msg">Play your move</p></div>
  <script src="test.js"></script>
</body>
</html>
```

---

## Deployment & Maintenance

After testing and final approval, deploy the game on a server (e.g., GitHub Pages). Maintain the software by fixing bugs and adding enhancements.

---

## Conclusion

This project demonstrates a simple web application built using HTML, CSS, and JavaScript. It follows the SDLC process and shows how core programming logic and UI elements can be used to build an interactive game. Further improvements and expansions can be made based on user feedback.
