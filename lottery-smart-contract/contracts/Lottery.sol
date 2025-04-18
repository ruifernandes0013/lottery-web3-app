// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Lottery {

    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
      require(msg.sender != manager, "Manager can't play");
      require(msg.value >= .001 ether, "Minimum entry fee is 0.01 Ether");

      players.push(msg.sender); 
    }

    function getWinner() public payable restricted  {
      require(players.length > 0, "No player entered"); 
      uint index = getRandomNumber();
      address winner = players[index];

      payable(winner).transfer(address(this).balance);
      players = new address[](0);
    }

    function getRandomNumber() private view returns (uint) {
      return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players))) % players.length;
    }

    function getPlayers() public view returns (address[] memory) {
      return players;
    }

    modifier restricted() {
      require(msg.sender == manager, "Only manager can call this");
      _;
    }
}