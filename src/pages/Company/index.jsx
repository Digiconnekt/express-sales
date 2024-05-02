import _ from "lodash";
import CompanyDashboard from "../../dashboards/CompanyDashboard";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

import StoreList from "../../components/Store/StoreList";
import OrderList from "../../components/Order/OrderList";
import CustomerList from "../../components/Customer/CustomerList";
import useCard from "../../apis/DashboardTopCards/card";
import { useParams } from "react-router-dom";

const index = () => {
  const { companyId } = useParams();
  const {
    cardReq,
    data: dataCard,
    isLoading: isLoadingCard,
    reFetch: reFetchCard,
  } = useCard();

  const [cardType, setCardType] = useState("store");
  const [storeCount, setStoreCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const cardsData = [
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
      setStoreCount(dataCard?.data?.stores);
      setRevenueCount(dataCard?.data?.revenue);
      setOrderCount(dataCard?.data?.orders);
      setCustomerCount(dataCard?.data?.customers);
    }
  }, [dataCard]);

  return (
    <CompanyDashboard companyId={companyId}>
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

            {/* START: Stores Table */}
            {cardType === "store" && (
              <StoreList reFetchCard={reFetchCard} companyId={companyId} />
            )}
            {/* END: Stores Table */}

            {/* START: Revenue Table */}
            {cardType === "revenue" && <OrderList companyId={companyId} />}
            {/* END: Revenue Table */}

            {/* START: Orders Table */}
            {cardType === "order" && <OrderList companyId={companyId} />}
            {/* END: Orders Table */}

            {/* START: Customer Table */}
            {cardType === "customer" && <CustomerList companyId={companyId} />}
            {/* END: Customer Table */}
          </div>
        </div>
      </div>
    </CompanyDashboard>
  );
};

export default index;
