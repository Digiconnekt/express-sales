import { Fragment, useRef, useState, useEffect } from "react";
import { FormInput, FormLabel, FormSwitch } from "../../base-components/Form";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";

const AddOrEditCompany = ({
  type,
  data,
  error,
  isLoading,
  submitReq,
  inputData,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company_email: "",
    contact_email: "",
    gst: "",
    location: "",
    password: "",
    status: "",
  });

  useEffect(() => {
    if (inputData) {
      setFormData((prevData) => ({
        ...prevData,
        name: inputData?.name || "",
        company_email: inputData?.company_email || "",
        contact_email: inputData?.contact_email || "",
        gst: inputData?.gst || "",
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
    console.log("formData", formData);
  };

  return (
    <>
      <div>
        <FormLabel htmlFor="name">Company Name</FormLabel>
        <FormInput
          id="name"
          type="text"
          className="w-full"
          placeholder="Bata"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          error={error?.message?.name ? error?.message?.name[0] : undefined}
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="company-email">Company Email</FormLabel>
        <FormInput
          id="company-email"
          type="email"
          className="w-full"
          placeholder="bata@gmail.com"
          name="company_email"
          value={formData.company_email}
          onChange={onChangeHandler}
          error={
            error?.message?.company_email
              ? error?.message?.company_email[0]
              : undefined
          }
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
          error={
            error?.message?.contact_email
              ? error?.message?.contact_email[0]
              : undefined
          }
        />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="gst">GST Number</FormLabel>
        <FormInput
          id="gst"
          type="text"
          className="w-full"
          placeholder="22AAAAA0000A1Z5"
          name="gst"
          value={formData.gst}
          onChange={onChangeHandler}
          error={error?.message?.gst ? error?.message?.gst[0] : undefined}
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
          error={
            error?.message?.location ? error?.message?.location[0] : undefined
          }
        />
      </div>
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
          error={
            error?.message?.password ? error?.message?.password[0] : undefined
          }
        />
      </div>
      <div className="mt-3">
        <label>Active Status</label>
        <FormSwitch className="mt-2">
          <FormSwitch.Input type="checkbox" />
        </FormSwitch>
      </div>
      <div className="mt-5 text-right">
        {/* <Button
          type="button"
          variant="outline-secondary"
          className="w-24 mr-1"
          onClick={closeModalHandler}
          ref={cancelButtonRef}
        >
          Cancel
        </Button> */}
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
