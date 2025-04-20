import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
import joblib

def generate_sample_data(n=1000):
    np.random.seed(42)
    data = pd.DataFrame({
        'transaction_count': np.random.randint(1, 500, n),
        'nft_count': np.random.randint(0, 50, n),
        'defi_protocols_used': np.random.randint(0, 10, n),
        'wallet_age_months': np.random.randint(1, 60, n),
        'avg_transaction_value_eth': np.random.uniform(0.001, 5, n),
    })

    data['reputation_score'] = (
        (data['transaction_count'] * 0.2) +
        (data['nft_count'] * 1.5) +
        (data['defi_protocols_used'] * 5) +
        (data['wallet_age_months'] * 0.8) +
        (data['avg_transaction_value_eth'] * 10)
    )

    data['reputation_score'] = (
        100 * (data['reputation_score'] - data['reputation_score'].min()) /
        (data['reputation_score'].max() - data['reputation_score'].min())
    )

    return data

def train_model():
    data = generate_sample_data()
    X = data[['transaction_count', 'nft_count', 'defi_protocols_used', 'wallet_age_months', 'avg_transaction_value_eth']]
    y = data['reputation_score']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)
    error = mean_absolute_error(y_test, predictions)
    print(f"Validation MAE: {error:.2f}")

    joblib.dump(model, "reputascore_model.pkl")
    print("✅ Model saved as 'reputascore_model.pkl'.")

if __name__ == "__main__":
    train_model()