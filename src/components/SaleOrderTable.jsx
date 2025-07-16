import { useState } from "react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import "./SaleOrderTable.css";
import useMockData from "../store/useMockData";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Grid, MenuItem, Select, Stack } from "@mui/material";

const SaleOrderTable = () => {
  const { products } = useMockData();
  const [selectSoldTo, setSelectSoldTo] = useState("customer1");
  const [selectShipTo, setSelectShipTo] = useState("customer1");

  return (
    <>
      <div
        style={{
          height: "280px",
        }}
      ></div>
      <ScrollSync>
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                width: "632.45px",
                height: "280px",
                top: "-280px",
                left: "0",
              }}
            >
              <div className="header-text">
                <span>1. กรอกรายการสินค้า</span>
              </div>

              <Grid whiteSpace={2} container>
                <Grid
                  size={12}
                  alignItems={"center"}
                  paddingBottom={1}
                  borderBottom={{
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    style={{ marginTop: "10px", width: "100%" }}
                  >
                    <OutlinedInput
                      style={{
                        width: "300px",
                        height: "36.5px",
                      }}
                      placeholder='ค้นหาจาก "Item Name" / "Barcode"'
                      startAdornment={<SearchIcon />}
                    ></OutlinedInput>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      paddingX={2}
                    >
                      <span style={{ fontSize: "10px" }}>เรียกจาก</span>
                      <Button variant="outlined" className="input-order-btn">
                        สินค้าที่ไม่เคยซื้อ
                      </Button>
                      <Button variant="outlined" className="input-order-btn">
                        เรียงตามกลุ่ม
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>

              <p className="semi-label-bold" style={{ marginLeft: "12px" }}>
                เลือกสินค้าจาก Brand Type
              </p>

              <Stack
                direction={"row"}
                spacing={0.5}
                justifyContent={"space-between"}
                alignItems={"start"}
                margin={"12px"}
              >
                <Grid container width={"500px"} gap={0.2}>
                  <Grid size={1}>
                    <button className="button-brand-type">FLS</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">FLX</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">FLD</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">FLF</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">FLC</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">FLI</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">DNC</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">DNJ</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">DNF</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">DNN</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">DNS</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">DNT</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">DNM</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">DNK</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">BEB</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">BEW</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">BEA</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">BES</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">BEC</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TSC</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TSD</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TSE</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TSG</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TSL</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TST</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">SMD</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">SMF</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">SMW</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">ESC</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">ESD</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">EST</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">VVE</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">VVR</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TMB</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TMF</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">TMS</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">LTT</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">LTO</button>
                  </Grid>
                  <Grid size={1}>
                    <button className="button-brand-type">LTS</button>
                  </Grid>
                </Grid>

                <Grid
                  container
                  maxWidth={"250px"}
                  padding={1.5}
                  border={"1.5px solid #757D87"}
                  borderRadius={"6px"}
                >
                  <Stack direction={"column"} spacing={0.15}>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "900",
                      }}
                    >
                      คำนวณชิ้น EA/โหล DZ/ลัง CS
                    </p>
                    <input
                      type="text"
                      className="unit-convert-input"
                      placeholder="0"
                    />
                    <span
                      style={{
                        textAlign: "center",
                        height: "15px",
                        fontSize: "12px",
                        margin: 0,
                      }}
                    >
                      =
                    </span>
                    <input
                      type="text"
                      className="unit-convert-input"
                      placeholder="0"
                    />
                  </Stack>
                </Grid>
              </Stack>
            </div>
          </div>
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

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                width: "279.13px",
                height: "280px",
                top: "-280px",
                left: "0",
                borderLeft: "3px solid #0150a0",
                borderRight: "3px solid #0150a0",
              }}
            >
              <div className="header-text">
                <span>2. กรอกจำนวนการสั่งซื้อ</span>
              </div>

              <Grid whiteSpace={2} container>
                <Grid
                  size={12}
                  alignItems={"center"}
                  paddingBottom={1}
                  borderBottom={{
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"flex-end"}
                    spacing={2}
                    paddingX={2}
                    style={{ marginTop: "14px", width: "100%" }}
                  >
                    <span
                      style={{ fontSize: "10px" }}
                      className="semi-label-bold"
                    >
                      เพิ่ม Sold To/ Ship To
                    </span>
                    <Button variant="outlined" className="input-order-btn">
                      + เพิ่ม
                    </Button>
                  </Stack>
                </Grid>
              </Grid>

              <Grid container>
                <Grid size={12} paddingX={1}>
                  <p className="semi-label-bold" style={{ marginLeft: "12px" }}>
                    #1
                  </p>
                </Grid>
                <Grid size={12} paddingX={0.5}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <p className="outline-label">Sold To</p>
                    <Select
                      className="outline-input"
                      value={selectSoldTo}
                      label="Sold To"
                      onChange={(e) => setSelectSoldTo(e.target.value)}
                    >
                      <MenuItem value={"customer1"}>
                        บริษัท แจ่มฟ้า เซฟมาร์ท จำกัด
                      </MenuItem>
                    </Select>
                  </Stack>
                </Grid>
                <Grid size={12} paddingX={0.5} paddingTop={1}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <p className="outline-label">Ship To</p>
                    <Select
                      className="outline-input"
                      value={selectShipTo}
                      label="Ship To"
                      onChange={(e) => setSelectShipTo(e.target.value)}
                    >
                      <MenuItem value={"customer1"}>
                        บริษัท แจ่มฟ้า เซฟมาร์ท จำกัด
                      </MenuItem>
                    </Select>
                  </Stack>
                </Grid>
                <Grid size={12} paddingX={0.5} paddingTop={1}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <p className="outline-label">วันนัดส่ง</p>
                    <OutlinedInput
                      className="outline-input"
                      placeholder="เลือกวันนัดส่ง"
                      style={{ width: "220px", height: "32px" }}
                      type="date"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </div>
          </div>
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

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                width: "514.61px",
                height: "280px",
                top: "-280px",
                left: "0",
              }}
            >
              <div className="header-text">
                <span>3. รวมทั้งหมด</span>
              </div>

              <div style={{ width: "100%", height: "100%" }}>
                <Stack
                  direction={"column"}
                  spacing={2}
                  paddingY={5}
                  height={"100%"}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <p
                      className="outline-label"
                      style={{ paddingRight: "200px" }}
                    >
                      ราคารวม
                    </p>
                    <OutlinedInput
                      className="outline-input"
                      value={"4,500.00"}
                    />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <p
                      className="outline-label"
                      style={{ paddingRight: "200px" }}
                    >
                      ราคาสุทธิ
                    </p>
                    <OutlinedInput
                      className="outline-input"
                      value={"4,500.00"}
                    />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <p
                      className="outline-label"
                      style={{ paddingRight: "180px" }}
                    >
                      วงเงินคงเหลือ
                    </p>
                    <OutlinedInput
                      className="outline-input"
                      value={"4,500.00"}
                    />
                  </Stack>
                </Stack>
              </div>
            </div>
          </div>
          <ScrollSyncPane group={["vertical-main", "vertical-sum-order"]}>
            <div className="table-wrapper-4">
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
                    <th
                      className="cell-style text-center summary-table-header-color"
                      colSpan="3"
                    >
                      ส่วนลด
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
                    <th className="cell-style text-center summary-table-input-1-color">
                      Step Volume
                    </th>
                    <th className="cell-style text-center summary-table-input-1-color">
                      คูปอง
                    </th>
                    <th className="cell-style text-center summary-table-input-1-color">
                      ลดได้จำนวน (฿)
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
                    {/* Added new columns for summary table */}
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
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
                    {/* Added new columns for summary table */}
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
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
                    {/* Added new columns for summary table */}
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
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
                    {/* Added new columns for summary table */}
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
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
                    {/* Added new columns for summary table */}
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
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
                    {/* Added new columns for summary table */}
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
                      <input
                        type="text"
                        className="qty-input"
                        placeholder="--"
                      />
                    </td>
                    <td className="cell-style text-center">
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
