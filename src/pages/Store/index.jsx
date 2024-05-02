import _ from "lodash";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import StoreDashboard from "../../dashboards/StoreDashboard";

import useCard from "../../apis/DashboardTopCards/card";

import StoreList from "../../components/Store/StoreList";
import OrderList from "../../components/Order/OrderList";
import CompanyList from "../../components/Company/CompanyList";
import CustomerList from "../../components/Customer/CustomerList";
import { useParams } from "react-router-dom";

const index = () => {
  const { storeId } = useParams();
  const {
    cardReq,
    data: dataCard,
    isLoading: isLoadingCard,
    reFetch: reFetchCard,
  } = useCard();

  const [cardType, setCardType] = useState("revenue");
  const [revenueCount, setRevenueCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const cardsData = [
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
      setRevenueCount(dataCard?.data?.revenue);
      setOrderCount(dataCard?.data?.orders);
      setCustomerCount(dataCard?.data?.customers);
    }
  }, [dataCard]);

  return (
    <StoreDashboard storeId={storeId}>
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

            {/* START: Revenue Table */}
            {cardType === "revenue" && <OrderList storeId={storeId} />}
            {/* END: Revenue Table */}

            {/* START: Orders Table */}
            {cardType === "order" && <OrderList storeId={storeId} />}
            {/* END: Orders Table */}

            {/* START: Customer Table */}
            {cardType === "customer" && <CustomerList storeId={storeId} />}
            {/* END: Customer Table */}
          </div>
        </div>
      </div>
    </StoreDashboard>
  );
};

export default index;
