{
    function moveUp(element) {
        if (element.previousElementSibling) {
            element.parentNode.insertBefore(element, element.previousElementSibling);
        }
    }
    const checkIsTrelloCard =  new RegExp(/trello\.com\/c\//);
    if (checkIsTrelloCard.test(window.location.href)) {
        if (document.querySelector('.js-custom-fields-section') != null) {
            moveUp(document.querySelector('.js-custom-fields-section'));
            console.debug('[Trello | Custom fields first] - custom field section was moved up');
        } else {
            setTimeout(() => {
                moveUp(document.querySelector('.js-custom-fields-section'));
                console.debug('[Trello | Custom fields first] - custom field section was moved up, but delayed');
            },100)
        }
    }
}