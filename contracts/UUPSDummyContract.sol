// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/// @custom:oz-upgrades-unsafe-allow constructor
contract UUPSDummyContract is OwnableUpgradeable, UUPSUpgradeable {
    uint256 dummyNum;
    mapping(uint => address) public list;

    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {       
        dummyNum = 2008;
        __Ownable_init(msg.sender);
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}

    function setVal() external {
        dummyNum+=1;
        list[dummyNum] = msg.sender;
    }
}