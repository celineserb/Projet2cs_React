import {CrudService} from '../../services'
import {promotionUrls} from './promotion.contants'
import { Services } from '../../services/crud.services'

export const fetchCodePromos = (queryParams)=>{
    return CrudService.Get(Services.FACTURATION_ENDPOINT, promotionUrls.FETCH_PROMOTION_PATH,queryParams)
}
export const deleteCodePromo = (idCodePromo)=>{
    return CrudService.Post(Services.FACTURATION_ENDPOINT, promotionUrls.DELETE_PROMOTION_PATCH+idCodePromo)
}
export const addCodePromo = (codePromo)=>{
    return CrudService.Post(Services.FACTURATION_ENDPOINT, promotionUrls.ADD_PROMOTION_PATH,codePromo)
}
export const updateCodePromo = (codePromo)=>{
    return CrudService.Post(Services.FACTURATION_ENDPOINT, promotionUrls.UPDATE_PROMOTION_PATH,codePromo)
}