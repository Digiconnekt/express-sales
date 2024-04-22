import useCreateStore from "../../../apis/store/Create";
import AddOrEditStore from "../../../components/Store/AddOrEditStore";
import { OnlyCompany } from "../../../dashboards/CompanyDashboard";

function Main() {
  const { createStoreReq, data, error, isLoading } = useCreateStore();

  return (
    <OnlyCompany>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Create New Store</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y">
          <div className="p-5 intro-y box">
            <AddOrEditStore
              type={"add"}
              isLoading={isLoading}
              data={data}
              error={error}
              submitReq={createStoreReq}
            />
          </div>
        </div>
      </div>
    </OnlyCompany>
  );
}

export default Main;
