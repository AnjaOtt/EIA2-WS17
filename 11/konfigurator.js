/*Aufgabe: 11
Name: Anja Ott
Matrikel: 256342
Datum: 24.01.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    //Persönliche Angaben/Texteingabefelder erstellen 
    var name;
    var vorname;
    var strasse;
    var hausNr;
    var ort;
    var plz;
    var mail;
    var label;
    //Variablen erstellen und befüllen
    var basketBaumart = ["keine Baumart ausgewählt", "0"]; //Array schon befüllt, aber an späterer Stelle überschrieben
    var basketHalter = ["kein Halter ausgewählt", "0"];
    var basketBeleuchtung = ["keine Beleuchtung ausgewählt", "0"];
    var basketSchmuck = [];
    var basketLieferopt = ["keine Lieferoption ausgewählt", "0"];
    //Button
    let feedback = document.createElement("div");
    //Die erstellten Elemente werden später mit Eigenschaften ausgestattet und ans DOM gehängt
    function createElements() {
        //Baumart definieren
        let baumart = document.getElementById("baumart");
        let selectBox = document.createElement("select");
        selectBox.name = "Baumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Baumart") {
                var opt = document.createElement("option");
                opt.innerText = Aufgabe11.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        //Halterung definieren
        let halterung = document.getElementById("halterung");
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Halter") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "Halterung";
                radioB.value = Aufgabe11.posten[i].name;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                //Label für jede Halterung hinzufügen
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe11.posten[i].name;
                halterung.appendChild(label);
            }
        }
        //Beleuchtung definieren
        let beleuchtung = document.getElementById("beleuchtung");
        let selectBox2 = document.createElement("select");
        selectBox2.name = "Beleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe11.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel definieren
        let schmuckartikel = document.getElementById("schmuckartikel");
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Schmuck") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox"; //Checkboxen erstellen
                checkB.name = "Schmuckartikel: " + Aufgabe11.posten[i].name;
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                //Label für jeden Schmuckartikel hinzufügen
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe11.posten[i].name;
                schmuckartikel.appendChild(label2);
                //Stepper erstellen
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }
        //Eigende Daten bzw Lieferadresse
        let daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "Name";
        name.placeholder = "Name";
        name.pattern = "[a-zA-ZßÄÜÖäüö]{1,}";
        name.required = true;
        daten.appendChild(name);
        vorname = document.createElement("input");
        vorname.type = "text";
        vorname.name = "Vorname";
        vorname.placeholder = "Vorame";
        vorname.pattern = "[a-zA-ZßäüöÄÜÖ]{1,}";
        vorname.required = true;
        daten.appendChild(vorname);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "Strasse";
        strasse.placeholder = "Straße";
        strasse.pattern = "[a-zA-ZßäüöÄÜÖ]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);
        hausNr = document.createElement("input");
        hausNr.type = "text";
        hausNr.name = "Hausnummer";
        hausNr.placeholder = "Hausnummer";
        hausNr.pattern = "[0-9abc]{1,}";
        hausNr.required = true;
        daten.appendChild(hausNr);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "PLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "Ort";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-ZßÄÜÖäüö]{1,}";
        ort.required = true;
        daten.appendChild(ort);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "Mail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        //Lieferoptionen definieren
        let lieferopt = document.getElementById("lieferoptionen");
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "Lieferoptionen";
                radioB2.value = Aufgabe11.posten[i].name;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                //Labels hinzufügen
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe11.posten[i].name;
                lieferopt.appendChild(label3);
            }
        }
        //Button generieren
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.type = "submit";
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    //Warenkorbfunktion
    function warenkorb(_event) {
        let target = _event.target; //Target zwischenspeichern,  casten, um auf die Properties zugreifen zu können
        let stepper = []; //Stepper-Elemente zwischenspeichern
        let checkBoxes = []; //Checkbox-Elemente zwischenspeichern
        let gesamtpreis = 0;
        //Auswahl überprüfen
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            console.log(_event.target);
            if (Aufgabe11.posten[i].art == "Schmuck") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.value == Aufgabe11.posten[i].name && target.id == "selectBaumart") {
                basketBaumart[0] = Aufgabe11.posten[i].name; //...wird der Name vom Posten an der Stelle i im Array basketBaumart an erster Stelle gespeichert
                basketBaumart[1] = "" + Aufgabe11.posten[i].preis; //...wird der Preis vom Posten an der Stelle i im Array an zweiter Stelle gespeichert
            }
            if (target.id == "radio" + i) {
                basketHalter[0] = Aufgabe11.posten[i].name;
                basketHalter[1] = "" + Aufgabe11.posten[i].preis;
            }
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = Aufgabe11.posten[i].name;
                basketLieferopt[1] = "" + Aufgabe11.posten[i].preis;
            }
            if (target.value == Aufgabe11.posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = Aufgabe11.posten[i].name;
                basketBeleuchtung[1] = "" + Aufgabe11.posten[i].preis;
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [Aufgabe11.posten[i].name, "" + (Aufgabe11.posten[i].preis * parseInt(stepper[i].value))]; //...dann wird der Name des entsprechenden Posten und der Preis, multipliziert mit dem Stepper-Wert, gespeichert.
            }
        }
        //Warenkorb Zusammenfassung
        let korb = document.getElementById("zusammenfassung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#b6cf8f";
        korb.innerHTML = "<span class='wk'>Warenkorb</span><br>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "€ <br>"; // Warenkorb mit mit Name und Preis füllen
        korb.innerHTML += "" + basketHalter[0] + " " + basketHalter[1] + "€ <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "€ <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + "€ <br>";
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]); //Preise von Baumart, Halter und Lieferoption von String in Fließkommazahl
        for (let i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]); //...dann wird der Preis vom Schmuck ebenfalls in der Variable gesamtpreis gespeichert
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "€  <br>"; //und der Text im Warenkorb ausgegeben
            }
        }
        korb.innerHTML += "<hr> Rechnungsbetrag: " + Math.round(gesamtpreis * 100) / 100 + "€";
    }
    //Feedback vom Button
    function handleMouseDown(_event) {
        feedback.innerText = " ";
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Bitte überprüfe die Angaben deiner Bestellung.";
            feedback.style.color = "#e35252";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Vielen Dank für deine Bestellung!";
            feedback.style.color = "#b6cf8f";
            document.body.appendChild(feedback);
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=konfigurator.js.map