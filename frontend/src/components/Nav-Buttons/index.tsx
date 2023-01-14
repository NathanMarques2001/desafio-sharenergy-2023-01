import './styles.css'

import { setPage } from '../../utils/Set-Page'

export const NavButtons = ({ setCurrentPage, currentPage }: any) => {
  return (
    <div className="Buttons-div">
      <button
        className="Pagination-Button"
        onClick={(e) => setCurrentPage(setPage('FirstPage', currentPage))}
      >
        &#60;&#60;
      </button>
      <button
        className="Pagination-Button"
        onClick={(e) => setCurrentPage(setPage('PreviousPage', currentPage))}
      >
        &#60;
      </button>
      <div className="AtualPage-div">{currentPage}</div>
      <button
        className="Pagination-Button"
        onClick={(e) => setCurrentPage(setPage('NextPage', currentPage))}
      >
        &#62;
      </button>
      <button
        className="Pagination-Button"
        onClick={(e) => setCurrentPage(setPage('LastPage', currentPage))}
      >
        &#62;&#62;
      </button>
    </div>
  )
}

export default NavButtons
