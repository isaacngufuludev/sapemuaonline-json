import AdminAddForm from "../AdminAddForm";
import AdminLabel from "../AdminLabel";
import AdminInput from "../AdminInput";

function AdminAddGuardionInfo() {
  return (
    <div>
      <AdminAddForm type="four">
        <div>
          <AdminLabel htmlFor="guardiao">Nome Completo</AdminLabel>
          <AdminInput id="guardiao" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="guardiao-telefone">
            Telefone do Guardião
          </AdminLabel>
          <AdminInput id="guardiao-telefone" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="email-guardiao">Email do Guardião</AdminLabel>
          <AdminInput id="email-guardiao" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="function-guardiao">
            Ocupação do Guardião
          </AdminLabel>
          <AdminInput id="function-guardiao" type="text" />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddGuardionInfo;
