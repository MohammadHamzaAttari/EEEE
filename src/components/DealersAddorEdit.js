import React from "react";
import DealersSignUp from "./DealersSignUp";
import axios from "axios";
function DealersAddorEdit() {
  const addorEdit = (formData, onSuccess) => {
    DealerApi()
      .create(formData)
      .then((res) => {
        onSuccess();
      })
      .catch((error) => console.log(error));
  };

  const DealerApi = (url = "https://localhost:44355/api/Dealers") => {
    return {
      fetchAll: () => axios.get(url),
      create: (NewRecord) => axios.post(url, NewRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  };
  return (
    <div>
      <DealersSignUp AddorEdit={addorEdit} />
    </div>
  );
}

export default DealersAddorEdit;
