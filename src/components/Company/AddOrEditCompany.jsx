import { useState, useEffect } from "react";
import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useNavigate } from "react-router-dom";

const AddOrEditCompany = ({
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
    company_name: "",
    company_email: "",
    contact_email: "",
    contact_number: "",
    gst_number: "",
    location: "",
    password: "",
    status: "1",
  });

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        name: inputData?.name || "",
        company_name: inputData?.company_name || "",
        company_email: inputData?.company_email || "",
        contact_email: inputData?.contact_email || "",
        contact_number: inputData?.contact_number || "",
        gst_number: inputData?.gst_number || "",
        location: inputData?.location || "",
        password: inputData?.password || "",
        status: inputData?.status || "",
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
          placeholder="John"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          error={error?.name ? error?.name[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="company_name">Company Name *</FormLabel>
        <FormInput
          id="company_name"
          type="text"
          className="w-full"
          placeholder="Bata"
          name="company_name"
          value={formData.company_name}
          onChange={onChangeHandler}
          error={error?.company_name ? error?.company_name[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="company-email">Company Email *</FormLabel>
        <FormInput
          id="company-email"
          type="email"
          className="w-full"
          placeholder="bata@gmail.com"
          name="company_email"
          value={formData.company_email}
          onChange={onChangeHandler}
          error={error?.company_email ? error?.company_email[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="contact-email">Contact Email</FormLabel>
        <FormInput
          id="contact-email"
          type="email"
          className="w-full"
          placeholder="contact@gmail.com"
          name="contact_email"
          value={formData.contact_email}
          onChange={onChangeHandler}
          error={error?.contact_email ? error?.contact_email[0] : undefined}
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
      <div className="mt-3">
        <FormLabel htmlFor="gst_number">GST Number</FormLabel>
        <FormInput
          id="gst_number"
          type="text"
          className="w-full"
          placeholder="22AAAAA0000A1Z5"
          name="gst_number"
          value={formData.gst_number}
          onChange={onChangeHandler}
          error={error?.gst_number ? error?.gst_number[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="location">Location</FormLabel>
        <FormInput
          id="location"
          type="text"
          className="w-full"
          placeholder="Mumbai"
          name="location"
          value={formData.location}
          onChange={onChangeHandler}
          error={error?.location ? error?.location[0] : undefined}
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
        <label>Active Status *</label>
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

export default AddOrEditCompany;
