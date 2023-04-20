import React from "react";
import {
  Building2,
  Tags,
  Wallet,
  Warehouse,
  BaggageClaim,
  Users,
} from "lucide-react";

const DashboardTopCard = ({ title, value, icon }) => {
  if (icon === "building2") {
    icon = <Building2 className="w-12 h-12 text-primary" />;
  } else if (icon === "tags") {
    icon = <Tags className="w-12 h-12 text-primary" />;
  } else if (icon === "wallet") {
    icon = <Wallet className="w-12 h-12 text-primary" />;
  } else if (icon === "warehouse") {
    icon = <Warehouse className="w-12 h-12 text-primary" />;
  } else if (icon === "baggageClaim") {
    icon = <BaggageClaim className="w-12 h-12 text-primary" />;
  } else if (icon === "users") {
    icon = <Users className="w-12 h-12 text-primary" />;
  }

  return (
    <>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div className="report-box zoom-in">
          <div
            className="flex items-center box p-5"
            style={{ justifyContent: "space-around" }}
          >
            <div>
              <div className="text-base text-slate-500 mt-1">{title}</div>
              <div className="text-3xl font-medium leading-8 mt-6">{value}</div>
            </div>
            <div className="flex">{icon}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTopCard;
