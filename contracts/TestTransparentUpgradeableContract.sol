// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/// @custom:oz-upgrades-unsafe-allow constructor
contract TestTransparentUpgradeableContract is Initializable, OwnableUpgradeable {
    uint public someVal;

    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {       
        __Ownable_init(msg.sender);
    }

    function setVal(uint _someVal) external onlyOwner {
        someVal = _someVal;
    }
}