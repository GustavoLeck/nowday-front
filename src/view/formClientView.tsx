import { Breadcrumb, InputText } from "@ama-pt/agora-design-system";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ImputText } from "../components/inputText";

type FormClienteViewProps = {
  type: "create" | "edit";
};

interface ClienteForm {
  name: string;
  morada: string;
  telefone: string;
}

export function FormClienteView({ type }: FormClienteViewProps) {
  const { id } = useParams();
  const idCliente = id ? Number(id) : null;

  const [formData, setFormData] = useState<ClienteForm>({
    name: "",
    morada: "",
    telefone: "",
  });

  const handleInputChange = (field: keyof ClienteForm, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const ListItensBreadcrump = [{ label: "Clientes", url: "/clientes" }];

  if (type === "edit") {
    ListItensBreadcrump.push({ label: "Detalhes do Cliente", url: "" });
    console.log(idCliente);
  }

  if (type === "create") {
    ListItensBreadcrump.push({ label: "Inserir novo cliente", url: "" });
  }

  return (
    <div className="p-4">
      <Breadcrumb items={ListItensBreadcrump} />
      <h1 className="text-2xl font-bold mb-4" style={{ color: "#034ad8" }}>
        {type === "edit" ? "Editar Cliente" : "Inserir novo cliente"}
      </h1>
      <form>
        <ImputText
          required={true}
          formData={formData}
          fieldName="morada"
          label="Nome"
        />
        <ImputText
          required={true}
          formData={formData}
          fieldName="morada"
          label="Nome"
        />
        <ImputText
          required={true}
          formData={formData}
          fieldName="morada"
          label="Nome"
        />
      </form>
    </div>
  );
}
