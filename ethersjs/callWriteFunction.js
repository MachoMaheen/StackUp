const { ethers } = require("ethers");
const ABI = require("./ABI");
let PRIVATE_KEY="5bf10919218298ebccb3648f8c1a9cede36d9033afe1ba55052b532fe62c73ee"
//5bf10919218298ebccb3648f8c1a9cede36d9033afe1ba55052b532fe62c73ee this is my private key so delete when uploading to git.leave the field in that part containing the key.


const callWriteFunction = async () => {
 // Create a provider instance
 const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

 // Create a wallet instance
 const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

 // Create the contract instance and connect it to our wallet
 const contract = new ethers.Contract(
  "0xCC8048eF226eb2383B08949F752Cf31932d487cc",
  ABI.humanReadableABI,
  wallet
 );

 // Get ERC20 token symbol
 const symbol = await contract.symbol();

 // Call mint function from smart contract and mint 10 MOCK token
 try {
  await contract.mint(wallet.address, ethers.utils.parseUnits("100", 18));
  console.log("Mint Success!");

  // Get balance of our wallet
  const balance = await contract.balanceOf(wallet.address);
  const formattedBalance = ethers.utils.formatUnits(balance, 18);
  console.log(
   `Token balance of ${wallet.address}: ${formattedBalance} ${symbol}`
  );
 } catch (err) {
  console.log(err);
 }
};

callWriteFunction();