import {CrudService} from '../../services'
import {facturationUrls} from './facturation.contants'
import { Services } from '../../services/crud.services'

export const fetchFactures = (queryParams)=>{
    return CrudService.Get(Services.FACTURATION_ENDPOINT, facturationUrls.FETCH_FACTURES_PATH,queryParams)
}
export const downloadBill = (idBill)=>{
    return CrudService.Get(Services.FACTURATION_ENDPOINT, facturationUrls.DOWNLOAD_BILL_PATH+idBill)
}