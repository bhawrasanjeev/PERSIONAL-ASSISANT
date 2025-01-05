# PERSIONAL-ASSISANT

# DAVIL ASSISTANT

DAVIL ASSISTANT  is a simple web-based virtual assistant designed to take voice commands, respond using text-to-speech, and perform basic actions like opening websites, searching the internet, and interacting with users. This project uses HTML, CSS, and JavaScript for its implementation.

## Features

- **Voice Recognition:** Uses the browser's SpeechRecognition API to process user voice input.
- **Text-to-Speech:** Utilizes the SpeechSynthesis API to provide vocal responses to user commands.
- **Dynamic Greetings:** Welcomes users based on the time of day.
- **Command Execution:** Responds to various predefined commands such as opening YouTube, Google, and Chrome.
- **Fallback Search:** Searches the internet for unknown commands.

## Technologies Used

- **HTML5**: For structuring the web application.
- **CSS3**: For styling and layout.
- **JavaScript**: For implementing the logic and interactions.
- **SpeechRecognition API**: For voice input.
- **SpeechSynthesis API**: For voice output.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/davil-ai.git
   ```
2. Navigate to the project directory:
   ```bash
   cd davil-ai
   ```
3. Open `index.html` in your browser to run the application.

## Usage

1. On loading the page, DAVIL ASSISTANT greets you based on the current time.
2. Click the "Click here to talk..." button to start voice recognition.
3. Speak a command into your microphone.
4. DAVIL ASSISTANT will respond with an appropriate action or perform a web search for your query.

### Supported Commands

- **Greeting:**
  - "Hello"
  - "Hey"
  - "How are you?"
- **Informational:**
  - "Who are you?"
- **Actions:**
  - "Open YouTube"
  - "Open Google"
  - "Open Chrome"
  - "Open Calculator"
- **Fallback:**
  - For unsupported commands, DAVIL ASSISTANT searches the internet.

## File Structure

```
├── index.html         # Main HTML file
├── davil.css          # Stylesheet for the application
├── davil.js           # JavaScript file for functionality
├── logo.jpeg          # Logo image for the application
├── giphy.gif          # GIF displayed during voice input
├── mic.svg            # Microphone icon
└── README.md          # Project documentation
```

## Future Improvements

- Enhance voice recognition to support more commands.
- Add more interactive UI elements.
- Improve the AI's response accuracy.
- Integrate additional APIs for more functionality.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them:
   ```bash
   git push origin feature-name
   ```
4. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Author

**Sanjeev Bhawra**

- Instagram: [@sanjeevbhawra](https://www.instagram.com/sanjeevbhawra/)



