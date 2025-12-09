import AdminAddForm from "../AdminAddForm";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";

function AdminAddFatherInfo() {
  return (
    <div>
      <AdminAddForm type="four">
        <div>
          <AdminLabel htmlFor="pai">Nome Completo</AdminLabel>
          <AdminInput id="pai" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="pai-telefone">Telefone do Pai</AdminLabel>
          <AdminInput id="pai-telefone" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="email-pai">Email do pai</AdminLabel>
          <AdminInput id="email-pai" type="text" />
        </div>
        <div>
          <AdminLabel htmlFor="function-pai">Ocupação do pai</AdminLabel>
          <AdminInput id="function-pai" type="text" />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddFatherInfo;
