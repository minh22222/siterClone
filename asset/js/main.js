const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const editorItems = $$('.editor-item')
var isBright = false

for(let i=0;i<editorItems.length;i++) {
    editorItems[i].onclick = function(e) {
        if(!editorItems[i].classList.contains('active')) {
            $('.editor-item.active').classList.remove('active')
            $('.editor-tool.active').classList.remove('active')
            editorItems[i].classList.add('active')
            $$('.editor-tool')[i].classList.add('active')
        }
    }
}
function renderTheme() {
    if(isBright) {
        $('.light').href = './asset/css/light.css'
    } else {
        $('.light').href = ''
    }
}
$('.thembtn').onclick = function(e) {
    isBright = !isBright
    renderTheme()
    console.log('e')
}
renderTheme()
document.onscroll = function() {
    if(window.scrollY > 2000) {
        $('.go-to-top').style.display = 'inline-block'
    } else {
        $('.go-to-top').style.display = 'none'
    }
}