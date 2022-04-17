const arr = [
	{
		name: 'pizza',
		img: 'images/pizza.png'
	},
	{
		name: 'fries',
		img: 'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png'
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png'
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png'
	},
	{
		name: 'pizza',
		img: 'images/pizza.png'
	},
	{
		name: 'fries',
		img: 'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png'
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png'
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png'
	}
]

arr.sort(() => .5 - Math.random())

const boxsContainer = document.querySelector('.boxs-container')
const result = document.querySelector('.result')
let choosenArr = []
let choosenArrIds = []
let choosenRight = []

function createBox() {
	for(let i = 0; i < arr.length; i++) {
		const img = document.createElement('img')
		img.setAttribute('src','images/blank.png')
		img.setAttribute('data-id', i)
		img.addEventListener('click', flippedCard)
		boxsContainer.appendChild(img)
	}
}


function check() {
	const card = document.querySelectorAll('img')
	const idOne = choosenArrIds[0]
	const idTwo = choosenArrIds[1]
	if(choosenArr[0] == choosenArr[1]) {
		card[idOne].setAttribute('src', 'images/white.png')
		card[idTwo].setAttribute('src', 'images/white.png')
		card[idOne].removeEventListener('click', flippedCard)
		card[idTwo].removeEventListener('click', flippedCard)
		choosenRight.push(choosenArr)
		result.textContent = choosenRight.length
	}else {
		card[idOne].setAttribute('src', 'images/blank.png')
		card[idTwo].setAttribute('src', 'images/blank.png')
	}
	choosenArr = []
	choosenArrIds = []
	if(choosenRight.length == arr.length/2) {
		Swal.fire({
			position: 'top-center',
			icon: 'success',
			title: 'Congratulations',
			showConfirmButton: false,
			timer: 1500
		})
	}
	
}

createBox()

function flippedCard() {
	let imgId = this.getAttribute('data-id')
	choosenArr.push(arr[imgId].name)
	choosenArrIds.push(imgId)
	this.setAttribute('src', arr[imgId].img)
	if(choosenArr.length === 2) {
		setTimeout(check,500)
	}
}