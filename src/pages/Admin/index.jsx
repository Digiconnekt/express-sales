import _ from "lodash";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import AdminDashboard from "../../dashboards/AdminDashboard";

import useCard from "../../apis/DashboardTopCards/card";

import StoreList from "../../components/Store/StoreList";
import OrderList from "../../components/Order/OrderList";
import CompanyList from "../../components/Company/CompanyList";
import CustomerList from "../../components/Customer/CustomerList";

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
      icon: {
        black: "../../../images/company-icon-b.png",
        white: "../../../images/company-icon-w.png",
      },
      cardType: "company",
      count: companyCount,
    },
    {
      title: "Stores",
      icon: {
        black: "../../../images/store-icon-b.png",
        white: "../../../images/store-icon-w.png",
      },
      cardType: "store",
      count: storeCount,
    },
    {
      title: "Revenue",
      icon: {
        black: "../../../images/revenue-icon-b.png",
        white: "../../../images/revenue-icon-w.png",
      },
      cardType: "revenue",
      count: revenueCount,
    },
    {
      title: "Orders",
      icon: {
        black: "../../../images/order-icon-b.png",
        white: "../../../images/order-icon-w.png",
      },
      cardType: "order",
      count: orderCount,
    },
    {
      title: "Customers",
      icon: {
        black: "../../../images/customer-icon-b.png",
        white: "../../../images/customer-icon-w.png",
      },
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
            {cardType === "revenue" && <OrderList />}
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
