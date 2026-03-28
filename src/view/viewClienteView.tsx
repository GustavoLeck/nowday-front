import { Breadcrumb } from "@ama-pt/agora-design-system";

const ListItensBreadcrump = [
  { label: "Clientes", url: "/clientes" },
  { label: "Detalhes do Cliente", url: "" },
];

export function ViewClienteView() {
  return (
    <div className="p-4 ">
      <Breadcrumb items={ListItensBreadcrump} />
      <div style={{ color: "#000000" }}>
        <h1 style={{ color: "#021C51" }}>Detalhes do cliente</h1>
        <div className="mt-16">
          <h3 className="font-bold">Nome</h3>
          <p>Gustavo</p>
        </div>
        <div className="mt-16">
          <h3 className="font-bold">Morada</h3>
          <p>Gustavo</p>
        </div>
        <div className="mt-16">
          <h3 className="font-bold">Telefone</h3>
          <p>Gustavo</p>
        </div>
      </div>
    </div>
  );
}
