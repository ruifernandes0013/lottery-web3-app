import { expect } from "chai";
import { ethers } from "hardhat";
import { Lottery } from "../typechain-types";

let lotteryContract: Lottery
let manager: string
let players: any [] = []
let baseErrorMessage = 'VM Exception while processing transaction: reverted with reason string '

describe("Lottery", function () {
  this.beforeEach(async() => {
  const accounts = await ethers.getSigners();
    manager = accounts.shift()!.address
    
    const otherAccounts = accounts.slice(1, accounts.length)
    otherAccounts.forEach(acc => players.push(acc));

    lotteryContract = await ethers.deployContract("Lottery");
  })

  describe("Deployment", function () {
    it("Should deployed the contract and set the manager", async function () {
      const contractManagerResult = await lotteryContract.manager()
      expect(contractManagerResult).to.be.eq(manager)
    });
  });

  describe("Enter the game", function () {
    it("Should enter the game and pay to play", async function () {
      await lotteryContract.connect(players[0]).enter({ value: ethers.parseEther("1") })
      await lotteryContract.connect(players[1]).enter({ value: ethers.parseEther("1") })
      await lotteryContract.connect(players[2]).enter({ value: ethers.parseEther("1") })

      const playersInGame = await lotteryContract.getPlayers()
      expect(playersInGame.length).to.be.eq(3)
    });

    it("Should prevent to get the winner without players", async function () {
      try {
        await lotteryContract.getWinner()
      } catch (error: any) {
        expect(error.message)
          .to.be.eq(`${baseErrorMessage}'No player entered'`)
      }
    });

    it("Should prevent managers from playing", async function () {
      try {
        await lotteryContract.enter({ value: ethers.parseEther("1") })
      } catch (error: any) {
        expect(error.message)
          .to.be.eq(`${baseErrorMessage}'Manager can't play'`)
      }
    });

    it("Should block when trying to enter without pay", async function () {
      try {
        await lotteryContract.connect(players[0]).enter()
      } catch (error: any) {
        expect(error.message)
          .to.be.eq(`${baseErrorMessage}'Minimum entry fee is 0.01 Ether'`)
      }
    });

    it("Should prevent players to get the winner", async function () {
      try {
        await lotteryContract.connect(players[0]).getWinner()
      } catch (error: any) {
        expect(error.message)
          .to.be.eq(`${baseErrorMessage}'Only manager can call this'`)
      }
    });
  });

  describe("Get the winner", function () {
    it("Should get the winner", async function () {
      await lotteryContract.connect(players[0]).enter({ value: ethers.parseEther("1") })
      await lotteryContract.connect(players[1]).enter({ value: ethers.parseEther("1") })
      await lotteryContract.connect(players[2]).enter({ value: ethers.parseEther("1") })

      const playersInGame = await lotteryContract.getPlayers()
      
      expect(playersInGame.length).to.be.eq(3)

      await lotteryContract.getWinner()
      
      const playersReset = await lotteryContract.getPlayers()

      expect(playersReset.length).to.be.eq(0)
    });
  });
});
