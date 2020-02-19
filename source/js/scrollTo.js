window.addEventListener('load', function () {

	//getting link elements
	const navLinks = window.document.querySelectorAll('.page-wrapper .wrapper .menu .menu__items a')
	const btn = window.document.querySelector('.page-wrapper .wrapper .uniq1 .link')
	const links = [...navLinks, btn]

	//get id then get element to which we need to go and set listeners on click
	links.forEach(item => {
		let id = item.getAttribute('href').replace('#', '')
		let elem = document.querySelector(`#${id}`)
		item.addEventListener('click', function (e) {
			e.preventDefault()
			elem.scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		})
	})
})