function handleClickPreImg(imageName) {
    $('.preview-pic').replaceWith(`<div class="preview-pic"><img src="./img/daLat/${imageName}" /></div>`)
}

function handleClickContent(cName) {
    $('.ctn').addClass('hidden')
    $(`.${cName}`).removeClass('hidden')
}

function handleClichOrder() {
    $('.form-dat-tour').removeClass('hidden')
    $('body').addClass('no-scroll')
}
function handleClichMask() {
    $('.form-dat-tour').addClass('hidden')
    $('body').removeClass('no-scroll')

}