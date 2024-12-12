function handleClickPreImg(imageName) {
    $('.preview-pic').replaceWith(`<div class="preview-pic"><img src="./img/daLat/${imageName}" /></div>`)
}

function handleClickContent(cName) {
    $('.ctn').addClass('hidden')
    $(`.${cName}`).removeClass('hidden')
}