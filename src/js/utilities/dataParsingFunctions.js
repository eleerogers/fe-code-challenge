function cheapestVariant(variantsArr) {
  return variantsArr.reduce((acc, cv) => {
    return Number(acc.prices.regular) < Number(cv.prices.regular) ? acc : cv;
  });
}

function findVariantImage(imagesArr, variantName) {
  // find the first image of variant/option (there may be multiple)
  const variantImage = imagesArr.find(image => image.option === variantName);
  // if no matches take the first image regardless of variant/option (There are not always images that correspond to the cheapest variant)
  const [firstImage] = imagesArr;
  return variantImage || firstImage;
}

function getRandomPicNumber(id) {
  // get a random but consistent number (1-8) in order to get the same picture every time for each product. (I didn't implement this afterall because lorempixum.com is so slow, but it works)
  const numStrFromId = id.split('').filter(char => char == Number(char)).join('');
  const randomPicNum = (Number(numStrFromId) % 8) + 1;
  return randomPicNum;
}

function slugToTitle(slug) {
  const wordArr = slug.split('-');
  const capitalized = wordArr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  return capitalized;
}

function titleToSlug(title) {
  const wordArr = title.split(' ');
  const lowerKebabCase = wordArr.map(word => word.toLowerCase()).join('-');
  return lowerKebabCase;
}

export {
  cheapestVariant,
  findVariantImage,
  getRandomPicNumber,
  slugToTitle,
  titleToSlug
};
