import * as React from "react";
import { Link, Outlet } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{
          display:'block',
          paddingBottom: "1rem",
          borderBottom:'none'
          
       }}>
        <Link to ='/Invoices'>Invoices </Link> | {' '}
        <Link to= '/Expenses'>Expenses </Link> 
      </nav>
      <Outlet/>
    </div>
  );
}
