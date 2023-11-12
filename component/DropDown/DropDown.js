import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      {label: '010', value: '010'},
      {label: '011', value: '011'},
      {label: '016', value: '016'},
      {label: '017', value: '017'},
      {label: '018', value: '018'},
      {label: '019', value: '019'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="선택"
      // listMode="MODAL"
      modalProps={{
        animationType: 'fade',
      }}
      modalTitle="선택해주세요."
    />
  );
}

export default DropDown;