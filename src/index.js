const testBabel = (arg) => {
  console.log(arg)
  return new Promise((resolve, reject) => {
    resolve(`${arg}_11`)
  })
}

// this.test1 = testBabel

testBabel.bind(window)

testBabel(111).then((res) => { console.log(res) })