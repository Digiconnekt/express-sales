import { useState, useEffect } from "react";
import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useNavigate } from "react-router-dom";

const AddOrEditEmployee = ({
  type,
  data,
  error,
  isLoading,
  submitReq,
  inputData,
  setModalOpen,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    password: "",
    role: "employee",
  });

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        name: inputData?.name || "",
        email: inputData?.email || "",
        contact_number: inputData?.contact_number || "",
        password: inputData?.password || "",
        role: inputData?.role || "",
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
        <FormLabel htmlFor="name">Name *</FormLabel>
        <FormInput
          id="name"
          type="text"
          className="w-full"
          placeholder="Bata"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          error={error?.name ? error?.name[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="company-email">Email *</FormLabel>
        <FormInput
          id="email"
          type="email"
          className="w-full"
          placeholder="employee@gmail.com"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          error={error?.email ? error?.email[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="contact-number">Contact Number *</FormLabel>
        <FormInput
          id="contact-number"
          type="text"
          className="w-full"
          placeholder="998562395"
          name="contact_number"
          value={formData.contact_number}
          onChange={onChangeHandler}
          error={error?.contact_number ? error?.contact_number[0] : undefined}
        />
      </div>
      {type === "add" && (
        <div className="mt-3">
          <FormLabel htmlFor="password">Password *</FormLabel>
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
        <label>Role *</label>
        <FormSelect
          className="mt-2 sm:mr-2"
          name="role"
          value={formData.role}
          onChange={onChangeHandler}
        >
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
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

export default AddOrEditEmployee;
