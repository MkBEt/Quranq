
async function ready() {

    let UL = getElement('ul', { class: 'list-group' })
    for (let [i, j] of mappings) {
        let LI = getElement('li', { class: 'list-group-item text-center' })
        let newparams = new URLSearchParams();
        newparams.set('chapter', i)
        newparams.set('verse', j)
        let aElem = getElement('a', { href: `data.html?${newparams.toString()}` })
        aElem.innerText = `Chapter ${i} ${arabicChapters[i - 1]}, Verse ${j}`
        LI.appendChild(aElem)
        UL.appendChild(LI)

    }
    document.querySelector('#mycontainer').appendChild(UL)
}

document.addEventListener("DOMContentLoaded", ready);