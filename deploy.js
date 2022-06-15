const ethers = require('ethers');
const fs = require('fs-extra');

async function main() {
	const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
	const wallet = new ethers.Wallet('58c5f88585d4c1036eee5349a9124a6bd5d82fd8cf1c579d948926fd1ae24cda', provider);
	const abi = fs.readFileSync('./_SimpleStorage_sol_SimpleStorage.abi', 'utf8');
	const binary = fs.readFileSync('./_SimpleStorage_sol_SimpleStorage.bin', 'utf8');
	const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
	console.log('Deploying, Please wait ...');
	const contract = await contractFactory.deploy();
	console.log(contract);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
