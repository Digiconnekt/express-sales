import { useState, useEffect } from "react";
import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddOrEditStore = ({
  type,
  data,
  error,
  isLoading,
  submitReq,
  inputData,
  setModalOpen,
}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    name: "",
    email_id: "",
    store_location: "",
    contact_no: "",
    company_id: user.id || "",
    password: "",
    status: "1",
  });

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        name: inputData?.store_title || "",
        email_id: inputData?.email_id || "",
        store_location: inputData?.store_location || "",
        contact_no: inputData?.contact_no || "",
        company_id: inputData?.company_id || "",
        password: inputData?.password || "",
        status: inputData?.status || "1",
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
      navigate("/company");
    }
  }, [data]);

  return (
    <>
      <div>
        <FormLabel htmlFor="name">Store Name</FormLabel>
        <FormInput
          id="name"
          type="text"
          className="w-full"
          placeholder="Store"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          error={error?.name ? error?.name[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          id="email"
          type="email"
          className="w-full"
          placeholder="store@gmail.com"
          name="email_id"
          value={formData.email_id}
          onChange={onChangeHandler}
          error={error?.email_id ? error?.email_id[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="location">Location</FormLabel>
        <FormInput
          id="location"
          type="text"
          className="w-full"
          placeholder="Mumbai"
          name="store_location"
          value={formData.store_location}
          onChange={onChangeHandler}
          error={error?.store_location ? error?.store_location[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="contact-number">Contact Number</FormLabel>
        <FormInput
          id="contact-number"
          type="text"
          className="w-full"
          placeholder="998562395"
          name="contact_no"
          value={formData.contact_no}
          onChange={onChangeHandler}
          error={error?.contact_no ? error?.contact_no[0] : undefined}
        />
      </div>
      {type === "add" && (
        <div className="mt-3">
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            id="password"
            type="password"
            className="w-full"
            placeholder="*********"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            error={error?.password ? error?.password[0] : undefined}
          />
        </div>
      )}
      <div className="mt-3">
        <label>Active Status</label>
        <FormSelect
          className="mt-2 sm:mr-2"
          name="status"
          value={formData.status}
          onChange={onChangeHandler}
        >
          <option value="1">Active</option>
          <option value="2">Inactive</option>
        </FormSelect>
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
          {type === "add" ? "Create" : "Update"}
          {isLoading && (
            <LoadingIcon icon="oval" color="white" className="w-4 h-4 ml-2" />
          )}
        </Button>
      </div>
    </>
  );
};

export default AddOrEditStore;
