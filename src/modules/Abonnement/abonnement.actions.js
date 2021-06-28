import * as subscriptionRequests from './abonnement.crud'
export const fetchSubscriptions = QueryParams =>{
    return subscriptionRequests
        .fetchSubscriptions(QueryParams)
}
export const activateSubscription = idSub =>{
    return subscriptionRequests
        .activateSubscription(idSub)
}
export const deleteSubscription = idSub =>{
    return subscriptionRequests
        .deleteSubscription(idSub)
}