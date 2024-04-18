import _ from "lodash";
import AdminDashboard from "../../dashboards/AdminDashboard";
import { useState } from "react";
import Card from "../../components/Card";

import StoreList from "../../components/Store/StoreList";
import OrderList from "../../components/Order/OrderList";
import RevenueList from "../../components/Revenue/RevenueList";
import CompanyList from "../../components/Company/CompanyList";
import CustomerList from "../../components/Customer/CustomerList";

const index = () => {
  const cardsData = [
    {
      title: "Companies",
      icon: "ShoppingCart",
      cardType: "company",
    },
    {
      title: "Stores",
      icon: "CreditCard",
      cardType: "store",
    },
    {
      title: "Revenue",
      icon: "CreditCard",
      cardType: "revenue",
    },
    {
      title: "Orders",
      icon: "ShoppingCart",
      cardType: "order",
    },
    {
      title: "Customers",
      icon: "User",
      cardType: "customer",
    },
  ];
  const [cardType, setCardType] = useState("company");

  return (
    <AdminDashboard>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: General Report */}
            <div className="col-span-12 mt-8">
              <div className="grid grid-cols-12 gap-6 mt-5">
                <Card
                  cards={cardsData}
                  cardType={cardType}
                  setCardType={setCardType}
                />
              </div>
            </div>
            {/* END: General Report */}

            {/* BEGIN: Companies Table */}
            {cardType === "company" && <CompanyList />}
            {/* END: Companies Table */}

            {/* START: Stores Table */}
            {cardType === "store" && <StoreList />}
            {/* END: Stores Table */}

            {/* START: Revenue Table */}
            {cardType === "revenue" && <RevenueList />}
            {/* END: Revenue Table */}

            {/* START: Orders Table */}
            {cardType === "order" && <OrderList />}
            {/* END: Orders Table */}

            {/* START: Customer Table */}
            {cardType === "customer" && <CustomerList />}
            {/* END: Customer Table */}
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default index;
