import { HistoryPages } from "../pages/About/History"
import { MissionAndVisionPages } from "../pages/About/MissionAndVision"
import { HymnPages } from "../pages/About/Hymn"
import { CoreValuesPages } from "../pages/About/CoreValues"
import { AdministrationsPages } from "../pages/About/Administrations"
import { FacultyAndStaffsPages } from "../pages/About/FacultyAndStaffs"
import { NewsPages } from "../pages/News/News"
import { UpcomingEventsPages } from "../pages/Events/UpcomingEvents"
import { AnnouncementsPages } from "../pages/News/Announcements"
import { JhsPages } from "../pages/LifeAtKis/Jhs"
import { ShsPages } from "../pages/LifeAtKis/Shs"
import { StudentOrganizationsPages } from "../pages/LifeAtKis/StudentOrganizations"
import { FacilitiesPages } from "../pages/LifeAtKis/Facilities"
import { WhyChooseUsPages } from "../pages/Admissions/WhyChooseUs"
import { RequirementsPages } from "../pages/Admissions/Requirements"
import { EnrollmentPages } from "../pages/Admissions/Enrollment"
import { ContactsPages } from "../pages/Contact/Contacts"

export const navigationItems = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "ABOUT",
    path: "/about",
    childrens: [
      { label: "HISTORY", path: "/history", element: <HistoryPages /> },
      { label: "MISSION AND VISION", path: "mission-vision", element: <MissionAndVisionPages /> },
      { label: "HYMN", path: "hymn", element: <HymnPages /> },
      { label: "CORE VALUES", path: "core-values", element: <CoreValuesPages /> },
      { label: "ADMINISTRATIONS", path: "administration", element: <AdministrationsPages /> },
      { label: "FACULTY AND STAFFS", path: "faculty-staffs", element: <FacultyAndStaffsPages /> },
    ],
  },
  {
    label: "WHAT'S NEW?",
    path: "/what-is-new",
    childrens: [
      { label: "NEWS", path: "/news", element: <NewsPages /> },
      { label: "UPCOMING EVENTS", path: "/upcoming-events", element: <UpcomingEventsPages /> },
      { label: "ANNOUNCEMENTS", path: "/announcements", element: <AnnouncementsPages /> },
    ],
  },
  {
    label: "LIFE@KIS",
    path: "/life-at-kis",
    childrens: [
      { label: "JHS", path: "jhs", element: <JhsPages /> },
      { label: "SHS", path: "shs", element: <ShsPages /> },
      { label: "STUDENT ORGANIZATIONS", path: "student-org", element: <StudentOrganizationsPages /> },
      { label: "FACILITIES", path: "facilities", element: <FacilitiesPages /> },
    ],
  },
  {
    label: "ADMISSION",
    path: "/admission",
    childrens: [
      { label: "WHY CHOOSE US?", path: "/why-choose-us", element: <WhyChooseUsPages /> },
      { label: "REQUIREMENTS", path: "/requirements", element: <RequirementsPages /> },
      { label: "ENROLLMENT", path: "/enrollment", element: <EnrollmentPages /> },
    ],
  },
  {
    label: "CONTACTS",
    path: "/contact-us",
    childrens: [
      { label: "", path: "", element: <ContactsPages /> },
    ],
  },
]