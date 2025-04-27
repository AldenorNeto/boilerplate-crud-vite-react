import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Analytics from "./pages/analytics/Analytics";
import CustomerList from "./pages/customers/CustomerList";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/orders/OrderList";
import ProductForm from "./pages/products/ProductForm";
import ProductList from "./pages/products/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products">
          <Route index element={<ProductList />} />
          <Route path="new" element={<ProductForm />} />
          <Route path=":id" element={<ProductForm />} />
          <Route path="categories" element={<div>Categories Page</div>} />
          <Route path="inventory" element={<div>Inventory Page</div>} />
        </Route>
        <Route path="orders">
          <Route index element={<OrderList />} />
          <Route path="pending" element={<div>Pending Orders</div>} />
          <Route path="completed" element={<div>Completed Orders</div>} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path="segments" element={<div>Customer Segments</div>} />
        </Route>
        <Route path="analytics">
          <Route index element={<Analytics />} />
          <Route path="reports" element={<div>Reports Page</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
