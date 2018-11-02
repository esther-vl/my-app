
const myFunc = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ name: "Esther" })
		}, 2000)
	});
}

const withHello = (data) => {
	return new Promise((resolve, reject) => {
		if (data.name === 'Esther') {
			resolve(`Hi ${data.name}`) 
		} else {
			reject('No hi to others')
		}
	})

}

myFunc()
  .then(withHello)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))

console.log('Here')
