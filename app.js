const li = document.querySelectorAll('.li')

const checkbox = document.querySelector('.hamburger')

li.forEach((item) => {
  item.addEventListener('click', () => {
    checkbox.checked = false
  })
})
