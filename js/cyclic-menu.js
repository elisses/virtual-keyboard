
const listItems = [
    {name: 'Home' , idName: 'focus-a'},
    {name: 'About', idName: 'focus-a'},
    {name: 'Product', idName: 'focus-a'},
    {name: 'Clients', idName: 'focus-a'},
    {name: 'Contact', idName: 'focus-a'}
];

let body = document.getElementsByTagName('body')[0];

class MenuItem {
    constructor(item) {
        this.linkText = document.createElement("a");
        this.linkText.setAttribute("href", '#');
        this.linkText.setAttribute('id', item.idName);
        this.linkText.innerText = item.name;
        this.item = document.createElement("li");
        this.item.appendChild(this.linkText);
    }
    makeActive() {
        this.linkText.focus();
    }
    get htmlElement() {
        return this.item;
    }
};

let menuItems = listItems.map(item => new MenuItem(item));
const list = document.createElement('ul');
menuItems.forEach(menuItem => list.appendChild(menuItem.htmlElement));
body.appendChild(list); 

class activate {
    constructor(){
        this.cyclic();
    }
    cyclic() {
        this.activeItem = -1;
        this.activateNextItem();
        body.addEventListener('keydown', (event) => {
            if(event.keyCode === 39) {                
                    this.activateNextItem();
            } else if(event.keyCode === 37) {
                    this.activatePreviousItem();
            };	     
        });
    };
    activateNextItem() {
        if (++this.activeItem ===  menuItems.length) {
            this.activeItem = 0;
        };
        menuItems[this.activeItem].makeActive();
    };
    activatePreviousItem() {
        if (--this.activeItem < 0) {
            this.activeItem += menuItems.length;
        };
        menuItems[this.activeItem].makeActive();
    };
};

let cyclicMenu = new activate(menuItems);


