async function main() {
  const nftContractFactory = await hre.ethers.getContractFactory("UglartNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  console.log("Preparing nft...");
  let txn = await nftContract.makeUglartNFT();

  await txn.wait();
  console.log("Mint #1 complete");

  console.log("Preparing nft...");
  txn = await nftContract.makeUglartNFT();

  await txn.wait();
  console.log("Mint #2 complete");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });