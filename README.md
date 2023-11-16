# Smart Contract Deployment

## Preconditions

Before initiating the smart contract deployment process, ensure that the following prerequisites are meticulously addressed:

1. **MetaMask Account Setup:**
   - Establish a MetaMask account, meticulously selecting the Goerli testnet.
   - Acquire test ether from GoerliETH faucets, an essential step for successful contract deployment.
   - Explore [Example 1 for reference.](https://goerli-faucet.pk910.de/)

2. **Alchemy Account Configuration:**
   - Register an account on Alchemy, the pivotal infrastructure for Ethereum development.
   - Within Alchemy, create an application tailored for the Goerli testnet.

   *For comprehensive guidance on these prerequisites, please consult the tutorial provided at the end.*

## Deployment Procedure

Execute the following systematic steps to deploy the smart contract with precision:

1. **Configuration of .env File:**
   - Generate a `.env` file with meticulous attention to detail.
   - Define the essential variables as follows:

     ```env
     API_URL = "https://eth-goerli.g.alchemy.com/v2/{your-api-key}"
     PRIVATE_KEY = "{your-metamask-private-key-of-the-training-account-with-goerli-testnet}"
     ```

2. **Compile the Smart Contract:**
   - Initiate the compilation process for the smart contract with the following command:

     ```bash
     npx hardhat compile
     ```

3. **Smart Contract Deployment:**
   - Execute the deployment script with the following command:

     ```bash
     npx hardhat run scripts/deploy.js --network goerli
     ```

## Utilized Tutorial

For an in-depth tutorial elucidating the nuances of smart contract deployment, we recommend referring to the insightful guide authored by Elan Halpern, titled "Hello World Smart Contract for Beginners."

