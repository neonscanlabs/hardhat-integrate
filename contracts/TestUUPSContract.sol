// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/// @custom:oz-upgrades-unsafe-allow constructor
contract TestUUPSContract is OwnableUpgradeable, UUPSUpgradeable {
    uint public someVal;

    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {       
        __Ownable_init(msg.sender);
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}

    function setVal(uint _someVal) external onlyOwner {
        someVal = _someVal;
    }
}