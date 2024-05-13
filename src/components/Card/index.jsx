import clsx from "clsx";
import { useState } from "react";

const index = ({ cards, cardType, setCardType, isLoading }) => {
  const [cardHover, setCardHover] = useState("");

  return (
    <>
      {cards.map((card, i) => (
        <div
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2 intro-y"
          onClick={() => setCardType(card.cardType)}
          key={i}
        >
          <div
            className={clsx([
              "relative zoom-in",
              "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
            ])}
            onMouseEnter={() => setCardHover(card.cardType)}
            onMouseLeave={() => setCardHover("")}
          >
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
