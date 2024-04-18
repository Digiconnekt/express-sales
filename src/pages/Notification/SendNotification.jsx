import useCreateNotification from "../../apis/notification/Create";
import AddOrEditNotification from "../../components/Notification/AddOrEditNotification";

const SendNotification = () => {
  const { createNotificationReq, data, error, isLoading } =
    useCreateNotification();

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Send Notification</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y">
          {/* BEGIN: Form Layout */}
          <div className="p-5 intro-y box">
            <AddOrEditNotification
              type={"add"}
              isLoading={isLoading}
              data={data}
              error={error}
              submitReq={createNotificationReq}
            />
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </>
  );
};

export default SendNotification;
