import * as promotionRequests from './promotion.crud'
export const fetchCodePromos = QueryParams =>{
    return promotionRequests
        .fetchCodePromos(QueryParams)
}
export const deleteCodePromo = idCodePromo =>{
    return promotionRequests
        .deleteCodePromo(idCodePromo)
}
export const addCodePromo = codePromo =>{
    return promotionRequests
        .addCodePromo(codePromo)
}
export const updateCodePromo = codePromo =>{
    return promotionRequests
        .updateCodePromo(codePromo)
}