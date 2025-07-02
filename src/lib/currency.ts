
export const formatPrice = (price: string, currency: string, locale: string): string => {
  if (price === 'Custom') {
    switch (locale) {
      case 'fr':
        return 'Personnalisé';
      case 'ar':
        return 'مخصص';
      default:
        return 'Custom';
    }
  }

  const numericPrice = parseInt(price, 10);
  
  // Format with thousands separator based on locale
  const formattedNumber = numericPrice.toLocaleString(locale === 'ar' ? 'ar-MA' : locale === 'fr' ? 'fr-MA' : 'en-US');
  
  // Add space before currency for MAD (Moroccan convention)
  return `${formattedNumber} ${currency}`;
};
