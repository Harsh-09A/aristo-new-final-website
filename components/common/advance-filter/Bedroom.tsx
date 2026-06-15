import { BHKOption } from "@/types/filter";
type Props = {
  data: BHKOption[];
  value: number | null;
  onChange: (val: number) => void;
};

const Bedroom: React.FC<Props> = ({ data, value, onChange }) => {
  return (
    <>
      {data.map((option) => (
        <div className="selection" key={option.id}>
          <input
            id={option.id}
            name="beds"
            type="radio"
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default Bedroom;
