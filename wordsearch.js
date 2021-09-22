const horizontalJoin = (letters, word) => {
  const horizontal = letters.map(ls => ls.join(''))
  for (l of horizontal) {
      if (l.includes(word)) return true
  }
}

const transpose = function (matrix) {
  let rows = matrix.length          
  let cols = matrix[0].length       
  let transposeArray = [];   
  let tempArry = []

  for (let c = 0; c < cols; c++) {
      tempArry = []  //helper array
      for (let r = 0; r < rows; r++) {
          tempArry.push(matrix[r][c])
      }
      transposeArray.push(tempArry)
  }

  return transposeArray
}

const wordSearch = (letters, word) => {
  if (letters === undefined) {
      return 'Error' 
  }
  if (letters.length === 0) {
      console.log('emtpry array')
      return false
  }
  if (horizontalJoin(letters, word)) {
      return true
  }
  if (horizontalJoin(transpose(letters), word)) {
      return true
  }
  return false;
}

module.exports = wordSearch