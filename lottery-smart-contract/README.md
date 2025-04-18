# 🎲 Lottery Smart Contract

A simple Ethereum lottery contract project using [Hardhat](https://hardhat.org/), [TypeScript](https://www.typescriptlang.org/), and [Solidity](https://soliditylang.org/). This project includes smart contract development, testing, and deployment using Hardhat Ignition.

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ruifernandes0013/lottery-smart-contract.git
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




### 📄 License
This project is licensed under the MIT License.
