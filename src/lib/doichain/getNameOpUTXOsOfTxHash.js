import moment from 'moment/moment.js'
import sb from "satoshi-bitcoin";

/**
 * Takes a txid and returns name_op outputs with extracted
 * nameId, nameValue, wallet address, amount
 *
 * @param electrumClient
 * @param tx
 * @returns {Promise<{nameOpUtxos: *[], outputsScanned: number}>}
 */
export async function getNameOpUTXOsOfTxHash(electrumClient, tx, n) {

	const parsedUtxos = []
	const txDetails = await electrumClient.request('blockchain.transaction.get', [tx, true]);
	// console.log("txDetails",txDetails)
	if(n !== undefined) {
		const parsedUtxo = txDetails.vout[n] //await getNameOpOfVout(electrumClient, vout)
		parsedUtxo.txid = txDetails.txid;
		parsedUtxo.hex = txDetails.hex;
		parsedUtxo.value = sb.toSatoshi(parsedUtxo.value); // Convert to satoshis
		parsedUtxo.formattedBlocktime = txDetails.blocktime ? moment.unix(txDetails.blocktime).format('YYYY-MM-DD HH:mm:ss') : 'mempool';
		// console.log("parsedUtxo",parsedUtxo)
		return parsedUtxo
	}
	else {
		for (const vout of txDetails.vout) {
			const parsedUtxo = vout //await getNameOpOfVout(electrumClient, vout)
			parsedUtxo.txid = txDetails.txid;
			parsedUtxo.hex = txDetails.hex;
			parsedUtxo.value = sb.toSatoshi(parsedUtxo.value); // Convert to satoshis
			parsedUtxo.formattedBlocktime = txDetails.blocktime ? moment.unix(txDetails.blocktime).format('YYYY-MM-DD HH:mm:ss') : 'mempool';
			parsedUtxos.push(parsedUtxo)
			// console.log("parsedUtxos",parsedUtxos)
		}
		return parsedUtxos
	}
}