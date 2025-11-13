from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/products")
def products():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="ant",
            password="CuackdePato05$",
            database="pos"
        )
        cursor = connection.cursor(dictionary=True)
        # obtén todos los productos o filtra uno fijo para pruebas
        cursor.execute("SELECT codigo_producto, nombre_producto, precio_producto FROM productos")
        products = cursor.fetchall()
        cursor.close()
        connection.close()

        return render_template("products.html", products=products)
    except mysql.connector.Error as err:
        return f"Error de conexión: {err}", 500

@app.route("/products/<codigo_producto>")
def product(codigo_producto):
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="ant",
            password="CuackdePato05$",
            database="pos"
        )
        cursor = connection.cursor(dictionary=True)
        cursor.execute(
            "SELECT codigo_producto, nombre_producto, precio_producto FROM productos WHERE codigo_producto = %s",
            (codigo_producto,)
        )
        product = cursor.fetchone()
        cursor.close()
        connection.close()

        if not product:
            return jsonify(error="Producto no encontrado"), 404

        return jsonify(product=product), 200
    except mysql.connector.Error as err:
        return f"Error de conexión: {err}", 500

@app.route("/product")
def product_get():
    code = request.args.get("code")
    if not code:
        return "Falta el parámetro 'code'", 400

    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="ant",
            password="CuackdePato05$",
            database="pos"
        )
        cursor = connection.cursor(dictionary=True)
        cursor.execute(
            "SELECT codigo_producto, nombre_producto, precio_producto FROM productos WHERE codigo_producto = %s",
            (code,)
        )
        product = cursor.fetchone()
        cursor.close()
        connection.close()

        if not product:
            return "Producto no encontrado", 404

        return render_template("product.html", products=[product])
    except mysql.connector.Error as err:
        return f"Error de conexión: {err}", 500

if __name__ == "__main__":
    app.run(debug=True)
