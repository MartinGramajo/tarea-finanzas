import { useSelector } from "react-redux";
import ModalFormEditar from "../components/ModalFormEditar";
import { useDispatch } from "react-redux";
import { eliminarTransaction } from "../slices/transactionsSlice";

const EditarEliminarScreen = () => {
  const listadoTransacciones = useSelector((state) => state.transaction);

  const dispatch = useDispatch();

  const handleStatus = (id) => {
    console.log(id);
    dispatch(eliminarTransaction({ id }));
  };

  return (
    <div>
      <h2>Panel general de acciones</h2>
      <table className="table">
        <thead>
          <th>id</th>
          <th>Descripcion</th>
          <th>Monto</th>
          <th>categorias</th>
          <th>fecha</th>
          <th>gasto o ingreso</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {listadoTransacciones.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.descripcion}</td>
                <td>{transaction.monto}</td>
                <td>{transaction.categorias}</td>
                <td>{transaction.fecha}</td>
                <td>{transaction.gastoIngreso}</td>
                <td>
                  <ModalFormEditar transaction={transaction} />
                  {/* <button className="btn btn-warning mx-2">editar</button> */}
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleStatus(transaction.id, "eliminado")}
                  >
                    eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EditarEliminarScreen;
