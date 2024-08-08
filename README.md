# Names-On-Chain 
# A Doichain - PSBT Workshop

## Description
This 4-step workshop is intended to showcase how you can register and show Doichain names
and how to create and sign NameOp transactions via PSBT-QR-Codes and PSBT-Files.
PSBTs can be scanned and broadcasted by DoiWallet or via file import into the ElectrumDOI wallet.
No private key necessary in the browser.

See: ipfs://bafybeifj5jp3m3bhpjkls4smy34i4hxvbpasql7dbtkpcr65bawrs2js3u/

## Lesson 1)
0. Clone this repo and run ```npm i``` 
1. Connect to ElectrumX in src/routes/+layout.js
2. Validate name to be registered in src/lib/components/pricing.svelte
   - is name already registered? 
   - if yes - which address?
3. Build project and add to local ipfs node
```
npm run build
mv public lesson01 
ipfs add public/
```
4. Run Brave browser and open ipfs url: ipfs://{cid of your ipfs add command} 
5. Checkout branch lesson02)

## Goal of this lesson
1. How to connect to Electrumx via secure websocket (wss) 
   a) src/lib/doichain/connectElectrum.js
   b) understanding the Electrum API https://electrum.readthedocs.io/en/latest/protocol.html
   c) (optionally) setting up a Doichain Node and an ElectrumX Node with SSL

2. NameOps, NameId, NameValue, Recipient (owner) 
   a) src/lib/doichain/nameShow.js
   b) what is a UTXO (unspent transaction output) 
   c) what are inputs and outputs of a transaction
   b) response of a nameShow command (tx history of the nameOp)

## Lesson 2)
1. Add an address input below the name input 
   - src/lib/components/pricing.svelte
2. Gather UTXOs and NameOps of this address (show name and expiration)
   - src/lib/doichain/utxoHelpers.js
3. Add an QR-Code scanner to scan an address
   - use src/lib/doichain/ScanModal.svelte
4. Show registered NameOps with expiration block
   - src/lib/components/pricing.svelte
5. Build project and add to local ipfs node
```
npm run build
mv public lesson02
ipfs add -r lesson02
```
4. Run Brave browser and open ipfs url: ipfs://{cid of your ipfs add command} (or: ipfs://QmWnDdeb1oWgYZKuyfJm49Bp9G7FwjCTkYiCXoD2Skfsz9)
5. Checkout branch lesson03)