import styles from "./Pagination.module.scss"
import React from "react"
import ReactPaginate from 'react-paginate'

export default function Pagination({ onChangePage }) {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

