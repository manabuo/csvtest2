//Public class CcxtCsv(){

// JavaScript
//console.log (ccxt.exchanges)

var _exchanges = [];
_exchanges = ccxt.exchanges;

//console.log(_exchanges);
//console.log(_exchanges[3]);
/*
var exc = {
    A: "A",
    B: "B",
    C: "C"
}
*/
var exc = _exchanges;   // All exchanges
var _exch;              // Exchange instance
var _markets;           // Markets of the exchange
var _symbols;           // Symbols of the exchange
var _timeframes;        // Timeframes
var _www;               // Website
                                                                                           

var mealsByCategory = {
    A: ["Soup", "Juice", "Tea", "Others"],
    B: ["Soup", "Juice", "Water", "Others"],
    C: ["Soup", "Juice", "Coffee", "Tea", "Others"]
}


window.onload = function () {
  // ここに読み込み完了時に実行してほしい内容を書く。
    //if (value.length == 0) document.getElementById("meal").innerHTML = "<option></option>";
    //else {
        var excOptions = "<option value='' disabled selected>Select</option>";
        //var excName;
        for (excId in exc) {
            //var id = excId;
            //var exch = new ccxt[id]();
            //console.log(excId);
            //console.log(exc[excId]);

            let id = exc[excId]
            let exch = new ccxt[id] ();
            
            //excOptions += "<option>" + exc[excId] + "</option>";
            excOptions += "<option value = '" + exch.id + "'>" + exch.name + "</option>";
        }
        document.getElementById("exch").innerHTML = excOptions;
    //}
};



    function changeExchange(exchId) {
        if (exchId.length == 0) document.getElementById("symbol").innerHTML = "<option></option>";
        else {
            // Get markets & symbols data.
            getMarkets(exchId);

            // Get symbol data.

            var catOptions = "";
            for (categoryId in mealsByCategory[exchId]) {
                catOptions += "<option>" + mealsByCategory[exchId][categoryId] + "</option>";
            }
            document.getElementById("symbol").innerHTML = catOptions;
        }
    }


    // Get markets
    function getMarkets(exchId){
        (async () => {
            _exch = new ccxt[exchId] ();
            _markets = await _exch.load_markets ();
            console.log ("_markets:", exchId, _markets);

            _symbols = await _exch.symbols;
            console.log ("_markets:", exchId, _symbols);

            _timeframes = await _exch.timeframes;
            console.log("_timeframes:", exchId, _timeframes);
        }) ()
    }


    // Get symbol data
    function getSymbols(exchId){
// JavaScript

(async () => {

    console.log (await exchange.loadMarkets ())

    let btcusd1 = exchange.markets['BTC/USD']     // get market structure by symbol
    let btcusd2 = exchange.market ('BTC/USD')     // same result in a slightly different way

    let btcusdId = exchange.marketId ('BTC/USD')  // get market id by symbol

    let symbols = exchange.symbols                // get an array of symbols
    let symbols2 = Object.keys (exchange.markets) // same as previous line

    console.log (exchange.id, symbols)            // print all symbols

    let currencies = exchange.currencies          // a list of currencies

    let bitfinex = new ccxt.bitfinex ()
    await bitfinex.loadMarkets ()

    bitfinex.markets['BTC/USD']                   // symbol → market (get market by symbol)
    bitfinex.marketsById['XRPBTC']                // id → market (get market by id)

    bitfinex.markets['BTC/USD']['id']             // symbol → id (get id by symbol)
    bitfinex.marketsById['XRPBTC']['symbol']      // id → symbol (get symbol by id)

})
    }


//}