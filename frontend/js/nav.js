const header = document.querySelector('#header')

const logo_wrapper = document.createElement('div')
logo_wrapper.className = 'logo_wrapper'

const logo = document.createElement('a')
logo.innerHTML = 'bun <span class="logo_span" >&</span> patty'
logo.setAttribute('class', 'logo')
logo.setAttribute('href', 'index.html')

const logo_desc = document.createElement('p')
logo_desc.innerHTML = 'smash burger bar <br> in tbilisi'
logo_desc.className = 'logo_desc'


const nav_link_wrapper = document.createElement('nav')
nav_link_wrapper.className = 'nav_link_wrapper'

const nav_link_ul = document.createElement('ul')
nav_link_ul.className = 'nav_link_ul'

const items = ['Menu', 'Locations', 'Our kitchen', 'Contact'];
items.forEach(itemText => {
  const nav_link = document.createElement('li');
  const textNode = document.createTextNode(itemText);
  const nav_link_a = document.createElement('a')
  nav_link.appendChild(nav_link_a)
  nav_link_a.appendChild(textNode);
  nav_link_ul.appendChild(nav_link);
});


const nav_left = document.createElement('div')
nav_left.setAttribute('class', 'nav-left')
const cart = document.createElement('button')
cart.innerHTML = 'cart'
const order_now = document.createElement('a')
order_now.setAttribute('href', 'index.html')
order_now.innerHTML = 'order now'
order_now.setAttribute('class', 'nav-order-now-btn')



header.appendChild(logo_wrapper)
header.appendChild(nav_link_wrapper)
header.appendChild(nav_left)
nav_link_wrapper.appendChild(nav_link_ul)
logo_wrapper.appendChild(logo)
logo_wrapper.appendChild(logo_desc)
nav_left.appendChild(cart)
nav_left.appendChild(order_now)