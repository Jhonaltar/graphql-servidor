import monggose from 'mongoose';

monggose.Promise= global.Promise;

monggose.connect('mongodb+srv://jhon:jhon123@cluster0-tc5an.mongodb.net/test?retryWrites=true&w=majority' , 
{ useNewUrlParser: true

}).then(db => console.log('DB is connected'))
  .catch(err =>console.log(err));



  //Clientes

  const clientesSchema = new monggose.Schema ({
    nombre: String,
    apellido: String,
    empresa: String,
    emails : Array,
    edad : Number,
    tipo: String,
    pedidos: Array

  });

  const Clientes = monggose.model('clientes',clientesSchema)

  //Productos

  const productosSchema = new monggose.Schema({
      nombre: String,
      precio: Number,
      stock : Number
  });
  const Productos = monggose.model('productos',productosSchema)


  // Pedidos

  const pedidosSchema = new monggose.Schema({
      pedido: Array,
      total: Number,
      fecha: Date,
      cliente: monggose.Types.ObjectId,
      estado: String
  }) 

  const Pedidos = monggose.model('pedidos',pedidosSchema)

  export {Clientes,Productos, Pedidos};