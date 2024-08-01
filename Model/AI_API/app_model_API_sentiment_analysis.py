# from flask import Flask, request, jsonify
# import string
# import json
# from nltk.tokenize import word_tokenize
# from nltk.corpus import stopwords
# from nltk.sentiment.vader import SentimentIntensityAnalyzer
# from tensorflow.keras.preprocessing.sequence import pad_sequences # type: ignore

# app = Flask(__name__)

# def sentiment_analyse(sentiment_text):
#     analyzer = SentimentIntensityAnalyzer()
#     scores = analyzer.polarity_scores(sentiment_text)
#     compound_score = scores['compound']
    
#     if compound_score >= 0.05:
#         sentiment = 'Positive'
#     elif compound_score <= -0.05:
#         sentiment = 'Negative'
#     else:
#         sentiment = 'Neutral'
#     return sentiment

# def sarcasm_detection(input_text):
#     sarcasm_threshold = 0.5
#     analyzer = SentimentIntensityAnalyzer()
#     scores = analyzer.polarity_scores(input_text)
#     compound_score = scores['compound']
    
#     if compound_score < -sarcasm_threshold:
#         sarcasm_result = 'SARCASM DETECTED'
#     else:
#         sarcasm_result = 'NOT SARCASTIC'
    
#     return sarcasm_result

# @app.route('/analyze', methods=['POST'])
# def analyze_text():
#     json_data = request.get_json()  # Fetch JSON data from the request body
#     text = json_data.get('headline', '')  # Extract 'headline' field from JSON data
#     cleaned_text = text.translate(str.maketrans('', '', string.punctuation))
#     tokenized_words = word_tokenize(cleaned_text, "english")
#     stop_words = set(stopwords.words('english'))
#     lemma_words = [word.lower() for word in tokenized_words if word.lower() not in stop_words]

#     sentiment_result = sentiment_analyse(cleaned_text)
#     sarcasm_result = sarcasm_detection(cleaned_text)

#     output = {
#         'headline': text,
#         'sentiment': sentiment_result,
#         'sarcasm_detection': sarcasm_result
#     }

#     return jsonify(output)

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
import string
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from flask_cors import cross_origin,CORS
app = Flask(__name__)

CORS(app,supports_credentials=True)

def sentiment_analyse(sentiment_text):
    analyzer = SentimentIntensityAnalyzer()
    scores = analyzer.polarity_scores(sentiment_text)
    compound_score = scores['compound']
    
    if compound_score >= 0.05:
        sentiment = 'Positive'
    elif compound_score <= -0.05:
        sentiment = 'Negative'
    else:
        sentiment = 'Neutral'
    return sentiment

def sarcasm_detection(input_text):
    sarcasm_threshold = 0.5
    analyzer = SentimentIntensityAnalyzer()
    scores = analyzer.polarity_scores(input_text)
    compound_score = scores['compound']
    
    if compound_score < -sarcasm_threshold:
        sarcasm_result = 'SARCASM DETECTED'
    else:
        sarcasm_result = 'NOT SARCASTIC'
    
    return sarcasm_result

@app.route('/analyze', methods=['POST'])
@cross_origin(supports_credentials=True)
def analyze_text():
    json_data = request.get_json()  # Fetch JSON data from the request body
    results = []

    # Iterates over each item in the 'headlines' list
    for item in json_data.get('headlines', []):
        text = item.get('headline', '')
        cleaned_text = text.translate(str.maketrans('', '', string.punctuation))
        tokenized_words = word_tokenize(cleaned_text, "english")
        stop_words = set(stopwords.words('english'))
        filtered_words = [word.lower() for word in tokenized_words if word.lower() not in stop_words]

        sentiment_result = sentiment_analyse(cleaned_text)
        sarcasm_result = sarcasm_detection(cleaned_text)

        result = {
            'headline': text,
            'sentiment': sentiment_result,
            'sarcasm_detection': sarcasm_result
        }
        results.append(result)

    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)
