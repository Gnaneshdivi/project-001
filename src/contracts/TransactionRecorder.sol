pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Strings.sol";
contract TransactionRecorder {
    
    struct TransactionData {
        string txnId;
        string senderAddress;
        string receiverAddress;
        string txnref1;
        string txnref2;
        uint256 amount;
        string sendingType;
        string receivingType;
        string network;
    }
    
    TransactionData[] public upiTransactions;
    TransactionData[] public cryptoTransactions;
    TransactionData[] public crossTransactions;
    
    function recordTransaction(
        string memory _txnId,
        string memory _senderAddress,
        string memory _receiverAddress,
        string memory _txnref1,
        string memory _txnref2,
        uint256 _amount,
        string memory _sendingType,
        string memory _receivingType,
        string memory _network
    ) public {
        TransactionData memory txnData = TransactionData({
            txnId: _txnId,
            senderAddress: _senderAddress,
            receiverAddress: _receiverAddress,
            txnref1: _txnref1,
            txnref2: _txnref2,
            amount: _amount,
            sendingType: _sendingType,
            receivingType: _receivingType,
            network :_network
        });
        
        if (keccak256(bytes(_network)) == keccak256(bytes("INR")) && bytes(_txnref2).length == 0) {
            upiTransactions.push(txnData);
        } else if ((keccak256(bytes(_network)) == keccak256(bytes("ETH")) || keccak256(bytes(_network)) == keccak256(bytes("MATIC"))) && bytes(_txnref1).length == 0) {
            cryptoTransactions.push(txnData);
        } else {
            crossTransactions.push(txnData);
        }
    }
    
    function getUpiTransactions() public view returns (TransactionData[] memory) {
        return upiTransactions;
    }
    
    function getCryptoTransactions() public view returns (TransactionData[] memory) {
        return cryptoTransactions;
    }
    
    function getCrossTransactions() public view returns (TransactionData[] memory) {
        return crossTransactions;
    }

    function getTransactionData(string memory _txnId) public view returns (string memory) {
    for (uint256 i = 0; i < upiTransactions.length; i++) {
        if (keccak256(bytes(upiTransactions[i].txnId)) == keccak256(bytes(_txnId))) {
            TransactionData memory data = upiTransactions[i];
            return string(abi.encodePacked(
                "Transaction ID: ", data.txnId, "\n",
                "Sender: ", data.senderAddress, "\n",
                "Receiver: ", data.receiverAddress, "\n",
                "Amount: ", Strings.toString(data.amount), " ", data.sendingType, "\n",
                "Recieved Type", data.receivingType,"\n",
                "Network: ", data.network, "\n",
                "Transaction Type: UPI"
            ));
        }
    }
    
    for (uint256 i = 0; i < cryptoTransactions.length; i++) {
        if (keccak256(bytes(cryptoTransactions[i].txnId)) == keccak256(bytes(_txnId))) {
            TransactionData memory data = cryptoTransactions[i];
            return string(abi.encodePacked(
                "Transaction ID: ", data.txnId, "\n",
                "Sender: ", data.senderAddress, "\n",
                "Receiver: ", data.receiverAddress, "\n",
                "Amount: ", Strings.toString(data.amount), " ", data.sendingType, "\n",
                "Recieved Type", data.receivingType,"\n",
                "Network: ", data.network, "\n",
                "Transaction Type: Crypto"
            ));
        }
    }
    
    for (uint256 i = 0; i < crossTransactions.length; i++) {
        if (keccak256(bytes(crossTransactions[i].txnId)) == keccak256(bytes(_txnId))) {
            TransactionData memory data = crossTransactions[i];
            return string(abi.encodePacked(
                "Transaction ID: ", data.txnId, "\n",
                "Sender: ", data.senderAddress, "\n",
                "Receiver: ", data.receiverAddress, "\n",
                "Amount: ", Strings.toString(data.amount), " ", data.sendingType, "\n",
                "Recieved Type", data.receivingType,"\n",
                "Network: ", data.network, "\n",
                "Transaction Type: Cross"
            ));
        }
    }
    
    revert("Transaction not found");
}


    
}
