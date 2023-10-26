export const formatCurrency = (value) =>
    new Intl.NumberFormat('en', { style: 'currency', currency: 'VND', currencyDisplay: 'narrowSymbol' }).format(value);

export function calculateDiscountedPrice(originalPrice, discount) {
    if (originalPrice < 0 || discount < 0 || discount > 100) {
        return 'Giá hoặc giảm giá không hợp lệ';
    }

    const discountedPrice = originalPrice - originalPrice * (discount / 100);

    return formatCurrency(discountedPrice);
}
