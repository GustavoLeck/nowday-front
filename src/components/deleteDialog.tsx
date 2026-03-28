import { Dialog, PopupProvider, Button } from "@ama-pt/agora-design-system";

export function DeleteDialog({ isDeleteModalOpen, setIsDeleteModalOpen }) {
  return (
    <PopupProvider>
      <Dialog
        visible={isDeleteModalOpen}
        onHide={() => setIsDeleteModalOpen(false)}
      >
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <Button variant="solid">Botão Sólido</Button>
          <Button variant="outline">Botão Outline</Button>
        </div>
      </Dialog>
    </PopupProvider>
  );
}
