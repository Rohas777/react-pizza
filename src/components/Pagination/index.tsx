import styles from "./Pagination.module.scss"
import React, { FC } from "react"
import ReactPaginate from 'react-paginate'

type PaginationProps = {
    currentPage: number;
    onChangePage: (count: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, onChangePage }) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            previousLabel="<"
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
        />
    )
}