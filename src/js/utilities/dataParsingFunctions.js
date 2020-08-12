function cheapestVariant(variantsArr) {
  return variantsArr.reduce((acc, cv) => {
    return Number(acc.prices.regular) < Number(cv.prices.regular) ? acc : cv;
  });
}

function findVariantImage(imagesArr, variantName) {
  // find the first image of variant/option (there may be multiple)
  const variantImage = imagesArr.find(image => image.option === variantName);
  // if no matches take the first image regardless of variant/option
  const [firstImage] = imagesArr;
  return variantImage || firstImage;
}

function getRandomPicNumber(id) {
  // get a random but consistent number (1-8) in order to get the same picture every time for each product
  const numStrFromId = id.split('').filter(char => char == Number(char)).join('');
  const randomPicNum = (Number(numStrFromId) % 8) + 1;
  return randomPicNum;
}

export {
  cheapestVariant,
  findVariantImage,
  getRandomPicNumber
};
