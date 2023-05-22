import React, { useEffect, useRef } from "react";
import Orders from "../components/Orders";
import Searchs from "../components/Searchs";
import SelectFilter from "../components/Selections";
import TableFunction from "../components/Table";
import Filters from "../hooks/Filters";
import "../styles/Main.css";

function Main() {
    const tableWrapperRef = useRef(null);

    useEffect(() => {
        const resizeHandler = () => {
            const windowHeight = window.innerHeight;
            const tableWrapper = tableWrapperRef.current;

            if (tableWrapper) {
                tableWrapper.style.height = `${windowHeight}px`;
            }
        };

        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div className="d-flex justify-content-center flex-column main">
            <div className="menu-beg">
                <Searchs />
                <div className="filters">
                    <SelectFilter />
                    <Orders />
                </div>
            </div>
            <div className="table-container">
                <div ref={tableWrapperRef} className="table-wrapper">
                    <div className="table-content">
                        <Filters />
                        <TableFunction />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
