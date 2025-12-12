import AdminAddForm from "../AdminAddForm";
import AdminLabel from "../AdminLabel";
import AdminInput from "../AdminInput";

function AdminAddMotherInfo() {
  return (
    <div>
      <AdminAddForm type="four">
        <div>
          <AdminLabel htmlFor="mae">Nome Completo</AdminLabel>
          <AdminInput id="mae" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="mae-telefone">Telefone do mãe</AdminLabel>
          <AdminInput id="mae-telefone" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="email-mae">Email do mãe</AdminLabel>
          <AdminInput id="email-mae" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="function-mae">Ocupação do mãe</AdminLabel>
          <AdminInput id="function-mae" type="text" />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddMotherInfo;
