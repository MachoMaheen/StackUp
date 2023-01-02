const { ethers } = require("ethers");

const readChainData = async () => {
  // 1. Create a provider instance
  const provider = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  );

  // 2. Get current block number
  const blockNumber = await provider.getBlockNumber();
  console.log("Block Number:", blockNumber);

  // 3. Get ethers balance for a specific wallet
 const balance = await provider.getBalance("0xd9a9D3c265a875b0F97C45db50ade3c0a3fbEFd0");
 const formattedBalance = ethers.utils.formatEther(balance);
 console.log("Balance(in BigNumber format):",balance,"\nFormatted Balance(in Number Format):", formattedBalance, "ether");//goerliEth not original Eth balance😂
};
readChainData();
