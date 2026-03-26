import { Route, Routes } from "react-router-dom";
import { ListClienteView } from "./view/listClienteView";
import { NotFoundView } from "./view/notFoundView";
import { FormClienteView } from "./view/formClientView";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ListClienteView />} />
      <Route path="/dashboard" element={<FormClienteView type="create" />} />
      <Route path="/clientes" element={<ListClienteView />} />
      <Route
        path="/clientes/create"
        element={<FormClienteView type="create" />}
      />
      <Route
        path="/clientes/edit/:id"
        element={<FormClienteView type="edit" />}
      />
      <Route path="/pedidos" element={<NotFoundView />} />
      <Route path="/definicoes" element={<NotFoundView />} />
    </Routes>
  );
}
