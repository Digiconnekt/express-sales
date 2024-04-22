import _ from "lodash";
import AdminDashboard from "../../dashboards/AdminDashboard";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

import StoreList from "../../components/Store/StoreList";
import OrderList from "../../components/Order/OrderList";
import RevenueList from "../../components/Revenue/RevenueList";
import CompanyList from "../../components/Company/CompanyList";
import CustomerList from "../../components/Customer/CustomerList";
import useCard from "../../apis/DashboardTopCards/card";

const index = () => {
  const {
    cardReq,
    data: dataCard,
    isLoading: isLoadingCard,
    reFetch: reFetchCard,
  } = useCard();

  const [cardType, setCardType] = useState("company");
  const [companyCount, setCompanyCount] = useState(0);
  const [storeCount, setStoreCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const cardsData = [
    {
      title: "Companies",
      icon: "ShoppingCart",
      cardType: "company",
      count: companyCount,
    },
    {
      title: "Stores",
      icon: "CreditCard",
      cardType: "store",
      count: storeCount,
    },
    {
      title: "Revenue",
      icon: "CreditCard",
      cardType: "revenue",
      count: revenueCount,
    },
    {
      title: "Orders",
      icon: "ShoppingCart",
      cardType: "order",
      count: orderCount,
    },
    {
      title: "Customers",
      icon: "User",
      cardType: "customer",
      count: customerCount,
    },
  ];

  useEffect(() => {
    cardReq();
  }, []);

  useEffect(() => {
    if (dataCard) {
      setCompanyCount(dataCard?.data?.companies);
      setStoreCount(dataCard?.data?.stores);
      setRevenueCount(dataCard?.data?.revenue);
      setOrderCount(dataCard?.data?.orders);
      setCustomerCount(dataCard?.data?.customers);
    }
  }, [dataCard]);

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
                  isLoading={isLoadingCard}
                />
              </div>
            </div>
            {/* END: General Report */}

            {/* BEGIN: Companies Table */}
            {cardType === "company" && (
              <CompanyList reFetchCard={reFetchCard} />
            )}
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
