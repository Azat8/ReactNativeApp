class SubscribeCurrencies {
	constructor() {
		this.apiUrl = "https://min-api.cryptocompare.com/data/";
		this.imageUrl = "https://cryptocompare.com";
	}

	getCoins(options) {
		let url = this.apiUrl + options.path;
		console.log(url);
		return fetch(url, {
			method: 'GET',
		})
		.then((data) => {
			return data.json(); 
		})
		.catch((error) => {
	      	console.error(error);
	    });
	}

}

export default SubscribeCurrencies;