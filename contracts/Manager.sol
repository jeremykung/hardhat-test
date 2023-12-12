// SPDX-License-Identifier: ISC
pragma solidity ^0.8.19;

import "./HelloWorld.sol";

contract Manager {
    HelloWorld public helloWorldContract;

    constructor(address _helloWorldContract) {
        helloWorldContract = HelloWorld(_helloWorldContract);
    }
    function doStuff() external view returns (string memory) {
        return helloWorldContract.hi();
    }
}