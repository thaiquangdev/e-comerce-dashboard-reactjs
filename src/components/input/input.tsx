interface InputProps {
  type: string;
  classN: string;
  name?: string;
  place?: string;
  val?: string;
  multiple?: boolean;
  onCh?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  classN,
  place,
  val,
  id,
  onCh,
  multiple,
  name,
}) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      className={classN}
      placeholder={place}
      value={val}
      onChange={onCh}
      multiple={multiple}
    />
  );
};

export default Input;
