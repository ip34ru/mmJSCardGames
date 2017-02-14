//Эквивалент let cardTemplate = require('./cardTemplate.handlebars');
let cardTemplate = Handlebars.compile($('#cardTemplate').html(), {noEscape: true});
let rowTemplate = Handlebars.compile($('#rowTemplate').html(), {noEscape: true});
let cardsRollupTemplate = Handlebars.compile($('#dashboardTemplate').html(), {noEscape: true});

/*
 * Базовый класс для элементов
 */
class BaseElement {
    /**
     * Конструктор
     * @param templateId Идентификатор шаблона
     * @param element элемент, в который все оборачивается
     */
    constructor(template, element = 'div') {
        /**
         * Элемент, в который оборачивается виджет
         * @type {Element}
         */
        this.el = document.createElement(element);
        //небольшой хелпер
        this.$el = $(this.el);

        /**
         * Шаблон элемента
         */
        this.template = template
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

    render(revertToChild=false) {
        this.$el.html(this.template(this.contextData));
        if(revertToChild){
          this.el = this.el.firstElementChild;
          this.$el = $(this.el);
        }
        this.setupListeners();
    }
}

class Card extends BaseElement {
    constructor(data, template=cardTemplate) {
        super(template);
        this.data = data;
        this.render(true);
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
        this.$el.addClass('card-inverse card-info test');
    }
}

class Row extends BaseElement {
    constructor(cardsDataList, mode, template=rowTemplate) {
        super(template);
        this._cardsDataList = cardsDataList;
        this._mode = mode;
        this._cards = [];
        this.loadedCards = [];
        this.loadCards(cardsDataList);
        this.render(true);
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
      let loadCard = undefined;
        switch (this._mode) {
            case 'one':
                if (cards.length < 0) {
                    throw 'Insufficient cards';
                }
                loadCard = cards.shift();
                this.loadedCards.push(loadCard);
                this._cards.push(new Card(loadCard));
                break;
            case 'tree':
                if (cards.length < 3) {
                    throw 'Insufficient cards';
                }
                for (let i=0; i<3; ++i){
                  loadCard = cards.shift();
                  this.loadedCards.push(loadCard);
                  this._cards.push(new Card(loadCard));
                }

                break;
            default:
                if (cards.length < 2) {
                    throw 'Insufficient cards';
                }
                for (let i=0; i<2; ++i){
                  loadCard = cards.shift();
                  this.loadedCards.push(loadCard);
                  this._cards.push(new Card(loadCard));
                }
                break;
        }
      window.cart = this._cards[0];
    }

    render() {
        super.render();
        for (let cardIndex in this._cards) {
            this.$(`.container_card_${cardIndex}`).html(this._cards[cardIndex].el);
        }
    }
}

class CardDashBoard extends BaseElement {
    get API_URL(){
      return 'https://gist.githubusercontent.com/kostnikolas/d19ca24959ea93b20d132c886ac3e272/raw/d7fe2e63a1ce4b6fc9c35f1f52625e556127666f/TestResource';
    }
    get API_PARAM(){
      return 'page';
    }
    get DEBUG(){
      return true;
    };
    get TIMEOUT(){
      let timeout = new Date();
      timeout.setHours(0);
      timeout.setMinutes(5);
      timeout.setSeconds(30);
      return timeout.getTime();
    }
    constructor( template=cardsRollupTemplate) {
        super(template);
        this.patterns = ['', 'tree', '', 'tree', '', 'tree'];
        this.purePatterns = ['one', 'twoLeft', 'twoRight' ];
        //строки
        this.rows = [];
        //оставшиеся карточки
        this.remainingCards = [];
        //все карточки, отображенные на странице
        this.loadedCards = [];
        //текущая страница для запроса на бекенд
        this.currentPage = 0;
        this.render();
        this.getData(true);

    }

    get requestUrl(){
      return `${this.API_URL}?${this.API_PARAM}=${this.currentPage}`
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

    parseRows(items) {
        let patternId = 0;
        let randomPatterns = this.randomizeCardsPattern;
        let cardsRollup;


        cardsRollup = this.$('#cardsRollup');

        while (items.length > 0) {
            try {
                let row = new Row(items, randomPatterns[patternId]);
                this.loadedCards = this.loadedCards.concat(row.loadedCards);
              console.log(row.loadedCards);
                cardsRollup.append(row.el);
            }
            catch (e) {
                break;
            }
            ++patternId;
            if (patternId >= randomPatterns.length) {
                patternId = 0;
            }
        }
       this.remainingCards = this.remainingCards.concat(items);
    }

    getData(firstLoad=false){
      ++this.currentPage;
      $.ajax(this.requestUrl, {method:'GET'}).then(
        (response)=>{
          if (this.DEBUG){
              response = JSON.parse(response);
          }
          if (firstLoad){
            this.lastLoadTime = new Date();
            this.parseRows(response);
          }
          else{
            this.successRequest(response);
          }
        },
        (response)=>{
          this.failRequest(response);
        });
    }

    successRequest(data){
      //проверям карточки на дубли
      //конкатенируем с this.remainingCards

      this.parseRows(data);
    }

    clearData(){
      this.currentPage = 0;
      this.remainingCards = [];
      this.loadedCards = [];
      //чистим все
    }

    failRequest(data){
      console.log(data);
    }

    setupListeners() {
        this.$('#btnMoreCards').on('click', ()=> {
            this.getMoreCards();
        });
    }

    getMoreCards() {
      let nowTime = new Date();
      let deltaTime = new Date(nowTime-this.lastLoadTime);
      if (deltaTime.getTime()>this.TIMEOUT){
        this.clearData();
      }
      this.getData();
    }
}


let dashBoard = new CardDashBoard();
$('#cardContainer').html(dashBoard.el);
