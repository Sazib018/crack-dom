// new element added progress

/* const colorList = document.getElementById('color-list')

const li = document.createElement('li')
li.innerText = 'yollow'

colorList.appendChild(li);

// option -1 : js to html

const colorSection = document.getElementById('color-section')

const section = document.createElement('section')

const h1 = document.createElement('h1')
h1.innerText = 'Fruits name';
section.appendChild(h1)

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'apple'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'banana'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'mango'
ul.appendChild(li3)

const li4 = document.createElement('li')
li4.innerText = 'orange'
ul.appendChild(li4)

section.appendChild(ul)

colorSection.appendChild(section) */


// option - 2: shortcuts js to html

const colorSection = document.getElementById('color-section')

const section = document.createElement('section')

section.innerHTML= `
<h1>Fruits name </h1>
<ul>
<li>apple</li>
<li>banana</li>
<li>grape</li>
<li>blackbary</li>
<li>mango</li>
</ul>
`
colorSection.appendChild(section)

