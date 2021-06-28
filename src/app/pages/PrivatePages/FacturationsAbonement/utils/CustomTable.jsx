import React from 'react'
import { Skeleton } from 'antd';
import { Pagination } from 'antd';
function showTotal(total) {
    return <span className="color-trans">{`Total : ${total} items`}</span>;
}
export const CustomTable = (props) => {
    return (
        <div className="position-relative">
            {props.loadingAction &&
                <div className="position-absolute w-100 h-100 d-flex t-0 l-0 align-items-center justify-content-center" style={{ background: "#00000014" }}>
                    <div class="spinner-border text-warning" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>}
            <table className="w-100 table">
                <thead>
                    <tr>
                        {props.columns.map((item, key) => {
                            return <th key={key}>{item.title}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.loading ? <tr><td colSpan={props.columns.length}> <Skeleton /></td></tr> : (props.data || []).map((row, index) => {
                        return <tr key={index}>
                            {props.columns.map((col, key) => {
                                return <td kye={key}>{col.render ? col.render(row[col.dataKey], row) : row[col.dataKey]}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="d-flex justify-content-end py-3">
                {props.pagination &&
                    <Pagination showSizeChanger={false} pageSize={props.pagination.pageSize} current={props.pagination.page} onChange={props.pagination.onChange} total={props.pagination.total} showTotal={showTotal} />}
            </div>

        </div>
    )
}