import monggose from 'mongoose';

monggose.Promise= global.Promise;

monggose.connect('mongodb+srv://jhon:jhon123@cluster0-tc5an.mongodb.net/test?retryWrites=true&w=majority' , 
{ useNewUrlParser: true

}).then(db => console.log('DB is connected'))
  .catch(err =>console.log(err));

  const clientesSchema = new monggose.Schema ({
    nombre: String,
    apellido: String,
    empresa: String,
    email : String,
    tipo: String,
    pedidos: Array

  });

  const Clientes = monggose.model('clientes',clientesSchema)

  export {Clientes};