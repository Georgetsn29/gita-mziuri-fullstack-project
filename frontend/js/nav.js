const header = document.querySelector('#header')

const logo_wrapper = document.createElement('div')
logo_wrapper.className = 'logo_wrapper'

const logo = document.createElement('h1')
logo.innerHTML = 'bun <span class="logo_span" >&</span> patty'
logo.className = 'logo'

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


header.appendChild(logo_wrapper)
header.appendChild(nav_link_wrapper)
nav_link_wrapper.appendChild(nav_link_ul)
// nav_link_ul.appendChild(nav_link)
logo_wrapper.appendChild(logo)
logo_wrapper.appendChild(logo_desc)