const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    //Transform into array
    .split('')
    //Transform into letter array with span around
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    //transform to string
    .join('')
})