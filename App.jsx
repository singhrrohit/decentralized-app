import './App.css';
import Web3 from "web3"
import { useState, useEffect } from 'react';

function App () {

  const [account, setAccount] = useState()
  const [balance, setBalance] = useState()
  const [network, setNetwork] = useState()
const web3 = new Web3(Web3.givenProvider)

useEffect (()=>{
loadAccounts()

}, [])

useEffect(()=>{
  loadBalance()
},[account])

async function loadAccounts(){

  const network = await web3.eth.requestAccounts();
  setAccount(account[0])
}

async function loadBalance(){

  const network = await web3.eth.net.getNetworkType()
  const balance = await web3.eth.getBalance(account)
  setNetwork(network)
  setBalance(balance)

}

return (

<div className='App'>
<header className='App-header'>
  Decentralised App
<p>
  Your Account : ({account})
</p>

<p>
Your Balance ({network}) :
ETH {balance}


</p>

</header>


</div>

);




}

export default App;