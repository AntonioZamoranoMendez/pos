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

function buscarProducto(evento) {
        // agregar producto a la tabla
    if (evento.key === "Enter") {
        var codigo = document.getElementById("txtcodigo").value;
        if (codigo.length > 0) {
            var cantidad = "1";
            if (codigo.indexOf("*") != -1) {
                cantidad = codigo.split("*")[0];
                codigo = codigo.split("*")[1];
            }
        }

        for (let i = 0; i < productos.length; i++) {
            if (productos[i][0] == codigo) {
                var tabla = document.getElementById("tablacontenido");
                var renglon = tabla.insertRow();
                var celda1 = renglon.insertCell(0);
                var celda2 = renglon.insertCell(1);
                var celda3 = renglon.insertCell(2);
                var celda4 = renglon.insertCell(3);
                celda1.style.textAlign = "center";
                celda2.style.textAlign = "center";
                celda3.style.textAlign = "right";
                celda4.style.textAlign = "right";
                celda1.innerHTML = cantidad;
                celda2.innerHTML = productos[i][1];
                celda3.innerHTML = productos[i][2];
                celda4.innerHTML = (productos[i][2] * cantidad).toFixed(2);
                document.getElementById("txtcodigo").value = "";
                total += productos[i][2] * cantidad;  // por si cantidad es diferente a 1
                document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
                break;
            }
        }

    } else if (evento.key === "Escape") {
        let tabla = document.getElementById("tablacontenido");
        if (tabla.rows.length > 0) {
            var ultimaFila = tabla.rows[tabla.rows.length - 1];
            var subtotal = parseFloat(ultimaFila.cells[3].innerHTML);
            total -= subtotal;
            tabla.deleteRow(tabla.rows.length - 1);
            document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
        }

    } else if (evento.key === "Tab") {
        evento.preventDefault();
        var tabla = document.getElementById("tablacontenido");
        var numFilas = tabla.rows.length;
        if (numFilas > 0) {
            var fila = tabla.rows[numFilas - 1];
            var cantidad = parseInt(fila.cells[0].innerHTML);
            cantidad += 1;
            fila.cells[0].innerHTML = cantidad;
            var precioUnitario = parseFloat(fila.cells[2].innerHTML);
            var nuevoSubtotal = precioUnitario * cantidad;
            fila.cells[3].innerHTML = nuevoSubtotal.toFixed(2);
            total += precioUnitario;
            document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
        }

    } else if (evento.key.toLowerCase() === "c") {
        evento.preventDefault();
        var tabla = document.getElementById("tablacontenido");
        if (tabla.rows.length > 0) {
            mostrarModalClave();
        }
    }  else if (evento.key.toLowerCase() === "p") {
    evento.preventDefault();
    const tabla = document.getElementById("tablacontenido");
    if (tabla.rows.length === 0) return;

    const input = document.getElementById("txtcodigo");
    input.value = "";
    input.placeholder = "Ingrese pago";
    input.focus();

    // Escuchar una sola vez el Enter del pago
    input.onkeypress = function (e) {
        if (e.key === "Enter") {
            const pago = parseFloat(input.value);
            const totalNum = total;

            if (isNaN(pago) || pago <= 0) {
                mostrarModalMensaje("⚠️ Ingrese un monto válido.");
                return;
            }

            if (pago < totalNum) {
                mostrarModalMensaje("💰 El pago no cubre el total.");
                return;
            }

            const cambio = (pago - totalNum).toFixed(2);
            mostrarModalMensaje("✅ Cambio: $" + cambio);

            // Limpiar todo
            limpiarTabla();
            input.value = "";
            input.placeholder = "Escanee o ingrese código";
        }
    };
}

    // === Modal para pedir clave ===
    function mostrarModalClave() {
        var overlay = document.createElement("div");
        overlay.style.cssText = `
            position:fixed;top:0;left:0;width:100%;height:100%;
            background:rgba(0,0,0,0.5);display:flex;
            justify-content:center;align-items:center;z-index:9999;
        `;

        var modal = document.createElement("div");
        modal.style.cssText = `
            background:white;padding:20px 30px;border-radius:10px;
            text-align:center;font-family:sans-serif;
        `;

        modal.innerHTML = `
            <h3>Ingrese la clave de administrador</h3>
            <input type="password" id="inputClave" placeholder="Clave" 
                style="padding:8px;width:250px;margin-bottom:15px;border:1px solid #ccc;border-radius:5px;text-align:center;">
            <div>
                <button id="btnAceptar" style="padding:8px 20px;background:#007bff;color:white;border:none;border-radius:5px;margin-right:10px;">Aceptar</button>
                <button id="btnCancelar" style="padding:8px 20px;background:#6c757d;color:white;border:none;border-radius:5px;">Cancelar</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        document.getElementById("inputClave").focus();

        document.getElementById("btnAceptar").onclick = function () {
            var clave = document.getElementById("inputClave").value.trim();
            document.body.removeChild(overlay);
            verificarClave(clave);
        };

        document.getElementById("btnCancelar").onclick = function () {
            document.body.removeChild(overlay);
        };

        document.getElementById("inputClave").addEventListener("keypress", function (e) {
            if (e.key === "Enter") document.getElementById("btnAceptar").click();
        });
    }

    // === Verificar la clave ingresada ===
    function verificarClave(clave) {
        const CLAVE_CORRECTA = "123456"; // cambiar aquí
        if (clave === CLAVE_CORRECTA) {
            mostrarModalConfirmacion();
        } else {
            mostrarModalMensaje("Clave incorrecta. Intente de nuevo.");
        }
    }

    // === Modal para confirmar cancelación ===
    function mostrarModalConfirmacion() {
        var overlay = document.createElement("div");
        overlay.style.cssText = `
            position:fixed;top:0;left:0;width:100%;height:100%;
            background:rgba(0,0,0,0.5);display:flex;
            justify-content:center;align-items:center;z-index:9999;
        `;

        var modal = document.createElement("div");
        modal.style.cssText = `
            background:white;padding:20px 30px;border-radius:10px;
            text-align:center;font-family:sans-serif;
        `;

        modal.innerHTML = `
            <h3>¿Desea cancelar la venta actual?</h3>
            <div>
                <button id="btnSi" style="padding:8px 20px;background:#dc3545;color:white;border:none;border-radius:5px;margin-right:10px;">Sí, cancelar</button>
                <button id="btnNo" style="padding:8px 20px;background:#6c757d;color:white;border:none;border-radius:5px;">No</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        document.getElementById("btnSi").onclick = function () {
            document.body.removeChild(overlay);
            limpiarTabla();
            mostrarModalMensaje("🧾 Venta cancelada correctamente.");
        };

        document.getElementById("btnNo").onclick = function () {
            document.body.removeChild(overlay);
        };
    }

    // === Modal simple para mostrar mensajes ===
    function mostrarModalMensaje(texto) {
        var overlay = document.createElement("div");
        overlay.style.cssText = `
            position:fixed;top:0;left:0;width:100%;height:100%;
            background:rgba(0,0,0,0.4);display:flex;
            justify-content:center;align-items:center;z-index:9999;
        `;

        var modal = document.createElement("div");
        modal.style.cssText = `
            background:white;padding:20px 30px;border-radius:10px;
            text-align:center;font-family:sans-serif;
        `;
        modal.innerHTML = `
            <p style="margin-bottom:15px;">${texto}</p>
            <button id="btnCerrar" style="padding:6px 15px;background:#007bff;color:white;border:none;border-radius:5px;">OK</button>
        `;
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        document.getElementById("btnCerrar").onclick = function () {
            document.body.removeChild(overlay);
        };
    }

    // === Limpiar tabla y total ===
    function limpiarTabla() {
        var tabla = document.getElementById("tablacontenido");
        while (tabla.rows.length > 0) {
            tabla.deleteRow(0);
        }
        total = 0.00;
        document.getElementById("total").innerText = "Total: $0.00";
    }
function cierreVenta() {
    const input = document.getElementById("txtcodigo");
    input.placeholder = "Ingrese pago";
    input.focus();
}
}
// === Listener de botón4 ===
document.getElementById("boton4").addEventListener("click", function(){
    depositar();
});

// === Modal de tarjeta ===
function depositar() {
    const modal = document.getElementById("modal-tarjeta");
    modal.innerHTML = `
        <div style="position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:9999;">
            <div style="background:white; padding:20px 30px; border-radius:10px; text-align:center; width:300px;">
                <h3>Ingrese número de tarjeta</h3>
                <input id="inputTarjeta" type="text" placeholder="Solo números" style="width:100%; padding:8px; font-size:16px; text-align:center;" maxlength="16" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                <input id="inputTarjeta2" type="text" placeholder="confirme numero" style="width:100%; padding:8px; font-size:16px; text-align:center;" maxlength="16" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                <br><br>
                <button id="btnAceptarTarjeta" style="background:#007bff;color:white;padding:8px 16px;border:none;border-radius:6px;cursor:pointer;">Aceptar</button>
            </div>
        </div>
    `;
    modal.style.display = "block";

    const input = document.getElementById("inputTarjeta");
    input.focus();

    document.getElementById("btnAceptarTarjeta").onclick = function() {
        const valor = input.value.trim();
        const valor2 = document.getElementById("inputTarjeta2").value.trim();
        if (valor !== valor2) {
            alert("⚠️ Los números no coinciden.");
            input.focus();
            return;
        }else if(valor.length != 16 || isNaN(valor) || valor === "" || valor2.length != 16 || isNaN(valor2) || valor2 === "") {
            alert("⚠️ Ingrese un número de tarjeta válido.");
            input.focus();
            return;
        } else if (valor === valor2){
             let monto = prompt("Ingrese el monto a depositar (máximo $5000):");
    monto = parseFloat(monto);

    if (isNaN(monto) || monto <= 0) {
        alert("⚠️ Monto inválido.");
        return;
    } else if (monto > 5000) {
        alert("⚠️ El monto máximo permitido es $5000.");
        return;
    }

    alert("✅ Depósito aceptado: $" + monto.toFixed(2));
    modal.style.display = "none";
        }
        
       // modal.style.display = "none";
    };
}
