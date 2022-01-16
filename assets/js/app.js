
let app = new Vue ({
    el: '#app',
    data: {
        timer : 0,
        current: 1,
        sliderArr: {
            items: [
                'assets/img/01.jpg',
                'assets/img/02.jpg',
                'assets/img/03.jpg',
                'assets/img/04.jpg',
                'assets/img/05.jpg'
            ],  
            title: [
                'Svezia',
                'Svizzera',
                'Gran Bretagna',
                'Germania',
                'Paradise'
            ],
            text: [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                'Lorem ipsum',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            ],
            
        }
    },
    methods: {
        isActive : function (index){
            if (index == this.current){
                return "active";
            }
            return "";
        },
        next: function (){
            this.current ++;
            if(this.current == this.sliderArr.items.length){
                this.current = 0;
            }
        },
        prev: function (){
            this.current --;
            if(this.current < 0){
                this.current = this.sliderArr.items.length - 1;
            }
        },
        makeActive: function (index){
            this.current = index;
        },
        play: function() {
            let start = this
            this.timer = setInterval(function() {
            start.next();
            }, 3000);
        },
        playStop: function(){
            clearInterval(this.timer);
        }
    },
    created: function(){
            this.play();
        }
})




/*
let itemContent = document.getElementById("item-holder");
itemContent = '';                                        //creazione variabile per lavorare sulle immagini in colonna

for(let i = 1; i < (items.length + 1); i++){            //ciclo per inserimento delle immagini in colonna
    if(i == 1){
        itemContent += `
        <div class="sliderdimension" id="items${i}">
            <div class="up"><i class="bi bi-arrow-up"></i></div>
            <img src="img/0${i}.jpg" class="w-100 h-100" alt="">
        </div>`
    }else if(i == 5){
        itemContent += `
        <div class="sliderdimension" id="items${i}">
            <div class="down"><i class="bi bi-arrow-down"></i></div>
            <img src="img/0${i}.jpg" class="w-100 h-100" alt="">
        </div>`
    }else{
        itemContent += `
            <div class="sliderdimension" id="items${i}">
                <img src="img/0${i}.jpg" class="w-100 h-100" alt="">
            </div>`
    }
}

const itemsContainer = document.querySelector('.items-container');  // stampo le immagini nella colonna
itemsContainer.innerHTML = itemContent;





//let arrayMain = [...items, ...title, ...text];
// console.log(arrayMain)
// let [cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11, cont12, cont13, cont14, cont15] = arrayMain;





let contentMain = document.getElementById('main-item'); // creazione variabile per lavorare sulla immagine pricipale
contentMain= '';

for(let i= 0; i < (items.length); i++){                 // ciclo for per inserimenti delle immagini in stato hidden nel display principale
    contentMain +=`
    <div class="heightmain d-flex hidden" id="mainitem-${i + 1}">
        <img src="img/0${(i + 1)}.jpg" id="imgthumb" class="w-100 h-100 visual-item" alt="">
        <div class="writing-container align-self-end m-5 text-end">
            <h1 class="title" id="titlethumb">${title[i]}</h1>
            <p class="description" id="pthumb">${text[i]}</p>
        </div>
    </div>`

 }
const itemContenuto = document.querySelector('.main-container')  // stampo su html le immagini principali in stato hidden
itemContenuto.innerHTML = contentMain;
console.log( contentMain);

let k=1;
let itemActive = document.getElementById("mainitem-"+ k); //cannot read propreties of null, ma in verità le immagini dovrebbero andare in classe ".active"
itemActive.classList.add("active");


const prev = document.querySelector('.up');
const next = document.querySelector('.down'); //dichiarate variabili per poter interaggire con le frecce

prev.addEventListener('click', function(){     //funzione per attivare sul click l'evento di cambiare immagine verso quella precedente
    if(k != 1){
        k--;
        itemActive.classList.remove('active');
        itemActive = document.getElementById('mainitem-'+k);
        itemActive.classList.add('active');
    }
    else{
        k = 5;
        itemActive.classList.remove('active');
        itemActive = document.getElementById('mainitem-'+k);
        itemActive.classList.add('active');
    }
})

next.addEventListener('click', function(){     //funzione per attivare sul click l'evento di cambiare immagine verso quella successivo
    if(k != 5){
        k++;
        itemActive.classList.remove('active');
        itemActive = document.getElementById('mainitem-'+k);
        itemActive.classList.add('active');
    }
    else{
        k = 1;
        itemActive.classList.remove('active');
        itemActive = document.getElementById('mainitem-'+k);
        itemActive.classList.add('active');
    }
    
})
*/