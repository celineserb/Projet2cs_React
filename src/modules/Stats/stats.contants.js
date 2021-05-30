export const fetchPaths = {
    VEHICLE: id => `/v/${id}`,
    VEHICULE_YEAR: (id, year) => `/v/${id}/d/${year}`,
    VEHICULE_MONTH: (id, year, month) => `/v/${id}/d/${year}/${month}`,
    VEHICULE_DAY: (id, year, month, day) => `/v/${id}/d/${year}/${month}/${day}`,
}