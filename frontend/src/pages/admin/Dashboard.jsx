import Sidebar from "../../components/admin/Sidebar";
import Featured from "../../components/admin/Featured";
import Widget from "../../components/admin/Widget";
import Chart from "../../components/admin/Chart";
import Table from "../../components/admin/Table";

function DashBoard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6">
        <div className="flex gap-4 p-4">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="flex gap-4 p-4">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect="2/1" />
        </div>
        <div className="shadow-md p-4 m-4">
          <div className="font-medium text-gray-500 mb-4">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
