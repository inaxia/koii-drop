# KOII DROP
> Hackathon: Hack the Network

## How does KOII DROP work?
1. It Take some required files like csv, fs, etc, Koii-sdk and some wallet paths.
2. It creates tools to be used for transfering Koii.
3. It takes CSV file's path in a variable.
4. It reads the CSV file and takes Name & Wallet Address from that.
5. It adds all the Wallet Addresses to a new list
6. It reads a Wallet from which the Koii would be transferred to others
7. At last, KOII DROP is transferring 0.05 Koii to each to those Wallet adresses present in that list.

## To Sum Up, KOII DROP is:
1. Reading the CSV file
2. Storing all the Wallet Addresses and reading a Wallet from which Koii would be transferred
3. Transfering Koii to the Wallet Addresses present

## Screenshots
![](https://github.com/inaxia/koii-drop/blob/master/assets/website.jpeg) <br>
![](https://github.com/inaxia/koii-drop/blob/master/assets/transferred-koii.jpeg)


## How to run KOII DROP in your system?
1. Clone the repository.
2. Install the required modules via 
```npm install```
3. Add your wallet with its name saved as **wallet.json** in the cloned repo folder.
4. Add a csv file with its name saved as **data.csv** in the cloned repo folder.
5. The csv file should have two column with their header name and data:
    - *NAME*
    - *WALLET ADDRESS*
6. Run the script with 
    ```
        node app.js 
    ```
7. After running the script, Koii tokens will be transferred to the wallet addresses from the csv file.

Made By Team Inaxia<br>
![](https://github.com/inaxia/koii-drop/blob/master/assets/Inaxia.jpeg)