const exchangeRate = 80;

const items = {
  apple: 1.5,
  banana: 0.75,
  orange: 1.0,
  mango: 2.0,
};

const convertedPrices = Object.entries(items).map(([itemName, priceInUSD]) => {
  const priceInINR = priceInUSD * exchangeRate;
  return { item: itemName, priceINR: priceInINR };
});

console.log("Converted Prices:", convertedPrices);

