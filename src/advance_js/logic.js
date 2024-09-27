// You can buy a full bottle cost 8Rs
// Empty bottle when return give you 5Rs
// If you have 500 how many  bottle buy

function calculateByABottleAndRemaingAmount(
  bottlePrice,
  emptyBottlePriceWorth
) {
  let totalBottles = 0;
  const bottleOfPrice = bottlePrice;
  const emptyBottlePrice = emptyBottlePriceWorth;
  let remainingAmount = 0;
  const calcualtePriceAndBottle = (amount) => {
    if (amount < bottlePrice) return totalBottles + "," + remainingAmount;

    let totalBottlePurchase = Math.floor(amount / bottleOfPrice);

    totalBottles += totalBottlePurchase;

    remainingAmount = Math.floor(amount % bottleOfPrice);

    remainingAmount += totalBottlePurchase * emptyBottlePrice;

    return calcualtePriceAndBottle(remainingAmount);
  };

  return (amount) => {
    return calcualtePriceAndBottle(amount);
  };
}

var bottleAndEmty = new calculateByABottleAndRemaingAmount(8, 5);
console.log(bottleAndEmty(13));
