//Listeleme işlemleri

var items = ['item 1', 'item 2', 'item 3', 'item 4'];

var list = document.querySelector('#myList');

items.forEach(function (item) {
    CreateItem(item);
});


list.addEventListener('click', function (item) { //item'e tıklanılan elemanı atar ve üstünü çizeriz(style.css ile)
    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
        ToggleDeleteButton();
    }
})

function ToggleDeleteButton() { //Delete All butonunun görünürlülüğünü ayarlama
    var checkList = document.querySelectorAll('.list-group-item.checked');

    if (checkList.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    } else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}

document.querySelector('#deleteAll').onclick = function () {
    var elements = document.querySelectorAll('.checked');

    elements.forEach(function (item) {
        item.style.display = 'none';
    });
}


/*
var a = document.querySelectorAll('li'); //bu şekilde tıklamadan tüm listeyi seçili getirebiliriz en başta   
a.forEach(function (item) {
    item.classList.toggle('checked');
})
*/

/*X işaretine tıklanınca liste elemanını silme

var close = document.getElementsByClassName('close');
//foreach kullanamıyoruz for kullanmalıyız. 
//Eğer querySelector kullansaydık foreach kullanabilirdik 
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none';
    }
}*/

//item ekleme

document.querySelector('#btnCreate').onclick = function () {
    var item = document.querySelector('#txtItem').value; //inputtan değer alıyoruz   
    //console.log(item);
    if (item === '') {
        alert('lütfen bir değer giriniz');
        return;
    }

    CreateItem(item); //listeye ekler

};

function CreateItem(item) {

    var li = document.createElement('li'); //element yaratır
    var t = document.createTextNode(item); //içerik yaratır

    li.className = 'list-group-item';
    li.appendChild(t); //li elementlerinin içine itemleri ekler 
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7'); //çarpı işareti
    span.className = 'close';
    /*span.classList.add(''); deseydik önceden classları varsa yeni bir class eklerdik 
       burada className ile ilk class'ı ekleriz*/
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function () { //X işaretine tıklanınca liste elemanını silme
        var li = this.parentElement; //this dediği span ve onun parent elemanı li oluyor atıyoruz 
        li.style.display = 'none'; //tıklanınca görünmez
        li.classList.remove('checked');
    }

}