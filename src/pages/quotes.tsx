import { IQuote, Quote } from "../interfaces/quote.interface";
import { useState, useEffect } from 'react'
import { quoteService } from "../services/quote.service";
import type { ColumnsType } from 'antd/es/table';
import Table from "antd/es/table";
const Quotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>()
    useEffect(() => {
        quoteService.getAll().then(d => {
            console.log(d.data.quotes);
            setQuotes(d.data.quotes)
        })
    }, [])
    const columns: ColumnsType<Quote> = [
        {
            title: 'ID',
            key: 'id',
            dataIndex: 'id'
        },
        {
            title: 'Quote',
            dataIndex: 'quote',
            key: 'quote'
        },
        {
            title: 'author',
            dataIndex: 'author',
            key: 'author'
        }
    ]
    return (<>

        welcome to Quotes
        <Table dataSource={quotes} rowKey={(r) => {
            return r.id
        }} columns={columns}></Table>
    </>)
}

export default Quotes;