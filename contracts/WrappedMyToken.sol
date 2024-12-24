// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import { MyToken } from './MyToken.sol';

contract WrappedMyToken is MyToken {
    constructor(string memory tokenName,string memory tokenSymbol)
    MyToken(tokenName,tokenSymbol){}
    
    function mintToenWithSpecificTokenId(address to,uint256 tokenId) public {
        _safeMint(to,tokenId);   
    }
}