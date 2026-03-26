import { InputText } from "@ama-pt/agora-design-system";

type InputTextProps = {
  formData: Record<string, any>;
  fieldName: string;
  label: string;
  required: boolean;
  width?: string;
};

export function ImputText(props: InputTextProps) {
  const { formData, fieldName, label, width, required } = props;
  return (
    <div className={`mb-4 ${width ? `w-${width}` : ""}`}>
      <label style={{ color: "#034ad8" }} className="block mb-2 font-semibold">
        {label} {required && "*"}
      </label>
      <InputText value={formData?.[fieldName]} />
    </div>
  );
}
