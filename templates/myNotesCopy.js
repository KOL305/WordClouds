function createCard (theNote){
    var cardPlaceDiv = document.getElementById("cardPlace");

    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card",theNote["fonts"]);
    cardDiv.style["background-color"] = theNote["noteBackground"];

    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    var rowDiv1 = document.createElement("div");
    rowDiv1.classList.add("row");

    var colDiv = document.createElement("div");
    colDiv.classList.add("col");

    var h2 = document.createElement("h2");
    h2.textContent = theNote["question"];
    h2.style["color"] = theNote["noteForeground"];

    var label = document.createElement("label");
    label.textContent = "Enter your response here: ";
    label.style["color"] = theNote["noteForeground"];
    label.classList.add("label");

    var rowDiv2 = document.createElement("div");
    rowDiv2.classList.add("row");

    var col6Div1 = document.createElement("div");
    col6Div1.classList.add("col-6");

    var input = document.createElement("input");
    //input.classList.add("input");
    input.classList.add("form-control");

    var br = document.createElement("br");
    //br.classList.add("br")

    var submitButton = document.createElement("button");
    submitButton.classList.add("btn","btn-primary","w-100");
    submitButton.innerText = "Submit";

    var col6Div2 = document.createElement("div");
    col6Div2.classList.add("col-6");

    var img = document.createElement("img");
    img.classList.add("img","img-fluid","rounded","mx-auto", "d-block", "cloud");
    img.src = "white.png";

    // var col2Div = document.createElement("div");
    // col2Div.classList.add("col-2");

    // var trashButton = document.createElement("button");
    // trashButton.classList.add("trash","btn","btn-danger");

    // var trashIcon = document.createElement("i");
    // trashIcon.classList.add("fa","fa-trash");

    // var referenceLink = document.createElement("a");
    // referenceLink.href = theNote["referenceLink"];
    // referenceLink.textContent = theNote["referenceLink"];

    // var pencilButton = document.createElement("button");
    // pencilButton.classList.add("btn","bg-transparent","bg-outline-light");

    // var pencilIcon = document.createElement("i");
    // pencilIcon.classList.add("fa","fa-pencil");

    // var description = document.createElement("p");
    // description.textContent = theNote["description"];
    // description.style["color"] = theNote["noteForeground"];

    //The prepend() method inserts specified content at the beginning of the selected elements. Tip: To insert content at the end of the selected elements, use the append() method.

    col6Div1.prepend(submitButton);
    col6Div1.prepend(br);
    col6Div1.prepend(input);
    col6Div1.prepend(label);

    col6Div2.prepend(img);

    rowDiv2.prepend(col6Div1);
    rowDiv2.append(col6Div2);

    //pencilButton.prepend(pencilIcon);

    colDiv.prepend(h2);

    rowDiv1.append(colDiv);
    //rowDiv.append(col2Div);

    cardBodyDiv.append(rowDiv1);
    cardBodyDiv.append(rowDiv2);
    //cardBodyDiv.append(referenceLink);
    //cardBodyDiv.append(pencilButton);
    //cardBodyDiv.append(description);

    cardDiv.append(cardBodyDiv);

    cardPlaceDiv.prepend(cardDiv);
}

function getTheNote (){
    var question = document.getElementById("question").value;
    // var referenceLink = document.getElementById("referenceLink").value;
    // var description = document.getElementById("description").value;
    var fonts = document.getElementById("fonts").value;
    var noteBackground = document.getElementById("noteBackground").value;
    var noteForeground = document.getElementById("noteForeground").value;

    var theNote = {"question":question, "fonts":fonts, "noteBackground":noteBackground, "noteForeground":noteForeground};

    createCard(theNote);
}


