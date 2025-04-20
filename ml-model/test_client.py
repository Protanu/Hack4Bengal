import requests

payload = {
    "transaction_count": 180,
    "nft_count": 80,
    "defi_protocols_used": 30,
    "wallet_age_months": 24,
    "avg_transaction_value_eth": 5.5
}

response = requests.post("http://127.0.0.1:5000/score", json=payload)
print("Wallet Reputation Score:", response.json())