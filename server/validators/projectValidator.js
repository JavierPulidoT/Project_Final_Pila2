// 1 Importaremos la biblioteca de validacion
import * as Yup from 'yup';

// 2 Crear el esquema de validacion (biblioteca Yup)
const projectSchema = Yup.object().shape({
  symbol: Yup.string().required('Se requiere simbolo de la Crypto'),
  name: Yup.string().required('Se requiere el nombre de la crypto'),
  quantity: Yup.number().required('Se requiere la cantidad de tu crypto/coin'),
});

// 3 Creamos el middleware d evalidacion
const getProject = (req) => {
  // Extraemos la info del formulario
  const { symbol, name, quantity } = req.body;
  // Armar el Objecto con los datos del proyecto
  return {
    symbol,
    name,
    quantity,
  };
};

export default { projectSchema, getProject };
