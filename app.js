const def = document.querySelector('#defaultText')
const big = document.querySelector('#biggerText')



function bigger() {
    def.value = big.value.toUpperCase('3')
    big.value = ''
}