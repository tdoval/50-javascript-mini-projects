const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const userName = document.getElementById('name');
const userDate = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');
 
setTimeout(getData, 2000);

function getData() {
    header.innerHTML = `
    <img src="https://mrcatstore.vteximg.com.br/arquivos/ids/311135/desk_bannerprincipal_verao22.jpg?v=637640760512370000"
    alt="" />
    `

    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, odio!`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/11.jpg"
    alt=""/>`
    userName.innerHTML = `Helena Doe`;
    userDate.innerHTML = `Oct 08, 2020`;

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg_text => bg_text.classList.remove('animated-bg-text'))
}