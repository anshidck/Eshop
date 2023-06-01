export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
];

export const productColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
        field: "name",
        headerName: "Name",
        width: 150,
    },
    {
        field: "brand",
        headerName: "brand",
        width: 100,
    },
    {
        field: "category",
        headerName: "category",
        width: 230,
    },
    {
        field: "price",
        headerName: "price",
        width: 100,
    },
];

