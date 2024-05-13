import clsx from "clsx";
import { useState } from "react";

const index = ({ cards, cardType, setCardType, isLoading }) => {
  const [cardHover, setCardHover] = useState("");

  return (
    <>
      {cards.map((card, i) => (
        <div
          key={i}
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2 intro-y"
          onClick={() => setCardType(card.cardType)}
          onMouseEnter={() => setCardHover(card.cardType)}
          onMouseLeave={() => setCardHover("")}
        >
          <div className={clsx(["relative zoom-in"])}>
            <div
              className={`p-5 box ${
                cardType === card.cardType
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-3xl font-medium leading-8">
                  {isLoading ? (
                    <span className="text-xs">loading...</span>
                  ) : card.cardType === "revenue" ? (
                    `₹ ${card.count || 0}`
                  ) : (
                    card.count || 0
                  )}{" "}
                  <div className="mt-1 text-base">{card.title}</div>
                </div>
                <div className="flex">
                  <img
                    src={
                      cardType === card.cardType || cardHover === card.cardType
                        ? card.icon.white
                        : card.icon.black
                    }
                    alt={card.title}
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
