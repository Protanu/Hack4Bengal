# 🚀 AI-Powered Web3 Identity Scoring

An intelligent reputation scoring system for Web3 wallets using AI and on-chain activity analysis.

---

## 🧠 Overview

**AI-Powered Web3 Identity Scoring** assigns a dynamic Reputation Score to Ethereum wallets based on:
- 💸 Transaction patterns
- 🖼️ NFT holdings
- 🏦 DeFi protocol usage
- ⏳ Wallet age
- 💰 Average transaction value

This score can be used for access control, airdrop eligibility, lending risk assessment, and more!

---

## ⚙️ Tech Stack

- 💻 **Frontend:** React + TailwindCSS + WalletConnect
- 🖥️ **Backend:** Node.js + Flask
- 🧪 **Machine Learning:** Python, scikit-learn (RandomForest)
- 🔗 **Blockchain:** Ethereum
- 🤖 **AI Support:** OpenAI / GPT for future expansion

---

## 🏁 Getting Started

### 📂 Clone the Repository

```bash
git clone https://github.com/your-username/reputascore.git
cd reputascore
```

---

## 💻 Frontend Setup

1. Navigate to the `client` folder:

```bash
cd client
```

2. Install dependencies:

```bash
npm i
```

3. Start the development server:

```bash
npm run dev
```

---

## 🧑‍💻 ML Model Setup

1. Ensure Python 3.x is installed.

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Train the model:

```bash
python model.py
```

4. Start the Flask API server:

```bash
python server.py
```

5. Test the model using the local client:

```bash
python test_client.py
```

---

## 🗂️ Folder Structure

```
reputascore/
├── client/              # React frontend
├── server.py            # Flask API to serve the ML model
├── model.py             # Train and save the RandomForest ML model
├── test_client.py       # Python client to test the model API
├── requirements.txt     # Python dependencies
```

---

## 📡 Example API Request

POST `/score`

```json
{
  "transaction_count": 120,
  "nft_count": 4,
  "defi_protocols_used": 3,
  "wallet_age_months": 18,
  "avg_transaction_value_eth": 0.5
}
```

Expected Response:

```json
{
  "reputation_score": 73.45
}
```

---

## 👨‍💼 Team Members

- 🧑‍💻 Protanu Banerjee
- 🧑‍💻 Prabir Rout
- 🧑‍💻 Tunir Lahiri
- 🧑‍💻 Tanishqua Roy

---

## 📜 License

MIT License

---

✨ **Crafted for Web3 Innovation — powered by AI!** 🔥
