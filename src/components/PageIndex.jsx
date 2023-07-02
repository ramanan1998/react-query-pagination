import propTypes from "prop-types";

function PageIndex({pg, page, setPage, isPreviousData}) {
  
  return (
    <button style={{
        padding: "10px",
        border: "1px solid black",
        cursor: "pointer",
        backgroundColor: page === pg ? "blue" : "cyan"
    }}
        onClick={() => setPage(pg)}
        disabled={isPreviousData}
    >
        {pg}
    </button>
  )
}

PageIndex.propTypes = {
    pg: propTypes.number,
    page: propTypes.number,
    setPage: propTypes.func,
    isPreviousData: propTypes.bool
}

export default PageIndex