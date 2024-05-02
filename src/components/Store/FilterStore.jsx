import moment from "moment";
import { useEffect, useState } from "react";
import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { FormInput } from "../../base-components/Form";
import Litepicker from "../../base-components/Litepicker";
import { useSelector } from "react-redux";

const FilterStore = ({ reFetchAllStores, companyId }) => {
  const user = useSelector((state) => state.auth.user);

  const [dateFilter, setDateFilter] = useState();
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [filterData, setFilterData] = useState({
    name: "",
    company_id: "",
    email: "",
    location: "",
  });

  const onChangeFilterHandler = (e) => {
    const { name, value } = e.target;
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (dateFilter) {
      const [start, end] = dateFilter.split(" - ");

      const startDate = moment(start, "DD MMM, YYYY");
      const endDate = moment(end, "DD MMM, YYYY");
      const formattedStartDate = startDate.format("YYYY-MM-DD");
      const formattedEndDate = endDate.format("YYYY-MM-DD");

      setStartDateFilter(formattedStartDate);
      setEndDateFilter(formattedEndDate);
    }
  }, [dateFilter]);

  const filterHandler = () => {
    reFetchAllStores(
      `name=${filterData.name}&company_id=${
        companyId ? companyId : filterData.company_id
      }&location=${filterData.location}&email=${
        filterData.email
      }&start_date=${startDateFilter}&end_date=${endDateFilter}`
    );
  };

  const resetFilterHandler = () => {
    reFetchAllStores();
    setFilterData({
      name: "",
      company_id: "",
      email: "",
      location: "",
    });
    setDateFilter();
  };

  return (
    <>
      <div className="bg-white mt-5 p-3 rounded-md">
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <FormInput
              id="store-name"
              type="text"
              placeholder="Store Name"
              name="name"
              value={filterData.name}
              onChange={onChangeFilterHandler}
            />
          </div>
          {!companyId && user.role !== "company-manager" && (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <FormInput
                id="company-id"
                type="text"
                placeholder="Company Id"
                name="company_id"
                value={filterData.company_id}
                onChange={onChangeFilterHandler}
              />
            </div>
          )}
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <FormInput
              id="email"
              type="email"
              placeholder="Store Email"
              name="email"
              value={filterData.email}
              onChange={onChangeFilterHandler}
            />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <FormInput
              id="location"
              type="text"
              placeholder="Location"
              name="location"
              value={filterData.location}
              onChange={onChangeFilterHandler}
            />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <div className="relative text-slate-500">
              <Lucide
                icon="Calendar"
                className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
              />
              <Litepicker
                value={dateFilter}
                onChange={setDateFilter}
                options={{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }}
                className="pl-10 !box"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <Button
              id="tabulator-html-filter-go"
              variant="primary"
              type="button"
              className="w-full "
              onClick={filterHandler}
            >
              Filter
            </Button>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <Button
              id="tabulator-html-filter-reset"
              variant="secondary"
              type="button"
              className="w-full"
              onClick={resetFilterHandler}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterStore;
