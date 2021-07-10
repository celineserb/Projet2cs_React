import * as facturationRequests from './facturation.crud'
export const fetchFactures = QueryParams =>{
    return facturationRequests
        .fetchFactures(QueryParams)
}
export const downloadBill = idBill =>{
    return facturationRequests
        .downloadBill(idBill)
}