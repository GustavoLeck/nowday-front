import { InputText } from "@ama-pt/agora-design-system";

type InputTextProps = {
  formData: Record<string, any>;
  fieldName: string;
  label: string;
  required: boolean;
  cs?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
};

const colSpanMap = {
  "1": "col-span-1",
  "2": "col-span-2",
  "3": "col-span-3",
  "4": "col-span-4",
  "5": "col-span-5",
  "6": "col-span-6",
  "7": "col-span-7",
  "8": "col-span-8",
  "9": "col-span-9",
  "10": "col-span-10",
  "11": "col-span-11",
  "12": "col-span-12",
} as const;

export function InputTextForm(props: InputTextProps) {
  const { formData, fieldName, label, cs, required } = props;

  return (
    <div
      className={`mb-16 m-8 mx-2 ${cs ? colSpanMap[cs] : ""}`}
      style={{ color: "#021C51" }}
    >
      <label className="block mb-2 font-semibold text-blue-700">
        {label} {required && "*"}
      </label>
      <InputText value={formData?.[fieldName]} />
    </div>
  );
}
