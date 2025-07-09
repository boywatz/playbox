import ResponsiveContainer from "../../components/ResponsiveContainer";
import AutoResponsiveContainer from "../../components/AutoResponsiveContainer";
import DevicePreview from "../../components/DevicePreview";

const POSApp = () => {
  return (
    <div className="pos-app">
      <div style={{ marginBottom: "40px" }}>
        <ResponsiveContainer deviceType="tablet-landscape">
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Hi Tablet-lands</h1>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default POSApp;
