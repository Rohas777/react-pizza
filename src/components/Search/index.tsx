import styles from "./Search.module.scss"
import React, { FC, useCallback, useRef, useState } from "react"
import debounce from "lodash.debounce"

import { useOutsideClick } from '../../assets/CustomHooks'
import { useDispatch } from "react-redux"
import { setSearchValue } from "../../redux/filter/slice"



export const Search: FC = () => {
    const dispatch = useDispatch()

    const searchRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const [value, setValue] = useState('')
    const [isSearchOpened, setSearchOpened] = useState(false)

    const onCloseSearch = () => {
        setSearchOpened(false)
    }

    useOutsideClick(searchRef, onCloseSearch, isSearchOpened)

    const onClickClear = () => {
        setValue('')
        dispatch(setSearchValue(''))
        inputRef.current?.focus()
    }

    const updateSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str))
        }, 500), [])

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div
            ref={searchRef}
            className={isSearchOpened ? styles.search + ' ' + styles.active : styles.search}
            onClick={() => setSearchOpened(true)}
        >
            <svg className={styles.searchIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                <g>
                    <g>
                        <path d="m304.7,10.9c-108.5,0-196.4,87.9-196.4,196.4 0,46.9 16.4,89.9 43.8,123.7l-135,135c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l135-135c33.8,27.4 76.8,43.8 123.7,43.8 108.5,0 196.4-87.9 196.4-196.4s-88-196.4-196.4-196.4zm0,352c-85.9,0-155.6-69.7-155.6-155.6 0-85.9 69.7-155.6 155.6-155.6 85.9,0 155.6,69.7 155.6,155.6 5.68434e-14,85.9-69.7,155.6-155.6,155.6z" />
                    </g>
                </g>
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                type="text" placeholder="Поиск пиццы..."
            />
            {
                value &&
                <div
                    className={styles.clear}
                    onClick={onClickClear}
                >
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E" />
                    </svg>
                </div>
            }

        </div>
    )
}