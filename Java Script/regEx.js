let pattern='pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'
let regExTwo= new RegExp(pattern, flag)

let regExThree=/pw/gi  //i for case sensetive 

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent "
const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);


const webUrl = "https://pwskills.com/ham%20ahmad"

const usableUrl = webUrl.replace(/%\d0/,'-') //%d0  denotes two  number
console.log(usableUrl);

//regexr.com  ref for regrex eqn


