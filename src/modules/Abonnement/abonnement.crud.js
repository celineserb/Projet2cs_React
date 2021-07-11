import {CrudService} from '../../services'
import {subscriptionUrls} from './abonnement.contants'
import { Services } from '../../services/crud.services'

export const fetchSubscriptions = (queryParams)=>{
    return CrudService.Get(Services.FACTURATION_ENDPOINT, subscriptionUrls.FETCH_SUBSCRIPTION_PATH,queryParams)
}
export const activateSubscription = (idSub)=>{
    return CrudService.Post(Services.FACTURATION_ENDPOINT, subscriptionUrls.ACTIVATE_SUBSCRIPTION_PATH+idSub)
}
export const deleteSubscription = (idSub)=>{
    return CrudService.Delete(Services.FACTURATION_ENDPOINT, subscriptionUrls.DELETE_SUBSCRIPTION_PATH+idSub)
}
export const fetchSubscriptionType = (queryParams)=>{
    return CrudService.Get(Services.FACTURATION_ENDPOINT, subscriptionUrls.FETCH_SUBSCRIPTION_TYPE_PATH)
}
export const addSubscriptionType = (typeSub)=>{
    return CrudService.Post(Services.FACTURATION_ENDPOINT, subscriptionUrls.ADD_SUBSCRIPTION_TYPE_PATH,typeSub)
}