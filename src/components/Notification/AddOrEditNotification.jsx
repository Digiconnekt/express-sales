import { useState, useEffect } from "react";
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
} from "../../base-components/Form";
import TomSelect from "../../base-components/TomSelect";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useNavigate } from "react-router-dom";
import useAllStores from "../../apis/store/Stores";

const AddOrEditNotification = ({
  type,
  data,
  error,
  isLoading,
  submitReq,
  inputData,
  setModalOpen,
}) => {
  const navigate = useNavigate();

  const {
    allStoresReq,
    data: dataAllStores,
    isLoading: isLoadingAllStores,
    reFetch: reFetchAllStores,
  } = useAllStores();

  const [sendToAllStores, setSendToAllStores] = useState(true);
  const [selectMultiple, setSelectMultiple] = useState([]);
  const [formData, setFormData] = useState({
    storeId: "",
    title: "",
    message: "",
    imageUrl: "",
    sendAt: "",
  });

  useEffect(() => {
    allStoresReq();
  }, []);

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        storeId: inputData?.storeId || "",
        title: inputData?.title || "",
        message: inputData?.message || "",
        imageUrl: inputData?.imageUrl || "",
        sendAt: inputData?.sendAt || "",
      }));
    }
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    type === "add" ? submitReq(formData) : submitReq(inputData?.id, formData);
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <>
      <div>
        <FormLabel htmlFor="store">Store *</FormLabel>

        <FormSelect
          className=""
          name="sendToAll"
          value={sendToAllStores ? "all" : "custom"}
          onChange={(e) => setSendToAllStores(e.target.value === "all")}
        >
          <option value="all">Send to all stores</option>
          <option value="custom">Select custom stores</option>
        </FormSelect>

        {!sendToAllStores && (
          <div className="mt-3">
            <TomSelect
              value={selectMultiple}
              onChange={setSelectMultiple}
              options={{
                placeholder: "Select Store",
              }}
              className="w-full"
              multiple
            >
              {dataAllStores?.data?.map((store, i) => (
                <option value={store.id} key={i}>
                  {store.store_title}
                </option>
              ))}
            </TomSelect>
          </div>
        )}
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="name">Title *</FormLabel>
        <FormInput
          id="title"
          type="text"
          className="w-full"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={onChangeHandler}
          error={error?.title ? error?.title[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="name">Message *</FormLabel>
        <FormTextarea
          id="message"
          className="w-full"
          placeholder="Type your message"
          name="message"
          value={formData.message}
          onChange={onChangeHandler}
          error={error?.message ? error?.message[0] : undefined}
        ></FormTextarea>
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="name">Image Url *</FormLabel>
        <FormInput
          id="imageUrl"
          type="text"
          className="w-full"
          placeholder="Image URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={onChangeHandler}
          error={error?.imageUrl ? error?.imageUrl[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="name">Send At *</FormLabel>
        <FormInput
          id="sendAt"
          type="datetime-local"
          className="w-full"
          placeholder="Bata"
          name="sendAt"
          value={formData.sendAt}
          onChange={onChangeHandler}
          error={error?.sendAt ? error?.sendAt[0] : undefined}
        />
      </div>
      <div className="mt-5 text-right">
        {type === "edit" && (
          <Button
            type="button"
            variant="outline-secondary"
            className="w-24 mr-1"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
        )}
        <Button
          type="button"
          variant="primary"
          className="w-24"
          onClick={submitHandler}
          disabled={isLoading}
        >
          {type === "add" ? "Send" : "Update"}
          {isLoading && (
            <LoadingIcon icon="oval" color="white" className="w-4 h-4 ml-2" />
          )}
        </Button>
      </div>
    </>
  );
};

export default AddOrEditNotification;
