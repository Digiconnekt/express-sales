import React from "react";

const AddCompany = () => {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Add a Company</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          <div className="intro-y box">
            <div id="form-validation" className="p-5">
              <div className="preview">
                <form className="validate-form">
                  <div className="input-form">
                    <label
                      for="validation-form-1"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Company Name
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required, at least 2 characters
                      </span>
                    </label>
                    <input
                      id="validation-form-1"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Buildnetic"
                      minlength="2"
                      required
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      htmlFor="validation-form-2"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Email
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required, email address format
                      </span>
                    </label>
                    <input
                      id="validation-form-2"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      for="validation-form-2"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Contact Number
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required
                      </span>
                    </label>
                    <input
                      id="validation-form-2"
                      type="text"
                      name="mobile"
                      className="form-control"
                      placeholder="83669485226"
                      required
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      for="validation-form-1"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      GST Number
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required
                      </span>
                    </label>
                    <input
                      id="validation-form-1"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="829257267556"
                      required
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      for="validation-form-6"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Location
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required
                      </span>
                    </label>
                    <textarea
                      id="validation-form-6"
                      className="form-control"
                      name="location"
                      placeholder="Location"
                      minlength="10"
                      required
                    ></textarea>
                  </div>
                  <div className="input-form mt-3">
                    <label>Status</label>
                    <div class="flex flex-col sm:flex-row mt-2">
                      <div class="form-check mr-2">
                        <input
                          id="radio-switch-4"
                          class="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <label class="form-check-label" for="radio-switch-4">
                          Active
                        </label>
                      </div>
                      <div class="form-check mr-2 mt-2 sm:mt-0">
                        <input
                          id="radio-switch-5"
                          class="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <label class="form-check-label" for="radio-switch-5">
                          Deactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-5">
                    Add Company
                  </button>
                </form>
                <div
                  id="success-notification-content"
                  className="toastify-content hidden flex"
                >
                  <i className="text-success" data-lucide="check-circle"></i>
                  <div className="ml-4 mr-4">
                    <div className="font-medium">Registration success!</div>
                    <div className="text-slate-500 mt-1">
                      Please check your e-mail for further info!
                    </div>
                  </div>
                </div>
                <div
                  id="failed-notification-content"
                  className="toastify-content hidden flex"
                >
                  <i className="text-danger" data-lucide="x-circle"></i>
                  <div className="ml-4 mr-4">
                    <div className="font-medium">Registration failed!</div>
                    <div className="text-slate-500 mt-1">
                      Please check the fileld form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCompany;
