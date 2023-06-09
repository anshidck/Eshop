import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";

function Datatable({columns}) {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [list, setList] = useState();
    const { data, loading, error } = useFetch(`api/${path}/`);
  
    useEffect(() => {
      if (data) {
        setList(data);
      }
    }, [data]);
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`/api/${path}/${id}`);
        setList((prevList) => prevList.filter((item) => item._id !== id));
      } catch (err) {
        console.log(err);
      }
    };
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row._id)}
              >
                Delete
              </div>
            </div>
          );
        },
      },
    ];
    return (
      <div className="datatable">
        <div className="datatableTitle">
          {path}
          <Link to={`/${path}/new`} className="link">
            Add New
          </Link>
        </div>
        {list && (
          <DataGrid
            className="datagrid"
            rows={list}
            columns={columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        )}
      </div>
    );
  }
  
  export default Datatable;