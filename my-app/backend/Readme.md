### Prime-numbers

#### Install

- Kloonaa projekti.
- asenna riippuuvuudet projektin juuressa `npm install` komennolla ja myös frontissa `./alkuluvut-front` komennolla `npm install`.
- Käynnistä serveri komennolla `npm run dev` projektin juuressa ja UI `npm start` komennolla `./alkuluvut-front` kansiossa.

#### Testit

- Projektissa on Jest-testejä millä testataan alkulukujen tarkistus funktiota. Ajetaan projektin juuressa `npm test` komennolla
- Projektissa on 3 e2e testiä mitkä ajetaan `./alkuluvut-front` kansiossa joko komennolla `npm run cypress:open` tällöin testit suoritetaan selaimessa tai terminaalissa suoritettavat testit `npm run test:e2e`

#### Käyttö

- UI:ssa on kaksi kenttää, ylempänä olevaan laitetaan yksittäinen kokonaisluku (mikäli laitetaan desimaaliluku, se pyöristetään alaspäin) ja submit nappia painamalla saa vastauksen onko kyseessä alkuluku.

- Alempaan lomakkeesseen lisätään kokonaisluku (mikäli laitetaan desimaaliluku, se pyöristetään alaspäin) ja painetaan Add value napista ja se lisätään laskettavien lukujen listaan, kun on haluttu määrä lisätty lukuja listaan, submit napilla saadaan lukujen summa ja tieto onko summa alkuluku vai ei.



