function CreateTable() {
    var employee = new Array();
    employee.push([4, "Billie Jean", "Country4",'<text class="d-none d-md-inline-block">Editar</text><i id="botedit" class="bi bi-pencil-square"></i><text class="d-none d-md-inline-block"> Remover </text><i id="botedit" class="bi bi-trash"></i>']);
    employee.push([5, "Harish Kumar", "Country5", "teste"]);
    employee.push([6, "Pankaj Mohan", "Country6", "teste"]);
    employee.push([7, "Nitin Srivastav", "Country7", "teste"]);
    employee.push([8, "Ramchandra Verma", "Country8", "teste"]);

    var tablecontents = "";
    for (var i = 0; i < employee.length; i++) {
        tablecontents += "<tr>";
        for (var j = 0; j < employee[i].length; j++) {
            tablecontents += "<td>" + employee[i][j] + "</td>";
        }
        tablecontents += "</tr>";
    }
    document.getElementById("mytablecontent").innerHTML = tablecontents;
}

function CreateTable2(tableid) {
    var employee = new Array();
    employee.push([4, "Billie Jean", "Country4",'<text class="d-none d-md-inline-block">Editar</text><i id="botedit" class="bi bi-pencil-square"></i><text class="d-none d-md-inline-block"> Remover </text><i id="botedit" class="bi bi-trash"></i>']);
    employee.push([5, "Harish Kumar", "Country5", "teste"]);
    employee.push([6, "Pankaj Mohan", "Country6", "teste"]);
    employee.push([7, "Nitin Srivastav", "Country7", "teste"]);
    employee.push([8, "Ramchandra Verma", "Country8", "teste"]);

    var tablecontents = "";
    for (var i = 0; i < employee.length; i++) {
        tablecontents += "<tr>";
        for (var j = 0; j < employee[i].length; j++) {
            tablecontents += "<td>" + employee[i][j] + "</td>";
        }
        tablecontents += "</tr>";
    }
    document.getElementById(tableid).innerHTML = tablecontents;
}



function processTreino()  {
    var parameters = location.search.substring(1);
  
    var temp = parameters.split("=");
    l = unescape(temp[1]);
    document.getElementById("log").innerHTML = l;
}
  

function processTreino2()  {
    var parameters = location.search.substring(1);
  
    var temp = parameters.split("=");
    codTreino = unescape(temp[1]);
    
    var treino = new Array();
    switch (codTreino) {
        case "1":
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            treino.push(["Supino reto com barra", 0, 8, 4, 0]);
            treino.push(["Barra fixa", 0, 6, 4, 0]);
            treino.push(["Desenvolvimento com barra", 0, 8, 4, 0]);
            treino.push(["Rosca direta", 0, 8, 4, 0]);
            treino.push(["Abdômen na polia alta", 0, 8, 4, 0]);
            break;
        case "2":
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            break;
        case "3":
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            treino.push(["Agachxivre", 0, 8, 4, 0]);
            treino.push(["Agachamento Livre", 0, 8, 4, 0]);
            break;            
    }
    var tablecontents = "";
    for (var i = 0; i < treino.length; i++) {
        tablecontents += "<tr>";
        for (var j = 0; j < treino[i].length; j++) {
            tablecontents += "<td>" + treino[i][j] + "</td>";
        }
        tablecontents += "</tr>";
    }
    document.getElementById("tabelaTreino").innerHTML = tablecontents;
}