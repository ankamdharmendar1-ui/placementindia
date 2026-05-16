// Calculate cosine similarity between two text chunks
function termFrequencyMap(str) {
  const words = str.split(' ');
  const tf = {};
  words.forEach(word => {
    tf[word] = (tf[word] || 0) + 1;
  });
  return tf;
}

function dotProduct(vecA, vecB) {
  let product = 0;
  for (const key in vecA) {
    if (vecB[key]) {
      product += vecA[key] * vecB[key];
    }
  }
  return product;
}

function magnitude(vec) {
  let sum = 0;
  for (const key in vec) {
    sum += vec[key] ** 2;
  }
  return Math.sqrt(sum);
}

function calculateSimilarity(textA, textB) {
  const tfA = termFrequencyMap(textA);
  const tfB = termFrequencyMap(textB);
  
  const dotProd = dotProduct(tfA, tfB);
  const magA = magnitude(tfA);
  const magB = magnitude(tfB);
  
  if (magA === 0 || magB === 0) return 0;
  
  return dotProd / (magA * magB);
}

module.exports = { calculateSimilarity };