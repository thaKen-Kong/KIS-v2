
export const navigationItems = [
    {
        label : "HOME",
        path : "/",
    },
    {
        label : "ABOUT",
        path : "/about",
        childrens : [
            {label : "HISTORY", path : ""},
            {label : "MISSION AND VISION", path : ""},
            {label : "HYMN", path : ""},
            {label : "CORE VALUES", path : ""},
            {label : "ADMINISTRATIONS", path : ""},
            {label : "FACULTY AND STAFFS", path : ""},
        ]
    },
    {
        label : "WHAT'S NEW?",
        path : "/what-is-new",
        childrens : [
            {label : "NEWS", path : ""},
            {label : "UPCOMING EVENTS", path : ""},
            {label : "ANNOUNCEMENTS", path : ""},
        ]
    },
    {
        label : "LIFE@KIS",
        path : "/life-at-kis",
        childrens : [
            {label : "JHS", path : ""},
            {label : "SHS", path : ""},
            {label : "STUDENT ORGANIZATIONS", path : ""},
            {label : "FACILITIES", path : ""}
        ]
    },
    {
        label : "ADMISSION",
        path : "/admission",
        childrens : [
            {label : "WHY CHOOSE US?", path : ""},
            {label : "REQUIREMENTS", path : ""},
            {label : "ENROLLMENT", path : ""},
        ]
    },
    {
        label : "CONTACTS",
        path : "/contact-us",
        childrens : [
            {label : "", path : ""}
        ]
    }
]