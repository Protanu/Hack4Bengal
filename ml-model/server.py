from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load("trained_model.pkl")

@app.route('/score', methods=['POST'])
def predict_score():
    data = request.get_json()
    features = np.array([
        data['transaction_count'],
        data['nft_count'],
        data['defi_protocols_used'],
        data['wallet_age_months'],
        data['avg_transaction_value_eth']
    ]).reshape(1, -1)

    score = model.predict(features)[0]
    return jsonify({
        "reputation_score": round(float(score), 2)
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)