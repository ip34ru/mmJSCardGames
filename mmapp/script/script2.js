/*
 * Базовый класс для элементов
 */
class BaseElement {
    /**
     * Конструктор
     * @param templateId Идентификатор шаблона
     * @param element элемент, в который все оборачивается
     */
    constructor(templateId, element = 'div') {
        /**
         * Элемент, в который оборачивается виджет
         * @type {Element}
         */
        this.el = document.createElement(element);
        //небольшой хелпер
        this.$el = $(this.el);
        let templateSource = $(`#${templateId}`).html();
        /**
         * Шаблон элемента
         */
        this.template = Handlebars.compile(templateSource, {noEscape: true});
    }

    /**
     * Локальный скоуп
     * @param selector
     * @returns {*}
     */
    $(selector) {
        return this.$el.find(selector);
    }


    setupListeners() {

    }

    get contextData() {
        return {}
    }

    render() {
        this.$el.html(this.template(this.contextData));
        this.setupListeners();
    }
}

class Card extends BaseElement {
    constructor(data, templateId = 'cardTemplate') {
        super(templateId);
        this.data = data;
        this.render();
    }

    get contextData() {
        return this.data;
    }

    setupListeners() {
        this.$('.add-to-favorite').on('click', ()=> {
            this.setFavorite();
        });
    }

    setFavorite() {
        // this.$('.card').addClass('card-inverse card-info');
        console.log('Карточка добавлена в избранное');
    }
}

class Row extends BaseElement {
    constructor(cardsDataList, mode, templateId = 'rowTemplate') {
        super(templateId);
        this._cardsDataList = cardsDataList;
        this._mode = mode;
        this._cards = [];
        this.loadCards(cardsDataList);
        this.render();
    }

    get contextData() {
        let mode = {};
        mode[this._mode] = true;
        let result = {
            cards: this._cards,
            mode: mode
        };
        return result;
    }

    loadCards(cards) {
        switch (this._mode) {
            case 'one':
                if (cards.length < 0) {
                    throw 'Insufficient cards';
                }
                this._cards.push(
                    new Card(cards.shift())
                );
                break;
            case 'three':
                if (cards.length < 3) {
                    throw 'Insufficient cards';
                }
                this._cards.push(new Card(cards.shift()));
                this._cards.push(new Card(cards.shift()));
                this._cards.push(new Card(cards.shift()));
                break;
            default:
                if (cards.length < 2) {
                    throw 'Insufficient cards';
                }
                this._cards.push(new Card(cards.shift()));
                this._cards.push(new Card(cards.shift()));
                break;
        }
    }

    render() {
        super.render();
        for (let cardIndex in this._cards) {
            this.$(`.container_card_${cardIndex}`).html(this._cards[cardIndex].el.firstElementChild);
        }
    }
}

class CardDashBoard extends BaseElement {
    constructor(dataList, templateId = 'dashboardTemplate') {
        super(templateId);
        this.dataList = dataList;
        this.patterns = ['', 'three', '', 'three', '', 'three'];
        this.purePatterns = ['one', 'twoLeft', 'twoRight' ];
        this.rows = [];
        this.loadRows(dataList);
    }



    get randomizeCardsPattern() {
        let tempPureArray = [];
        let tempArray = [];
        tempPureArray = tempPureArray.splice().concat(this.purePatterns);
        tempArray = tempArray.splice().concat(this.patterns);

        for (let i = tempPureArray.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [tempPureArray[i - 1], tempPureArray[j]] = [tempPureArray[j], tempPureArray[i - 1]];
        }

        tempArray[0] = tempPureArray[0];
        tempArray[2] = tempPureArray[1];
        tempArray[4] = tempPureArray[2];
        return tempArray;
    }

    loadRows(items) {

        let patternId = 0;
        let randomPatterns = this.randomizeCardsPattern;
        let cardsRollup;

        this.$el.html(this.template({}));
        cardsRollup = this.$('#cardsRollup');


        console.log('randomPatterns =', randomPatterns);
        while (items.length > 0) {
            try {
                let row = new Row(items, randomPatterns[patternId]);
                // this.$el.append(row.el.firstElementChild);
                this.rows.push(row);
                cardsRollup.append(row.el.firstElementChild);
            }
            catch (e) {
                break;
            }
            ++patternId;
            if (patternId >= randomPatterns.length) {
                patternId = 0;
            }
        }
        //Принтим оставшиеся элементы
        this.setupListeners();
        console.log(items);
    }

    setupListeners() {
        this.$('#btnMoreCards').on('click', ()=> {
            this.getMoreCards();
        });
    }

    getMoreCards() {
      console.log('Сейчас загружу еще карточки');
    }


}


let cardList = [
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
        "content_id": "2",
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
        "content_id": "31",
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
        "content_id": "41",
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
        "content_id": "221",
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
        "content_id": "21",
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
        "content_id": "71",
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
        "content_id": "81",
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
        "content_id": "91",
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
        "content_id": "111",
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
        "content_id": "221",
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
        "content_id": "21",
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




let dashBoard = new CardDashBoard(cardList);
$('#cardContainer').html(dashBoard.el);


//TODO переписать функционал получения с бекэнда
//TODO обновления карточек (если таймаут большой, то обновляетсмя информация в существующих, т.е. загрузка с бекэндап начинается сначала)
//TODO
//TODO функционал учета таймаутов
//TODO переделать шаблоны хендлбарса
