import React from 'react';
import 'boxicons';
import {default as api} from '..store/apiSlice'



export default function List() {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
    const [deleteTransaction] = api.useDeleteTransactionMutation()

     let Transactions;

    if (isFetching) {
        Transactions = <div>Fetching</div>;
    } else if (isSuccess) {
        Transactions = data.map((v, i) => (
            <Transaction key={i} options={v} handler={handlerClick}></Transaction>
        ));
    } else if (isError) {
        <div>Error</div>;
    }

    const handlerClick = (event) => {}
    if(!e.target.dataset.id) return 0;
    deleteTransaction[{_id: e.target.dataset.id}]
}

    return <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 font-bold text-xl'>History</h1>
        {Transactions}
        
    </div>;
}

function Transaction({options, handler}){
    if(!options) return null;
    return (
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight: '8px solid ${category.color ?? "#e5e5e5}"}}>
            <button className='px-3' onClick='handler'><box-icon data-id = {category._id ?? ""} size = "15px" name="trash" color={options.color ?? '#f9c74f'}></box-icon></button>
            <span className='block w-full'>{options.name ?? ''}</span>
        </div>
    )
}