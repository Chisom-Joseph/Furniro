export default (price: number, discountedPrice: number): number => {
  if (price <= 0) return 0;

  const discount = price - discountedPrice;
  const discountPercentage = (discount / price) * 100;

  return Math.round(discountPercentage);
};
