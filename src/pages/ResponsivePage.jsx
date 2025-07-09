import ResponsiveContainer from "../components/ResponsiveContainer";
import AutoResponsiveContainer from "../components/AutoResponsiveContainer";
import DevicePreview from "../components/DevicePreview";

const ResponsivePage = () => {
  return (
    <div className="responsive-page" style={{ padding: "20px" }}>
      <h1>📱 Responsive Components</h1>
      <p>Components ที่ปรับตัวตามขนาดอุปกรณ์</p>

      {/* Fixed Size Containers */}
      <section style={{ marginBottom: "40px" }}>
        <h2>📐 Fixed Size Containers</h2>
        <p>กำหนดขนาดอุปกรณ์ผ่าน props</p>

        <div style={{ marginBottom: "20px" }}>
          <h3>📱 Mobile Container</h3>
          <ResponsiveContainer deviceType="mobile">
            <div style={{ textAlign: "center", padding: "10px" }}>
              <h4>📱 Mobile View</h4>
              <p>เนื้อหาสำหรับมือถือ</p>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Mobile Button
              </button>
            </div>
          </ResponsiveContainer>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>📱 Tablet Container</h3>
          <ResponsiveContainer deviceType="tablet">
            <div style={{ textAlign: "center", padding: "15px" }}>
              <h4>📱 Tablet View</h4>
              <p>เนื้อหาสำหรับแท็บเล็ต</p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    padding: "8px 16px",
                    background: "#f59e0b",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Button 1
                </button>
                <button
                  style={{
                    padding: "8px 16px",
                    background: "#f59e0b",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Button 2
                </button>
              </div>
            </div>
          </ResponsiveContainer>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>🖥️ Desktop Container</h3>
          <ResponsiveContainer deviceType="desktop">
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4>🖥️ Desktop View</h4>
              <p>เนื้อหาสำหรับเดสก์ท็อป</p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                  marginTop: "15px",
                }}
              >
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    style={{
                      padding: "12px",
                      background: "#10b981",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Desktop {num}
                  </button>
                ))}
              </div>
            </div>
          </ResponsiveContainer>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>📱 Tablet Landscape Container</h3>
          <ResponsiveContainer deviceType="tablet-landscape">
            <div style={{ padding: "20px" }}>
              <h4>📱 Tablet Landscape View</h4>
              <p>เนื้อหาสำหรับแท็บเล็ตแนวนอน - เหมาะสำหรับ POS, Dashboard</p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "15px",
                  marginTop: "15px",
                }}
              >
                {[
                  {
                    icon: "💰",
                    title: "Sales",
                    value: "$2,450",
                    color: "#10b981",
                  },
                  {
                    icon: "🛍️",
                    title: "Orders",
                    value: "89",
                    color: "#3b82f6",
                  },
                  {
                    icon: "👥",
                    title: "Customers",
                    value: "34",
                    color: "#f59e0b",
                  },
                  {
                    icon: "📊",
                    title: "Analytics",
                    value: "95%",
                    color: "#8b5cf6",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "20px",
                      background: "white",
                      border: `2px solid ${item.color}`,
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                      {item.icon}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: item.color,
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "20px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <h5 style={{ marginTop: 0 }}>📈 Recent Transactions</h5>
                  <div style={{ fontSize: "14px", color: "#6b7280" }}>
                    Perfect layout for landscape orientation
                  </div>
                </div>

                <div
                  style={{
                    background: "#f0fdf4",
                    padding: "20px",
                    borderRadius: "8px",
                    border: "1px solid #10b981",
                  }}
                >
                  <h5 style={{ marginTop: 0, color: "#10b981" }}>
                    Quick Actions
                  </h5>
                  <button
                    style={{
                      width: "100%",
                      padding: "8px",
                      background: "#10b981",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    New Sale
                  </button>
                  <button
                    style={{
                      width: "100%",
                      padding: "8px",
                      background: "#8b5cf6",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Reports
                  </button>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Auto Responsive Container */}
      <section style={{ marginBottom: "40px" }}>
        <h2>🔄 Auto-Responsive Container</h2>
        <p>Container นี้จะปรับขนาดอัตโนมัติตามขนาดหน้าจอของคุณ</p>

        <AutoResponsiveContainer>
          <div style={{ textAlign: "center" }}>
            <h3>🎨 Sample Content</h3>
            <p>เนื้อหานี้จะแสดงในรูปแบบที่เหมาะสมกับอุปกรณ์ของคุณ</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  style={{
                    padding: "20px",
                    background: `hsl(${num * 90}, 70%, 95%)`,
                    border: `2px solid hsl(${num * 90}, 70%, 70%)`,
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    {["🎯", "🚀", "💡", "⭐"][num - 1]}
                  </div>
                  <h4>Feature {num}</h4>
                  <p style={{ fontSize: "14px", margin: 0 }}>
                    Description for feature {num}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AutoResponsiveContainer>
      </section>

      {/* Device Preview Container */}
      <section>
        <h2>🔍 Device Preview Container</h2>
        <p>ใช้ปุ่มด้านบนเพื่อเลือกดูหน้าตาในอุปกรณ์ต่างๆ</p>

        <DevicePreview>
          <div style={{ padding: "20px", minHeight: "500px" }}>
            <header
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <h2 style={{ margin: 0, marginBottom: "10px" }}>📱 Mobile App</h2>
              <p style={{ margin: 0, opacity: 0.9 }}>
                Beautiful responsive design
              </p>
            </header>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                gap: "15px",
                marginBottom: "20px",
              }}
            >
              {[
                { icon: "🏠", title: "Home", color: "#3b82f6" },
                { icon: "👤", title: "Profile", color: "#10b981" },
                { icon: "⚙️", title: "Settings", color: "#f59e0b" },
                { icon: "📊", title: "Analytics", color: "#ef4444" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    background: "white",
                    border: `2px solid ${item.color}`,
                    borderRadius: "12px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                    {item.icon}
                  </div>
                  <div style={{ fontWeight: "bold", color: item.color }}>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 style={{ marginTop: 0 }}>📝 Recent Activity</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  "User logged in successfully",
                  "New message received",
                  "Settings updated",
                  "Data synchronized",
                ].map((activity, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "10px 0",
                      borderBottom: index < 3 ? "1px solid #e2e8f0" : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ color: "#10b981" }}>✓</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <button
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </DevicePreview>
      </section>
    </div>
  );
};

export default ResponsivePage;
