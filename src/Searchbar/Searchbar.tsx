import React, { FC } from "react";
interface Props {
  search(e: any): void;
}
const Searchbar: FC<Props> = ({ search }) => {
  return (
    <div>
      <input
        type='text'
        onKeyPress={search}
        placeholder='Entrer un nom de film'
      />
    </div>
  );
};

export default Searchbar;
