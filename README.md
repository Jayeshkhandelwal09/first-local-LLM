# Local LLM Chat with Ollama

A simple Node.js script to interact with local AI models using Ollama programmatically.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Homebrew (for macOS)

### Screenshots
<img width="1235" alt="Screenshot 2025-06-03 at 10 04 41 AM" src="https://github.com/user-attachments/assets/38433b53-d968-4533-9e01-dd080593dfe5" />
<img width="1276" alt="Screenshot 2025-06-03 at 10 04 50 AM" src="https://github.com/user-attachments/assets/fc15c3cc-6939-4e2e-892e-e32f742067d5" />


### Installation & Setup

1. **Install Ollama:**
   ```bash
   brew install ollama
   ```

2. **Start Ollama service:**
   ```bash
   brew services start ollama
   ```

3. **Pull a model (we're using TinyLlama for speed):**
   ```bash
   ollama pull tinyllama
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

## 🎯 Usage

### Run with predefined prompts (demo mode):
```bash
node ollama-chat.js
```

### Run with your own custom prompt:
```bash
node ollama-chat.js "Your custom question here"
```

### Examples:
```bash
# Ask about programming
node ollama-chat.js "Explain what is Node.js"

# Creative writing
node ollama-chat.js "Write a short story about a robot"

# Technical questions
node ollama-chat.js "What are the benefits of using local LLMs?"
```

## 🔧 Configuration

You can modify the script to use different models by changing the `MODEL_NAME` variable in `ollama-chat.js`:

```javascript
const MODEL_NAME = 'tinyllama'; // Change to: llama3, mistral, phi, dolphin, etc.
```

### Available Models
To see available models:
```bash
ollama list
```

To pull additional models:
```bash
ollama pull llama3        # Larger, more capable
ollama pull mistral       # Good balance of size/performance  
ollama pull phi           # Microsoft's efficient model
ollama pull dolphin       # Fine-tuned for conversations
```

## 📁 Project Structure

```
first-local-LLM/
├── ollama-chat.js      # Main script
├── package.json        # Node.js dependencies
├── README.md          # This file
└── node_modules/      # Dependencies (auto-generated)
```

## 🛠️ Troubleshooting

**Error: Cannot connect to Ollama**
- Make sure Ollama is running: `brew services start ollama`
- Check if the service is active: `brew services list | grep ollama`

**Model not found error**
- Pull the model first: `ollama pull tinyllama`
- Check available models: `ollama list`

**Slow responses**
- TinyLlama is the fastest model for testing
- For better quality responses, try `llama3` or `mistral` (but they're larger)

## 🎉 What This Script Does

1. **Sends prompts programmatically** to a local AI model (no CLI needed)
2. **Receives and displays responses** with timing information
3. **Supports both demo mode and custom prompts**
4. **Shows the complete flow**: Prompt → AI → Response
5. **Handles errors gracefully** with helpful messages

Perfect for learning how to integrate local LLMs into your applications!
