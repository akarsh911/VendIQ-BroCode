
import google.generativeai as genai
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

prompt_parts = [
    "what courses are offered by programming pathshalla","i wantv this course as backup as i am already in coaching so figure that out","i only want top 5 AI courses","i am not financially well established so cant spend more than 1000 rs"
    # "i am not really satisfied aws sevices","i am being charged rs 5000 for working where i enrolled in free plan","i am not really satisfied"
]

response = model.generate_content(prompt_parts)
print(response.text)