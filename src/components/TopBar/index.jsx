import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { Menu, Popover } from "../../base-components/Headless";
import fakerData from "../../utils/faker";
import _ from "lodash";
import clsx from "clsx";
import { useNavigate } from "react-router";
import Litepicker from "../../base-components/Litepicker";
import { useState } from "react";
import useLogout from "../../apis/logout/Logout";
import { useSelector } from "react-redux";

import LoadingIcon from "../../base-components/LoadingIcon";

function Main() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const { data, error, isLoading, logoutReq } = useLogout();
  const [salesReportFilter, setSalesReportFilter] = useState();

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="h-[67px] z-[51] flex items-center relative border-b border-slate-200">
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="hidden mr-auto -intro-x sm:flex">
          <Breadcrumb.Link to="/">Application</Breadcrumb.Link>
          <Breadcrumb.Link to="/" active={true}>
            Dashboard
          </Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}

        {/* BEGIN: Calender */}
        <div className="relative text-slate-500 me-5">
          <Lucide
            icon="Calendar"
            className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
          />
          <Litepicker
            value={salesReportFilter}
            onChange={setSalesReportFilter}
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
            className="pl-10 sm:w-56 !box"
          />
        </div>
        {/* END: Calender */}

        {/* BEGIN: Notifications */}
        <Popover className="mr-auto intro-x sm:mr-6">
          <Popover.Button
            className="
              relative text-slate-600 outline-none block
              before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger
            "
          >
            <Lucide icon="Bell" className="w-5 h-5 dark:text-slate-500" />
          </Popover.Button>
          <Popover.Panel className="w-[280px] sm:w-[350px] p-5 mt-2">
            <div className="mb-5 font-medium">Notifications</div>
            {/* {_.take(fakerData, 5).map((faker, fakerKey) => (
              <div
                key={fakerKey}
                className={clsx([
                  "cursor-pointer relative flex items-center",
                  { "mt-5": fakerKey },
                ])}
              >
                <div className="relative flex-none w-12 h-12 mr-1 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="" className="mr-5 font-medium truncate">
                      {faker.users[0].name}
                    </a>
                    <div className="ml-auto text-xs text-slate-400 whitespace-nowrap">
                      {faker.times[0]}
                    </div>
                  </div>
                  <div className="w-full truncate text-slate-500 mt-0.5">
                    {faker.news[0].shortContent}
                  </div>
                </div>
              </div>
            ))} */}
          </Popover.Panel>
        </Popover>
        {/* END: Notifications  */}

        {/* BEGIN: Account Menu */}
        <Menu>
          <Menu.Button className="block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x">
            <img
              alt="Midone Tailwind HTML Admin Template"
              src={fakerData[9].photos[0]}
            />
          </Menu.Button>
          <Menu.Items className="w-56 mt-px text-white bg-primary">
            <Menu.Header className="font-normal">
              <div className="font-medium">{user?.name}</div>
              <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                {user?.role}
              </div>
            </Menu.Header>
            {/* <Menu.Divider className="bg-white/[0.08]" />
            <Menu.Item
              className="hover:bg-white/5"
              onClick={() => navigate("/profile")}
            >
              <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
            </Menu.Item>
            <Menu.Item
              className="hover:bg-white/5"
              onClick={() => navigate("/reset-password")}
            >
              <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
            </Menu.Item> */}
            <Menu.Divider className="bg-white/[0.08]" />
            <Menu.Item className="hover:bg-white/5" onClick={logoutReq}>
              Logout
              {isLoading && (
                <LoadingIcon
                  icon="oval"
                  color="white"
                  className="w-4 h-4 ml-2"
                />
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;