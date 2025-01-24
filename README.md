### Project Name: Number Prediction

#### **Description**  
The **Number Prediction** project is a simple, interactive game built using **React.js**. The objective of the game is for the user to guess a randomly generated number between 1 and 10. The app provides real-time feedback on whether the guessed number is too high, too low, or correct. This project is great for beginners to understand the fundamentals of React components, state management, and props.

---

#### **Features**
1. **Random Number Generation**: A secret number is randomly generated between 1 and 10 when the app loads.
2. **User Input Validation**: The app validates the user's input to ensure it's a number.
3. **Real-Time Feedback**: Provides feedback such as "Higher," "Lower," "Wow, Correct!," or "Enter a valid number."
4. **Interactive and Responsive Design**: Includes styling for hover and focus states, enhancing user experience.

---

#### **Key Components**
1. **Game Component (`Game.js`)**:
   - The main component responsible for rendering the input field and passing the guessed number to the `Result` component.
   - **State**:
     - `term`: Stores the user's input (guess).
   - **Functions**:
     - `Change`: Updates the `term` state whenever the user types in the input field.
   - **Random Number**:
     - `secnum`: A random number between 1 and 10 generated using `Math.random()`.

2. **Result Component (`Result.js`)**:
   - A functional component that evaluates the user's guess against the randomly generated number (`secnum`).
   - **Props**:
     - `secnum`: The secret number to be guessed.
     - `term`: The user's guessed number.
   - **Logic**:
     - Validates the user's input to ensure it's a number.
     - Compares the guessed number with the secret number and provides appropriate feedback:
       - "Lower" if the guess is too low.
       - "Higher" if the guess is too high.
       - "Wow, Correct!" if the guess matches the secret number.
       - "Enter a valid number" for invalid inputs.
       - "Please enter a number" if the input field is empty.

---

#### **Styling**
The app includes styling defined in `Game.css`, creating a visually appealing and responsive user interface:
1. **Body**:
   - Center-aligned layout with a background color for better visibility.
2. **Container**:
   - A styled box with rounded corners and borders to encapsulate the game elements.
3. **Input Field**:
   - Styled for ease of use with hover and focus effects for better interactivity.

---

#### **How to Run**
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to launch the application in the browser.

---

#### **Future Improvements**
1. Add difficulty levels by increasing the range of the random number.
2. Include a scoring system to track the user's attempts and performance.
3. Add animations or sound effects for correct and incorrect guesses.
4. Enhance UI with additional themes and styling options.

---

This project is a fun and engaging way to practice core React concepts, including state and props, while building an interactive game.
