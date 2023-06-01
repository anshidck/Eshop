import Sidebar from "../../components/admin/Sidebar"
import Datatable from "../../components/admin/Datatable"

function List({columns}) {
  return (
    <div className="flex">
    <Sidebar/>
    <div className="listContainer">
      <Datatable columns={columns}/>
    </div>
  </div>
  )
}

export default List