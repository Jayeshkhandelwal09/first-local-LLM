const axios = require('axios');

// Ollama API configuration
const OLLAMA_BASE_URL = 'http://localhost:11434';
const MODEL_NAME = 'tinyllama';

/**
 * Send a prompt to Ollama and get a response
 * @param {string} prompt - The prompt to send to the AI
 * @returns {Promise<string>} - The AI's response
 */
async function sendPromptToOllama(prompt) {
    try {
        console.log(`🤖 Sending prompt: "${prompt}"`);
        console.log('⏳ Waiting for AI response...\n');

        const response = await axios.post(`${OLLAMA_BASE_URL}/api/generate`, {
            model: MODEL_NAME,
            prompt: prompt,
            stream: false // Get complete response at once
        });

        return response.data.response;
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            throw new Error('❌ Cannot connect to Ollama. Make sure Ollama is running with: brew services start ollama');
        }
        throw new Error(`❌ Error communicating with Ollama: ${error.message}`);
    }
}

/**
 * Main function to demonstrate the AI interaction
 */
async function main() {
    console.log('🚀 Starting Local LLM Chat Demo\n');
    console.log(`📡 Using model: ${MODEL_NAME}`);
    console.log(`🔗 Ollama URL: ${OLLAMA_BASE_URL}\n`);

    // Array of sample prompts to test
    const prompts = [
        "What is the capital of France?",
        "Explain quantum computing in simple terms.",
        "Write a haiku about programming."
    ];

    try {
        // Test each prompt
        for (let i = 0; i < prompts.length; i++) {
            const prompt = prompts[i];
            
            console.log(`--- Test ${i + 1}/${prompts.length} ---`);
            
            const startTime = Date.now();
            const response = await sendPromptToOllama(prompt);
            const endTime = Date.now();
            
            console.log(`💬 AI Response:`);
            console.log(`${response}\n`);
            console.log(`⏱️  Response time: ${endTime - startTime}ms\n`);
            console.log('─'.repeat(50) + '\n');
        }

        console.log('✅ All tests completed successfully!');
        
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

// Handle command line arguments for custom prompts
if (process.argv.length > 2) {
    const customPrompt = process.argv.slice(2).join(' ');
    
    console.log('🚀 Starting Local LLM Chat with Custom Prompt\n');
    console.log(`📡 Using model: ${MODEL_NAME}`);
    console.log(`🔗 Ollama URL: ${OLLAMA_BASE_URL}\n`);
    
    sendPromptToOllama(customPrompt)
        .then(response => {
            console.log(`💬 AI Response:`);
            console.log(`${response}\n`);
            console.log('✅ Done!');
        })
        .catch(error => {
            console.error(error.message);
            process.exit(1);
        });
} else {
    // Run the demo with predefined prompts
    main();
} 