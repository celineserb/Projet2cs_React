export const fetchPaths = {
    VEHICULE_YEAR: (id) => `/vr/y/${id}`,
    VEHICULE_MONTH: (id) => `/vr/m/${id}`,
    VEHICULE_DAY: (id) => `/vr/d/${id}`,

    BORNE_YEAR: (id, year) => `/br/y/${id}`,
    BORNE_MONTH: (id, year, month) => `/br/m/${id}`,
    BORNE_DAY: (id, year, month, day) => `/br/d/${id}`,

    AGENT_YEAR: (id) => `/ar/y/${id}`,
    AGENT_MONTH: (id) => `/ar/m/${id}`,
    AGENT_DAY: (id) => `/ar/d/${id}`,
    AGENT_WEAK: (id) => `/ar/w/${id}`

}