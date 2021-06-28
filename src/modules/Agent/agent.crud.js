import { CrudService, Services } from "../../services/crud.services";
import { fetchPaths } from './agent.constants'

export function getAgents(params) {
    return CrudService.Get(Services.USER_URL, fetchPaths.AGENT_PATH, params);
}

