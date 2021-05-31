export const fetchPaths = {
    VEHICLE: id => `/v/${id}`,
    VEHICULE_YEAR: (id, year) => `/v/${id}/d/${year}`,
    VEHICULE_MONTH: (id, year, month) => `/v/${id}/d/${year}/${month}`,
    VEHICULE_DAY: (id, year, month, day) => `/v/${id}/d/${year}/${month}/${day}`,

    BORNE: id => `/borne/${id}`,
    BORNE_YEAR: (id, year) => `/borne/${id}/f/${year}-01-01/${year}-12-31`,
    BORNE_MONTH: (id, year, month) => {
        let day;
        if (month === 2) {
            day = 28
        } else if ([4, 6, 9, 11].includes(month)) {
            day = 30
        } else {
            day = 31
        }
        return `/borne/${id}/f/${year}-${month}-01/${year}-${month}-${day}`
    },
    BORNE_DAY: (id, year, month, day) => `/borne/${id}/f/${year}-${month}-${day}/${year}-${month}-${day+1}`,
}