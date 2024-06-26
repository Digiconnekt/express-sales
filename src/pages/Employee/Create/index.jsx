import useCreateCompany from "../../../apis/company/Create";
import AddOrEditEmployee from "../../../components/Employee/AddOrEditEmployee";

function Main() {
  const { createCompanyReq, data, error, isLoading } = useCreateCompany();

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Create New Employee</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y">
          {/* BEGIN: Form Layout */}
          <div className="p-5 intro-y box">
            <AddOrEditEmployee
              type={"add"}
              isLoading={isLoading}
              data={data}
              error={error}
              // submitReq={createCompanyReq}
            />
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </>
  );
}

export default Main;
