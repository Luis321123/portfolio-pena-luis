import { Dispatch, SetStateAction } from "react";

interface Props {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const MenuHamburguer = ({ isChecked, setIsChecked }: Props) => {
  return (
    <label className=" hamburguer-label z-[999999]" htmlFor="check">
      <input
        type="checkbox"
        id="check"
        onChange={() => setIsChecked(!isChecked)}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default MenuHamburguer;
