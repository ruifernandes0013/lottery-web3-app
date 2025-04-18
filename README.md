# 🎰 Lottery DApp

A full-stack Ethereum-based lottery application built with:

- **Smart Contracts** using [Solidity](https://soliditylang.org/), [TypeScript](https://www.typescriptlang.org/), and [Hardhat](https://hardhat.org/)
- **Frontend** using [React](https://reactjs.org/) and [Web3.js](https://web3js.readthedocs.io/)

---

## 🧱 Project Structure

```bash
lottery-dapp/
 ├──lottery-react/            # React frontend for the DApp
 └──lottery-smart-contract/   # Smart contract source code
```

## 🚀 Deploy the smart contract

### 1. Enter the folder

```bash
  cd lottery-smart-contract
```

### 2. Install dependencies
```bash
npm install
```

### 3. Compile contracts
```bash
npx hardhat compile
```

### 4. Run tests
```bash
npx hardhat test
```

### 5. Deployment (with Hardhat Ignition)
Make sure your .env and hardhat.config.ts are properly set up with network info.
Deploy to a testnet (e.g., Sepolia)
```bash
npx hardhat ignition deploy ignition/modules/Lottery.ts --network sepolia
```

### 📜 Contract Overview
##### File: contracts/Lottery.sol

This contract allows users to enter a lottery by sending ETH. The contract owner can randomly select a winner and transfer the entire balance to them.

### ✅ Features
##### 🎟️ Participants enter by sending ETH

##### 👑 Only the owner can call getWinner

##### 💰 The entire contract balance is transferred to the winner

##### 🎲 (Optional) Chainlink VRF can be added for randomness

----
## 🚀 Start the React App

### 1. Enter the folder
   ```bash
   cd lottery-react
   ```

### 2. Install dependencies
   ```bash
   npm install
   ```

### 3. Start the development server
   ```bash
   npm run start
   ```

This will launch the app at http://localhost:3000. The app will auto-reload on code changes.

## 🧪 Available Scripts

1. npm start – Runs the app in development mode
2. npm test – Launches the test runner
3. npm run build – Builds the app for production
4. npm run eject – Ejects from Create React App configuration (irreversible)

💡 You generally won't need to use eject unless you need full control over the build tools.




### 📄 License
This project is licensed under the MIT License.
