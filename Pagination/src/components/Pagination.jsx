const Pagination = ({ currentPage, noOfPages, setCurrentPage }) => {
  const handlePageChange = (n) => setCurrentPage(n);
  const gotoNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const gotoPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div>
      <div>
        {" "}
        <button title="prev"
          disabled={currentPage === 0}
          onClick={() => {
            gotoPrevPage();
          }}
        >
          ◀️
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <span
            className={`pages ${currentPage === n ? "active" : ""}`}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {" "}
            {n}{" "}
          </span>
        ))}{" "}
        <button title="next"
          disabled={currentPage === noOfPages - 1}
          onClick={() => {
            gotoNextPage();
          }}
        >
          ▶️
        </button>
      </div>
    </div>
  );
};

export default Pagination;
