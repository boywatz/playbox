import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import "./SaleOrderTable.css";
import useMockData from "../store/useMockData";

const SaleOrderTable = () => {
  const { products } = useMockData();
  return (
    <>
      <ScrollSync>
        <div
          style={{
            display: "flex",
            position: "relative",
            height: "100%",
          }}
        >
          <ScrollSyncPane group={["vertical-main"]}>
            <div className="table-wrapper">
              <table className="table-style">
                <thead>
                  <tr>
                    <th
                      className="cell-style text-center"
                      colSpan="5"
                      style={{ height: "34px" }}
                    ></th>
                  </tr>
                  <tr>
                    <th className="cell-style">#</th>
                    <th className="cell-style">BT</th>
                    <th className="cell-style">Item Code</th>
                    <th className="cell-style">Item Name</th>
                    <th className="cell-style">Promo</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id}>
                      <td className="cell-style">{index + 1}</td>
                      <td className="cell-style">{product.brandType}</td>
                      <td className="cell-style">{product.itemCode}</td>
                      <td className="cell-style">{product.itemName}</td>
                      <td className="cell-style">{product.promo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollSyncPane>

          <ScrollSyncPane group={["vertical-main"]}>
            <div className="table-wrapper-2">
              <table className="table-style">
                <thead>
                  <tr>
                    <th
                      className="cell-style text-center"
                      style={{ height: "34px" }}
                      colSpan="9"
                    ></th>
                  </tr>
                  <tr>
                    <th className="cell-style">BarCode EA</th>
                    <th className="cell-style">BarCode PK</th>
                    <th className="cell-style">BarCode CS</th>
                    <th className="cell-style">ราคา</th>
                    <th className="cell-style">EA-CS</th>
                    <th className="cell-style">Disc 1</th>
                    <th className="cell-style">TPR</th>
                    <th className="cell-style">Net Price</th>
                    <th className="cell-style">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">245.50</td>
                    <td className="cell-style">12</td>
                    <td className="cell-style">19.25</td>
                    <td className="cell-style">29.16</td>
                    <td className="cell-style">143.23</td>
                    <td className="cell-style">7,519.45</td>
                  </tr>
                  <tr>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">245.50</td>
                    <td className="cell-style">12</td>
                    <td className="cell-style">19.25</td>
                    <td className="cell-style">29.16</td>
                    <td className="cell-style">143.23</td>
                    <td className="cell-style">7,519.45</td>
                  </tr>
                  <tr>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">28.75</td>
                    <td className="cell-style">6</td>
                    <td className="cell-style">0%</td>
                    <td className="cell-style">5</td>
                    <td className="cell-style">23.75</td>
                    <td className="cell-style">142.50</td>
                  </tr>
                  <tr>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">245.50</td>
                    <td className="cell-style">12</td>
                    <td className="cell-style">19.25</td>
                    <td className="cell-style">29.16</td>
                    <td className="cell-style">143.23</td>
                    <td className="cell-style">7,519.45</td>
                  </tr>
                  <tr>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">245.50</td>
                    <td className="cell-style">12</td>
                    <td className="cell-style">19.25</td>
                    <td className="cell-style">29.16</td>
                    <td className="cell-style">143.23</td>
                    <td className="cell-style">7,519.45</td>
                  </tr>
                  <tr>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">8851989035376</td>
                    <td className="cell-style">42.80</td>
                    <td className="cell-style">15</td>
                    <td className="cell-style">12%</td>
                    <td className="cell-style">1</td>
                    <td className="cell-style">37.66</td>
                    <td className="cell-style">564.90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollSyncPane>

          <ScrollSyncPane group={["vertical-main", "vertical-order"]}>
            <div className="table-wrapper-3">
              <table className="table-style">
                <thead>
                  <tr>
                    <th
                      className="cell-style text-center stock-table-header-color"
                      colSpan="2"
                    >
                      สต็อกร้าน
                    </th>
                    <th
                      className="cell-style text-center order-table-header-color"
                      colSpan="2"
                    >
                      จำนวนสั่ง
                    </th>
                  </tr>
                  <tr>
                    <th className="cell-style text-center stock-table-input-1-color">
                      โหล
                    </th>
                    <th className="cell-style text-center stock-table-input-2-color">
                      ชิ้น
                    </th>
                    <th className="cell-style text-center order-table-input-1-color">
                      โหล
                    </th>
                    <th className="cell-style text-center order-table-input-2-color">
                      ชิ้น
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center   order-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollSyncPane>

          <ScrollSyncPane group={["vertical-main", "vertical-sum-order"]}>
            <div className="table-wrapper-3">
              <table className="table-style">
                <thead>
                  <tr>
                    <th
                      className="cell-style text-center stock-table-header-color"
                      colSpan="2"
                    >
                      รวมสต็อกร้าน
                    </th>
                    <th
                      className="cell-style text-center order-table-header-color"
                      colSpan="2"
                    >
                      รวมจำนวนสั่ง
                    </th>
                  </tr>
                  <tr>
                    <th className="cell-style text-center stock-table-input-1-color">
                      โหล
                    </th>
                    <th className="cell-style text-center stock-table-input-2-color">
                      ชิ้น
                    </th>
                    <th className="cell-style text-center order-table-input-1-color">
                      โหล
                    </th>
                    <th className="cell-style text-center order-table-input-2-color">
                      ชิ้น
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <span>--</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <span>--</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <span>--</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <span>--</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center   order-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <span>--</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-style text-center stock-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center stock-table-input-2-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-1-color">
                      <span>--</span>
                    </td>
                    <td className="cell-style text-center order-table-input-2-color">
                      <span>--</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollSyncPane>
        </div>
      </ScrollSync>
    </>
  );
};

export default SaleOrderTable;
