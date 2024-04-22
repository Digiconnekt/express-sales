import clsx from "clsx";
import Lucide from "../../base-components/Lucide";

const index = ({ cards, cardType, setCardType, isLoading }) => {
  return (
    <>
      {cards.map((card, i) => (
        <div
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 intro-y"
          onClick={() => setCardType(card.cardType)}
          key={i}
        >
          <div
            className={clsx([
              "relative zoom-in",
              "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
            ])}
          >
            <div
              className={`p-5 box ${
                cardType === card.cardType
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
            >
              <div className="flex">
                <Lucide icon={card.icon} className="w-[28px] h-[28px]" />
              </div>
              <div className="mt-6 text-3xl font-medium leading-8">
                {isLoading ? (
                  <span className="text-xs">loading...</span>
                ) : card.cardType === "revenue" ? (
                  `₹ ${card.count || 0}`
                ) : (
                  card.count || 0
                )}{" "}
              </div>
              <div className="mt-1 text-base">{card.title}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
