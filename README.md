#  Artesana

Artesana es una aplicación web de e-commerce desarrollada con React para la venta de productos artesanales tejidos en crochet y macramé.

La aplicación permite a los usuarios navegar por el catálogo de productos, agregar artículos al carrito, aplicar cupones de descuento y finalizar la compra. Además, cuenta con un panel de administración protegido para gestionar los productos almacenados en Firebase Firestore.

---

## 🚀 Tecnologías utilizadas

- React
- React Router DOM
- React Bootstrap
- Firebase Firestore
- Firebase Authentication
- Context API
- Vite

---

## ✨ Funcionalidades

### Usuario

- Ver listado de productos.
- Ver detalle de cada producto.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Vaciar carrito.
- Aplicar cupones de descuento.
- Finalizar compra.

### Administrador

- Iniciar sesión.
- Acceder a rutas protegidas.
- Crear productos.
- Editar productos.
- Eliminar productos.
- Gestionar el catálogo desde Firestore.

---

## 📦 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/AldanaRocha/artesana_tejidos.git

Ingresar a la carpeta del proyecto:

```bash
cd artesana_tejidos
```

Instalar las dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npm run dev
```

Abrir el navegador en:

```
http://localhost:5173
```

## ⚙️ Variables de entorno

El proyecto utiliza Firebase.

Para ejecutarlo localmente es necesario configurar las credenciales correspondientes en el archivo:

```javascript
src/firebase/config.js

## 🔥 Configuración de Firebase

Crear un proyecto en Firebase y configurar:

- Authentication
- Firestore Database

Crear un archivo con la configuración de Firebase correspondiente.

---

## 📁 Estructura del proyecto

```
src/
│
├── components/
├── context/
├── firebase/
├── pages/
├── router/
└── App.jsx
```
