import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableProps,
  TableRow,
  InputSearch,
  Button,
  Dialog,
} from "@ama-pt/agora-design-system";
import { DeleteClientModal } from "./deleteClientModal";

export function ListClienteView() {
  interface DummyDataType {
    id: number;
    name: string;
    morada: string;
    telefone: string;
    acoes: string;
  }

  const DUMMY_DATA: Array<DummyDataType> = [
    {
      id: 1,
      name: "Ana Sofia Pereira Martins",
      morada: "Rua das Flores 125, 3º Esq., 1200-164 Lisboa",
      telefone: "912 345 678",
      acoes: "Vizualizar | Editar | Eliminar",
    },
    {
      id: 2,
      name: "João Pedro Almeida Costa",
      morada:
        "Fri Jan 05 2024 00:05:05 GMT+0000 (Hora padrão da Europa Ocidental)",
      telefone: "86ea7890-f16c-4945-a50d-bdfedf84aac4",
      acoes: "Vizualizar | Editar | Eliminar",
    },
    {
      id: 3,
      name: "Ana Sofia Pereira Martins",
      morada:
        "Tue Jan 16 2024 15:18:05 GMT+0000 (Hora padrão da Europa Ocidental)",
      telefone: "ae223f48-3dfe-46d4-8eb3-ef88cf9e404d",
      acoes: "Vizualizar | Editar | Eliminar",
    },
    {
      id: 4,
      name: "Cliente 3",
      morada:
        "Wed Jan 10 2024 09:14:32 GMT+0000 (Hora padrão da Europa Ocidental)",
      telefone: "77f85ef3-4219-4621-8f15-40e5b0a5eba0",
      acoes: "Vizualizar | Editar | Eliminar",
    },
    {
      id: 5,
      name: "Cliente 4",
      morada:
        "Sun Jan 21 2024 23:54:22 GMT+0000 (Hora padrão da Europa Ocidental)",
      telefone: "0ecd011a-b72f-4dac-9ad3-bbe34d84d90a",
      acoes: "Vizualizar | Editar | Eliminar",
    },
  ];

  const TableGeneralStory = (args: TableProps) => {
    const AVAILABLE_PAGE_SIZES = [5, 10, 20, 30, 40, 50];
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(5);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [rows] = useState(DUMMY_DATA);

    const buildRows = (data: DummyDataType[]) => {
      return data.map((tableCellData) => {
        const trKey = `tr-${tableCellData.id}`;

        const keys = Object.keys(tableCellData);

        const cells = keys.map((key) => {
          const k = key as keyof DummyDataType;
          const tcKey = `${tableCellData.id}-${k}`;

          if (k === "id") {
            return null;
          }

          if (k === "acoes") {
            return (
              <TableCell key={tcKey} headerLabel={k}>
                <div className="flex gap-2">
                  <Button
                    hasIcon={true}
                    leadingIcon="agora-line-eye"
                    leadingIconHover="agora-line-eye"
                    variant="tertiary"
                    size="small"
                    aria-label="Visualizar"
                  />
                  <Button
                    hasIcon={true}
                    leadingIcon="agora-line-edit"
                    leadingIconHover="agora-line-edit"
                    variant="tertiary"
                    size="small"
                    aria-label="Editar"
                    onClick={() =>
                      navigate(`/clientes/edit/${tableCellData.id}`)
                    }
                  />
                  <Button
                    hasIcon={true}
                    leadingIcon="agora-line-trash"
                    leadingIconHover="agora-line-trash"
                    variant="danger"
                    appearance="link"
                    size="small"
                    aria-label="Eliminar"
                    onClick={() => setIsDeleteModalOpen(true)}
                  />
                </div>
              </TableCell>
            );
          }

          return (
            <TableCell key={tcKey} headerLabel={k}>
              {tableCellData[k]}
            </TableCell>
          );
        });

        return <TableRow key={trKey}>{cells.filter(Boolean)}</TableRow>;
      });
    };

    const rowSlice = useMemo(() => {
      const startIndex = Math.max(0, currentPage * currentPageSize);
      const endIndex = Math.min(
        rows.length,
        (currentPage + 1) * currentPageSize,
      );

      const slice = rows.slice(startIndex, endIndex);
      return buildRows(slice);
    }, [currentPage, currentPageSize]);

    const [totalRows] = useState(rows.length);

    const onPageChangeHandler = (newPage: number) => {
      setCurrentPage(newPage);
    };

    const onPageSizeChangeHandler = (newSize: number) => {
      setCurrentPageSize(newSize);
      setCurrentPage(0);
    };

    return (
      <>
        <div className="pt-64 mb-8">
          <h1
            className="text-2xl font-bold mb-4 text "
            style={{ color: "#021C51" }}
          >
            Clientes
          </h1>
        </div>
        <div className="flex items-end justify-between">
          <div className="pb-16 w-1/3">
            <a style={{ color: "#021C51" }}>Pesquisar cliente</a>
            <InputSearch></InputSearch>
          </div>
          <div className="pb-16">
            <Button
              hasIcon={true}
              trailingIcon="agora-line-arrow-right-circle"
              trailingIconHover="agora-line-arrow-right-circle"
              onClick={() => navigate("/clientes/create")}
            >
              Inserir novo cliente
            </Button>
          </div>
        </div>

        <div>
          <Table
            {...args}
            paginationProps={{
              itemsPerPageLabel: "Items per page: ",
              itemsPerPage: currentPageSize,
              totalItems: totalRows,
              currentPage: currentPage,
              availablePageSizes: AVAILABLE_PAGE_SIZES,
              buttonDropdownAriaLabel: "Custom button label",
              dropdownListAriaLabel: "Page size dropdown alt text",
              prevButtonAriaLabel: "Custom previous button label",
              nextButtonAriaLabel: "Custom next button label",
              onPageChange: onPageChangeHandler,
              onPageSizeChange: onPageSizeChangeHandler,
            }}
          >
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Nome</TableHeaderCell>
                <TableHeaderCell>Morada</TableHeaderCell>
                <TableHeaderCell>Telefone</TableHeaderCell>
                <TableHeaderCell>Ações</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>{rowSlice}</TableBody>
          </Table>
        </div>

        <Dialog
          visible={isDeleteModalOpen}
          dismissOnBackdropClick={true}
          dismissOnEscape={true}
          onHide={() => setIsDeleteModalOpen(false)}
        >
          <DeleteClientModal />
        </Dialog>
      </>
    );
  };

  return <TableGeneralStory />;
}
