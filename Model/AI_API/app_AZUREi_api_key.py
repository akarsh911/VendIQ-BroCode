from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS,cross_origin

app = Flask(__name__)
CORS(app,supports_credentials=True)

genai.configure(api_key="API")

generation_config = {
    "temperature": 0,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 2048,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    }
]

model = genai.GenerativeModel(model_name="gemini-pro",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

@app.route('/generate', methods=['POST'])
@cross_origin(supports_credentials=True)
def generate_content():
    try:
        # Extract prompts from request
        prompt_parts = request.json.get('prompts', [])

        # Generate content
        response = model.generate_content(prompt_parts)
        print(response.text)
        # Return generated content as JSON response
        return jsonify({'generated_content': response.text})
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
        

if __name__ == '__main__':
    app.run(host='0.0.0.0',port = 5001,debug=True)
