import { useState } from "react";
import { request } from "../api/axios";
import User from "./User";
import "./style.css"
import { useQuery } from "@tanstack/react-query";
import PageIndex from "./PageIndex";

const getUsers = async (page = 1) => {
    return await request({
        method: "get",
        url: `users?page=${page}&per_page=2`,
    })
}

function Main() {

  const [ page, setPage ] = useState(1);
  const { isLoading, isError, isSuccess, data: users, isPreviousData, error } = useQuery({
    queryKey: [ "get-users", page ],
    queryFn: () => getUsers(page),
    keepPreviousData: true
  });
  const firstPage = () => setPage(1);
  const lastPage = () => setPage(users?.data?.total_pages);
  const pageBtnArray = Array(users?.data?.total_pages).fill().map((_, i) => i + 1);

  let content;

  if(isLoading){
    content = <p>Loading...</p>
  }

  if(isError){
    content = <p>Error: {error.message}</p>
  }

  if(isSuccess){
    content = users?.data?.data?.map(data => <User key={data.id} user={data}/>)
  }


  return (
    <div style={{
        border: "1px solid black",
        width: "50%",
        minHeight: "100vh",
        margin: "0 auto",
        padding: "20px"
    }}>
        <nav style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <button className="custom-btn btn-1" onClick={firstPage} disabled={page === 1}>{"<<"}</button>
            {pageBtnArray.length > 1 && pageBtnArray.map(pg => <PageIndex key={pg} page={page} pg={pg} setPage={setPage} isPreviousData={isPreviousData}/>)}
            <button className="custom-btn btn-1" onClick={lastPage} disabled={page === users?.data?.total_pages}>{">>"}</button>
        </nav>
        {content}
    </div>
  )
}

export default Main
