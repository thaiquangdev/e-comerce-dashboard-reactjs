interface InputProps {
  type: string;
  classN: string;
  place: string;
  val?: string;
  onCh?: React.ChangeEventHandler<HTMLInputElement>;
  id: string;
}

const Input: React.FC<InputProps> = ({
  type,
  classN,
  place,
  val,
  id,
  onCh,
}) => {
  return (
    <input
      id={id}
      type={type}
      className={classN}
      placeholder={place}
      value={val}
      onChange={onCh}
    />
  );
};

export default Input;
