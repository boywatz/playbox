import { Box, Grid, Stack } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import SaleOrderTable from "../../components/SaleOrderTable";
import "./SalePlanOrder.css";
import useMockData from "../../store/useMockData";
import { useEffect } from "react";

const SalePlanOrder = () => {
  const {
    customers,
    products,
    selectedCustomer,
    fetchCustomers,
    fetchProducts,
    setSelectedCustomer,
  } = useMockData();

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchCustomers(), fetchProducts()]);
    };

    fetchData();
  }, []);

  // Set default customer when customers are loaded
  useEffect(() => {
    if (customers.length > 0 && !selectedCustomer) {
      setSelectedCustomer(customers[0]);
    }
  }, [customers, selectedCustomer, setSelectedCustomer]);

  useEffect(() => {
    console.log("Customers fetched:", customers);
    console.log("Products fetched:", products);
    console.log("Selected customer:", selectedCustomer);
  }, [customers, products, selectedCustomer]);

  return (
    <div className="sale-plan-order">
      <div style={{ marginBottom: "40px" }}>
        <ResponsiveContainer deviceType="desktop">
          <Box
            sx={{
              flexGrow: 1,
              margin: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid size={1.5} maxHeight={"50px"} margin={0}>
                <span className="title-header">ข้อมูลลูกค้า/ร้าน</span>
              </Grid>
              <Grid size={4.5}>
                <Stack direction={"row"} spacing={2} alignItems="center">
                  <OutlinedInput
                    sx={{
                      width: "100%",
                      height: "36.5px",
                    }}
                    placeholder="ค้นหาร้านค้าจาก “รหัสลูกค้า/ร้าน” หรือ “ชื่อลูกค้า/ร้าน”"
                    startAdornment={<SearchIcon />}
                  ></OutlinedInput>
                  <Button variant="contained" xs={{ height: "32px" }} disabled>
                    ค้นหา
                  </Button>
                </Stack>
              </Grid>
              <Grid size={5.5}>
                {/* <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <FormControl
                    variant="outlined"
                    size="small"
                    sx={{ minWidth: 200 }}
                  >
                    <InputLabel>เลือกลูกค้า</InputLabel>
                    <Select
                      value={selectedCustomer?.customerId || ""}
                      onChange={(e) => {
                        const customer = customers.find(
                          (c) => c.customerId === e.target.value
                        );
                        if (customer) setSelectedCustomer(customer);
                      }}
                      label="เลือกลูกค้า"
                      sx={{ height: "36.5px" }}
                    >
                      {customers.map((customer) => (
                        <MenuItem
                          key={customer.customerId}
                          value={customer.customerId}
                        >
                          {customer.customerId} - {customer.customerName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack> */}
              </Grid>

              {/* Line 2 */}
              <Grid size={1.5}>
                <Stack direction={"column"} spacing={1}>
                  <span className="label-bold">รหัสลูกค้า/ร้าน</span>
                  <OutlinedInput
                    className="disabled-input"
                    sx={{
                      width: "100%",
                      height: "32px",
                    }}
                    placeholder="--"
                    value={selectedCustomer?.customerId || ""}
                    disabled
                  ></OutlinedInput>
                </Stack>
              </Grid>
              <Grid size={4.5}>
                <Stack direction={"column"} spacing={1}>
                  <span className="label-bold">ชื่อลูกค้า/ร้าน</span>
                  <OutlinedInput
                    className="disabled-input"
                    sx={{
                      width: "100%",
                      height: "32px",
                    }}
                    placeholder="--"
                    value={selectedCustomer?.customerName || ""}
                    disabled
                  ></OutlinedInput>
                </Stack>
              </Grid>
              <Grid size={1.2}>
                <Stack direction={"column"} spacing={1}>
                  <span className="label-bold">ภาค</span>
                  <OutlinedInput
                    className="disabled-input"
                    sx={{
                      width: "100%",
                      height: "32px",
                    }}
                    placeholder="--"
                    value={selectedCustomer?.customerRegion || ""}
                    disabled
                  ></OutlinedInput>
                </Stack>
              </Grid>
              <Grid size={1.2}>
                <Stack direction={"column"} spacing={1}>
                  <span className="label-bold">เขต</span>
                  <OutlinedInput
                    className="disabled-input"
                    sx={{
                      width: "100%",
                      height: "32px",
                    }}
                    placeholder="--"
                    value={selectedCustomer?.customerDistrict || ""}
                    disabled
                  ></OutlinedInput>
                </Stack>
              </Grid>
              <Grid size={1.2}>
                <Stack direction={"column"} spacing={1}>
                  <span className="label-bold">จังหวัด</span>
                  <OutlinedInput
                    className="disabled-input"
                    sx={{
                      width: "100%",
                      height: "32px",
                    }}
                    placeholder="--"
                    value={selectedCustomer?.customerProvince || ""}
                    disabled
                  ></OutlinedInput>
                </Stack>
              </Grid>
              <Grid size={1.2}>
                <Stack direction={"column"} spacing={1}>
                  <span className="label-bold">ประเภท</span>
                  <OutlinedInput
                    className="disabled-input"
                    sx={{
                      width: "100%",
                      height: "32px",
                    }}
                    placeholder="--"
                    value={selectedCustomer?.customerType || ""}
                    disabled
                  ></OutlinedInput>
                </Stack>
              </Grid>
              <Grid size={1.2}>
                <Stack direction={"column"} spacing={1}>
                  <span className="label-bold">วงเงิน</span>
                  <OutlinedInput
                    className="disabled-input"
                    sx={{
                      width: "100%",
                      height: "32px",
                    }}
                    placeholder="--"
                    value={selectedCustomer?.customerCreditLimit || ""}
                    disabled
                  ></OutlinedInput>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              marginTop: "1rem",
              marginX: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              marginBottom={"0.7rem"}
            >
              <Grid
                size={12}
                minHeight={"50px"}
                borderBottom={{
                  borderBottom: "1px solid #e0e0e0",
                }}
                alignItems={"center"}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <span className="title-header">ข้อมูลสินค้า</span>
                  <Stack direction={"row"} spacing={2} alignItems="center">
                    <span className="label-bold">Order เข้าระบบ</span>
                    <Button variant="outlined" className="input-order-btn">
                      Import Excel
                    </Button>

                    <Button variant="outlined" className="input-order-btn">
                      Download Temp.
                    </Button>

                    <Button variant="outlined" className="input-order-btn">
                      OCR
                    </Button>
                    <span>|</span>
                    <span className="label-bold">Stock เข้าระบบ</span>
                    <Button variant="outlined" className="input-order-btn">
                      Import Excel
                    </Button>

                    <Button variant="outlined" className="input-order-btn">
                      Download Temp.
                    </Button>

                    <Button variant="outlined" className="input-order-btn">
                      Sync Stock
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>

            <SaleOrderTable />
          </Box>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalePlanOrder;
