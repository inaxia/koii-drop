const csv = require('csv-parser');
const fs = require('fs');
const koiSdk = require("@_koi/sdk/common");
const walletpath = "wallet.json";
const tools = new koiSdk.Common();


const filepath = "data.csv" //path to csv file

const list = []

fs.createReadStream(filepath)
  .on('error', () => {
    // handle error
  })

  .pipe(csv())
  .on('data', (data) => {
    try {
      console.log(data["NAME"]);
      console.log(data["WALLET ADDRESS"]);
      list.push(data["WALLET ADDRESS"]);
    } catch (err) {}
  })

  .on('end', async function () {
    // handle end of CSV

    await tools.loadWallet(
      JSON.parse(await fsPromises.readFile(walletpath, "utf8"))
    );

    console.log("Addresses :" + list);
    list.forEach(transferKOII);

    console.log(list);
  });

  

const transferKOII = async (address) => {

  const tx = await tools.transfer(
      0.05,
      address,
      "KOI"
  );
  console.log("tx:" + tx);
};