var total = 0.00;
const productos = [
  ["001", "Sabritas Clásicas", 27.45],
  ["002", "Doritos Nacho", 34.20],
  ["003", "Ruffles Queso", 41.37],
  ["004", "Chetos Torciditos", 30.89],
  ["005", "Tostitos Salsa Verde", 36.15],
  ["006", "Barcel Chip's", 28.49],
  ["007", "Takis Fuego", 29.75],
  ["008", "Pringles Original", 45.10],
  ["009", "Rancheritos", 26.33],
  ["010", "Fritos Sal", 24.90],
  ["011", "Galletas Oreo", 33.77],
  ["012", "Galletas Emperador", 18.65],
  ["013", "Galletas Marias", 22.30],
  ["014", "Galletas Príncipe", 25.55],
  ["015", "Chokis", 19.88],
  ["016", "Mamut", 14.75],
  ["017", "Submarinos", 17.99],
  ["018", "Pingüinos", 20.45],
  ["019", "Bubulubu", 12.50],
  ["020", "Paleta Payaso", 13.99],
  ["021", "Snickers", 17.45],
  ["022", "Milky Way", 16.70],
  ["023", "Carlos V", 11.95],
  ["024", "Hershey's", 21.88],
  ["025", "Kinder Bueno", 23.25],
  ["026", "Jumex Mango", 14.10],
  ["027", "Jumex Durazno", 14.10],
  ["028", "Coca-Cola 600ml", 19.50],
  ["029", "Pepsi 600ml", 18.99],
  ["030", "Sprite 600ml", 19.20],
  ["031", "Fanta Naranja", 18.70],
  ["032", "Manzanita Sol", 18.30],
  ["033", "Agua Ciel 1L", 13.99],
  ["034", "Bonafont 1L", 14.25],
  ["035", "Gatorade Azul", 17.90],
  ["036", "Powerade Rojo", 18.15],
  ["037", "Red Bull", 39.99],
  ["038", "Monster Energy", 41.50],
  ["039", "Vive100", 17.00],
  ["040", "Boost", 18.40],
  ["041", "Pan Bimbo", 36.50],
  ["042", "Pan Blanco Wonder", 35.99],
  ["043", "Pan Integral", 38.75],
  ["044", "Panqués Bimbo", 29.45],
  ["045", "Conchas Bimbo", 18.90],
  ["046", "Donas Bimbo", 21.35],
  ["047", "Chicles Trident", 10.99],
  ["048", "Halls Mentol", 11.20],
  ["049", "Tic Tac", 15.30],
  ["050", "Pastillas Vicks", 12.80],
  ["051", "Leche Lala 1L", 22.90],
  ["052", "Leche Alpura 1L", 23.25],
  ["053", "Yoghurt Danone", 17.45],
  ["054", "Yoghurt Yoplait", 18.10],
  ["055", "Yakult", 26.70],
  ["056", "Queso Philadelphia", 44.90],
  ["057", "Queso Amarillo", 37.30],
  ["058", "Crema Lala", 28.20],
  ["059", "Mantequilla Gloria", 31.65],
  ["060", "Huevos San Juan", 46.80],
  ["061", "Frijoles Isadora", 15.40],
  ["062", "Sopa Maruchan", 13.50],
  ["063", "Atún Dolores", 21.30],
  ["064", "Sardinas Calmex", 18.80],
  ["065", "Chiles La Costeña", 19.99],
  ["066", "Mayonesa McCormick", 27.45],
  ["067", "Catsup Heinz", 24.60],
  ["068", "Aceite Nutrioli", 49.99],
  ["069", "Sal La Fina", 12.75],
  ["070", "Azúcar Zulka", 21.95],
  ["071", "Cereal Zucaritas", 38.20],
  ["072", "Cereal Choco Krispis", 37.10],
  ["073", "Cereal Froot Loops", 39.75],
  ["074", "Choco Milk", 42.50],
  ["075", "Nesquik", 36.99],
  ["076", "Helado Holanda", 52.30],
  ["077", "Helado Nestlé", 50.20],
  ["078", "Paleta Magnum", 28.50],
  ["079", "Cornetto", 26.70],
  ["080", "Nieve de Limón", 22.40],
  ["081", "Papel Higiénico", 45.80],
  ["082", "Toallas Húmedas", 33.25],
  ["083", "Jabón Dove", 17.99],
  ["084", "Shampoo Sedal", 36.00],
  ["085", "Desodorante Axe", 49.30],
  ["086", "Cloralex", 29.75],
  ["087", "Fabuloso", 27.60],
  ["088", "Pinol", 28.10],
  ["089", "Suavitel", 30.45],
  ["090", "Ariel", 42.99],
  ["091", "Encendedor", 12.99],
  ["092", "Pilas Duracell", 46.75],
  ["093", "Vaso de Unicel", 16.30],
  ["094", "Servilletas", 23.10],
  ["095", "Cubiertos Plásticos", 19.99],
  ["096", "Refresco Sidral", 17.85],
  ["097", "Pan Molido", 14.40],
  ["098", "Gelatina D'Gari", 9.99],
  ["099", "Mayonesa Heinz", 25.50],
  ["100", "Salsa Valentina", 13.30]
];

function buscarProducto(evento){

    if (evento.key === "Enter"){
        var codigo = document.getElementById("txtcodigo").value;
        if (codigo.length > 0){
            var cantidad = "1";
            if (codigo.indexOf("*") != -1 ){
                cantidad = codigo.split("*")[0];
                codigo = codigo.split("*")[1];
            }
        }

        for(let i = 0; i < productos.length; i ++){
            if (productos[i][0]== codigo){
                var tabla = document.getElementById("tablacontenido");
                var renglon = tabla.insertRow();
                var celda1 = renglon.insertCell(0);
                var celda2 = renglon.insertCell(1);
                var celda3 = renglon.insertCell(2);
                var celda4 = renglon.insertCell(3);
                celda1.setAttribute("style", "text-align:center;");
                celda2.setAttribute("style", "text-align:center;");
                celda3.setAttribute("style", "text-align:right;");
                celda4.setAttribute("style", "text-align:right;");
                celda1.innerHTML = cantidad;
                celda2.innerHTML = productos[i][1];
                celda3.innerHTML = productos[i][2];
                celda4.innerHTML = productos[i][2] * cantidad;
                document.getElementById("txtcodigo").value = "";
                total += productos[i][2] * cantidad;
                document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
                break;                
            }            
        }
    } else if (evento.key === "Escape") {
        let borrar = document.getElementById("tablacontenido");

        // Verificar que existe al menos una fila para borrar
        if (borrar.lastChild) {
            // Obtener el subtotal de la última fila antes de borrarla
            var ultimaFila = borrar.lastChild;
            var subtotal = parseFloat(ultimaFila.cells[3].innerHTML);

            // Restar el subtotal del total
            total -= subtotal;

            // Borrar la fila
            borrar.removeChild(ultimaFila);

            // Actualizar el total en pantalla
            document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
        }
    }
}








