"use strict";

function Telefon(marka, kolor, cena) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
	console.error('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '.');
}

var iPhone6S = new Telefon('Apple', 'srebrny', 2250);


iPhone6S.printInfo();