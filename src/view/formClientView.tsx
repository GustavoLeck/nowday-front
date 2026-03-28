import { Breadcrumb, Button } from "@ama-pt/agora-design-system";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { InputTextForm } from "../components/inputTextForm";
import { Grid } from "../components/grid";

type FormClienteViewProps = {
  type: "create" | "edit";
};

interface ClienteForm {
  nome: string;
  morada: string;
  telefone: string;
  codigoPostal: string;
  localidade: string;
}

export function FormClienteView({ type }: FormClienteViewProps) {
  const { id } = useParams();

  const [formData, setFormData] = useState<ClienteForm>({
    nome: "",
    morada: "",
    telefone: "",
    codigoPostal: "",
    localidade: "",
  });

  const handleInputChange = (field: keyof ClienteForm, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const ListItensBreadcrump = [{ label: "Clientes", url: "/clientes" }];

  if (type === "edit") {
    ListItensBreadcrump.push({ label: "Editar do Cliente", url: "" });
  }

  if (type === "create") {
    ListItensBreadcrump.push({ label: "Inserir novo cliente", url: "" });
  }

  return (
    <div className="p-4 ">
      <Breadcrumb items={ListItensBreadcrump} />
      <h1 className="text-2xl font-bold mb-4" style={{ color: "#021C51" }}>
        {type === "edit" ? "Editar Cliente" : "Inserir novo cliente"}
      </h1>
      <form>
        <Grid>
          <InputTextForm
            required={true}
            formData={formData}
            fieldName="nome"
            label="Nome"
            cs="9"
          />
          <InputTextForm
            required={true}
            formData={formData}
            fieldName="telefone"
            label="Telefone"
            cs="3"
          />
          <InputTextForm
            required={true}
            formData={formData}
            fieldName="morada"
            label="Morada"
            cs="4"
          />
          <InputTextForm
            required={true}
            formData={formData}
            fieldName="codigoPostal"
            label="Código postal"
            cs="3"
          />
          <InputTextForm
            required={true}
            formData={formData}
            fieldName="localidade"
            label="Localidade"
            cs="5"
          />
          <Button appearance="outline" variant="primary" className="m-8 mt-8">
            Cancelar
          </Button>
          <Button className="m-8 mt-8">
            {type === "create" ? "Submeter" : "Guardar"}
          </Button>
        </Grid>
      </form>
    </div>
  );
}
