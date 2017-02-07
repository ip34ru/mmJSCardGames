;'use strict';
// =============================================================================
// Установка HTTP-сервера:
// 1) npm install http-server -g
// Запуск HTTP-сервера:
// 2) http-server mmapp -p 7777 -a 127.0.0.1
// 3) http://localhost:7777/
// =============================================================================

let content_type = {
                        article: {
                            class: 'mm__mainpage__common_badge--article',
                            icon: 'fa-file-text-o'
                        },
                        blog: {
                            class: 'mm__mainpage__common_badge--blog',
                            icon: 'fa-pencil-square-o'
                        },
                        competition: {
                            class: 'mm__mainpage__common_badge--competition',
                            icon: 'fa-trophy'
                        },
                        consultation: {
                            class: 'mm__mainpage__common_badge--consultation',
                            icon: 'fa-university'
                        },
                        advertising: {
                            class: 'mm__mainpage__common_badge--advertising',
                            icon: 'fa-file-text-o'
                        },
                        forum: {
                            class: 'mm__mainpage__common_badge--forum',
                            icon: 'fa-comments-o'
                        }
                    };

let sourceCardsData = [
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":365,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":3,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":45,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":65,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":35,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":11,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":200,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":2,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":276,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":36,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":11,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":34,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":3,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":98,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":43,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":2,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    },
    {
        "content_id": "1",
        "content_type": "article",
        "title": "Выбор коляски для малыша",
        "teaser": "Как выбрать детскую коляску? – спрашивают неопытные родители. Ответ прост – учитывайте предпочтения мамы...",
        "master_image": "/media/original_image.jpg",
        "url":"/articles/4235-vibor-kolyaski-dlya-malisha/",
        "author": {
            "name": "Ализаровна",
            "avatar": "/media/avatars/alizar_face.jpg",
            "url": "/users/alizar_woman",
            "rating": 150,
            "karma": 10
        },
        "created": 1486647934,
        "updated": 1486648934,
        "vote_count": 32,
        "view_count": 89,
        "allow_comments":true,
        "comments_count": 20,
        "weight":72,
        "tags":[{"name":"Коляска", "url":"/articles/tags/kolyaska"}],
        "seo": {
            "keywords": "Выбор коляски, Ализаровна советует, Коляска"
        },
        "badge":{"title":"Статья"},
        "card":{
            "size":1,
            "images":[
                {
                    "size":1,
                    "url":"/media/articles/cards/card_1_size.jpg"
                },
                {
                    "size":3,
                    "url":"/media/articles/cards/card_3_size.jpg"
                }
            ]
        }
    }
];


// переменные===================================================================
let cardsRoundResult = document.getElementById('cardsRoundResult');
let addThreeCards_1 = document.getElementById('addThreeCards_1');
let addThreeCards_2 = document.getElementById('addThreeCards_2');
let threeCardsTemplate = document.getElementById('threeCardsTemplate');         // handlebars шаблон
let sortingCardsData = [];
let rightLeftSwitcher = false;                                                  // когда false то влево смещать карточку из 2 клеток, когда true то сместить вправо
// переменные===================================================================

// функции======================================================================

/**
 * generateCardsToDom генерация карточек из массива в DOM
 * @param  {DOM element} sourceDOMElement - родительский DOM элемиент в который будет вставляться сгенеренный Handlebars темплейт
 * @param  {DOM element} handlebarsDOMTemplate - Handlebars темплейт который будет вставляться в DOM на странице
 * @param  {array} dataArray - массив с объектами (вставляются друзья из VK, поля связаны с Handlebars темплейтом)
 * @return {boolean} or {Throw New Error} выбрасываем ошибку, если входные параметры пустые, если все ок то возвращаем true
 */
function generateCardsToDom( sourceDOMElement, handlebarsDOMTemplate, dataArray ) {
    if ( arguments.length === 0 || !dataArray ) {
        throw new Error('DATA_EMPTY');
    }
    let tempDOM = document.createElement('div');
    let source = handlebarsDOMTemplate.innerHTML;
    let templateFn = Handlebars.compile(source);
    let template = templateFn({ list: dataArray });
    tempDOM.innerHTML = template;
    tempDOM = tempDOM.firstElementChild;
    sourceDOMElement.appendChild(tempDOM);
    return true;
} //generateCardsToDom


function handleInsertToDOM(e) {
    generateCardsToDom( cardsRoundResult, threeCardsTemplate, sourceCardsData )
}; // handleInsertToDOM
// функции======================================================================


// обработчики==================================================================
addThreeCards_1.addEventListener('click', (e) => {handleInsertToDOM(e);});
addThreeCards_2.addEventListener('click', (e) => {handleInsertToDOM(e);});
// обработчики==================================================================

// предобработка входного массива с карточками==================================
function compareCardsWeigth(a, b) {
  return b.weight - a.weight;
}; //compareCardsWeigth

sortingCardsData = sourceCardsData.sort( compareCardsWeigth );

for(let i in sortingCardsData){
    console.log(sortingCardsData[i].weight);
}
// предобработка входного массива с карточками==================================
