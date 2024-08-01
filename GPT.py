from flask import Flask, request, jsonify
import requests
import logging
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS
CORS(app)

# Replace these values with your actual endpoint and key
endpoint = "https://openaibob.openai.azure.com/openai/deployments/BOBHackathon/chat/completions?api-version=2023-03-15-preview"
api_key = "API_KEY"

# Define the headers
headers = {
    "Content-Type": "application/json",
    "api-key": api_key
}

# Configure logging
logging.basicConfig(filename='interaction_log.txt', level=logging.INFO, format='%(asctime)s - %(message)s')

@app.route('/process', methods=['POST'])
def process():
    if not request.json or 'prompts' not in request.json:
        return jsonify({'error': 'Invalid request'}), 400

    prompts = request.json['prompts']

    # Define the data payload
    data = {
        "messages": [
            {"role": "system", "content": "You are a phone call assistant for banking service. Answer questions of the user. "},
            {"role": "user", "content": prompts[1]}
        ]
    }

    # Make the API request to OpenAI
    response = requests.post(endpoint, headers=headers, json=data)

    # Check if the request was successful
    if response.status_code == 200:
        response_data = response.json()
        reply = response_data['choices'][0]['message']['content']
        
        # Log user prompt and system response
        logging.info(f"User Prompt: {prompts[0]}")
        logging.info(f"System Response: {reply}")
        
        return jsonify({'response': reply})
    else:
        # Log the error
        logging.error(f"Error: {response.status_code} - {response.json()}")
        
        return jsonify({
            'error': 'OpenAI API request failed',
            'status_code': response.status_code,
            'details': response.json()
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
