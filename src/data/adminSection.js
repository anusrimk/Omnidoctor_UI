export const adminSections = [
  { label: "Clinics", iconName: "Building2" },
  { label: "Doctors", iconName: "User" },
  { label: "Specialities", iconName: "Stethoscope" },
  { label: "Timely Availability", iconName: "Clock" },
  { label: "Configuration", iconName: "Settings" },
  { label: "Dating", iconName: "HeartHandshake" },
  { label: "Patients", iconName: "Users" },
  { label: "Balance requests", iconName: "Wallet" },
  { label: "Discounts", iconName: "Percent" },
  { label: "Insurance companies", iconName: "ShieldCheck" },
  { label: "Refunds", iconName: "RotateCcw" },
  { label: "Chatting", iconName: "MessageCircle" },
  // { label: "Backoffice CRM", iconName: "Briefcase" },
];

export const dummyData = {
  Clinics: [
    { name: "Sunrise Clinic", address: "123 Main St", phone: "555-1234" },
    { name: "Green Valley Clinic", address: "456 Park Ave", phone: "555-5678" },
  ],
  Doctors: [
    { name: "Dr. John Doe", specialty: "Cardiology", phone: "555-1010" },
    { name: "Dr. Jane Smith", specialty: "Dermatology", phone: "555-2020" },
  ],
  Specialties: [
    { name: "Cardiology" },
    { name: "Dermatology" },
    { name: "Neurology" },
  ],
  "Timely Availability": [
    { doctor: "Dr. John Doe", available: "Mon-Fri 9am-5pm" },
    { doctor: "Dr. Jane Smith", available: "Tue-Thu 10am-4pm" },
  ],
  Configuration: [
    { setting: "Appointment Duration", value: "30 min" },
    { setting: "Max Patients/Day", value: "50" },
  ],
  Dating: [
    { event: "Doctor-Patient Meetup", date: "2025-05-01" },
    { event: "Health Camp", date: "2025-06-15" },
  ],
  Patients: [
    { name: "Alice Johnson", age: 30, phone: "555-3030" },
    { name: "Bob Lee", age: 45, phone: "555-4040" },
  ],
  "Balance requests": [
    { patient: "Alice Johnson", amount: "$200", status: "Pending" },
    { patient: "Bob Lee", amount: "$150", status: "Approved" },
  ],
  Discounts: [
    { code: "NEW10", desc: "10% off for new patients" },
    { code: "SUMMER20", desc: "20% off summer promo" },
  ],
  "Insurance companies": [
    { name: "HealthSafe", contact: "555-5050" },
    { name: "MediCare Plus", contact: "555-6060" },
  ],
  Refunds: [
    { patient: "Alice Johnson", amount: "$50", date: "2025-04-10" },
    { patient: "Bob Lee", amount: "$30", date: "2025-04-12" },
  ],
  Chatting: [
    { user: "Alice Johnson", lastMessage: "Thank you, doctor!" },
    { user: "Dr. John Doe", lastMessage: "Appointment confirmed." },
  ],
};

export const initialData = [
  {
    name: "Dr BK Chaudhary",
    rating: 5,
    reviews: 1,
    appointments: 20,
    department: "Psychiatry",
    online: true,
    onlineFrom: "4 years ago",
    visible: true,
    email: "",
  },
  {
    name: "Dr Rajiv Chandak",
    rating: 4,
    reviews: 7,
    appointments: 106,
    department: "Family Medicine",
    online: true,
    onlineFrom: "",
    visible: true,
    email: "",
  },
  {
    name: "Dr Sanjay Darda",
    rating: 2,
    reviews: 3,
    appointments: 19,
    department: "Psychology",
    online: true,
    onlineFrom: "",
    visible: true,
    email: "",
  },
  {
    name: "Dr. Rohit Anand Kate",
    rating: 3,
    reviews: 14,
    appointments: 123,
    department: "Psychology",
    online: true,
    onlineFrom: "",
    visible: true,
    email: "",
  },
  {
    name: "Dr. Romil Rathi",
    rating: 4,
    reviews: 9,
    appointments: 92,
    department: "Family Medicine",
    online: true,
    onlineFrom: "4 years ago",
    visible: true,
    email: "",
  },
  {
    name: "Dr. Rashmi Gupta",
    rating: 5,
    reviews: 7,
    appointments: 15,
    department: "Family Medicine",
    online: false,
    onlineFrom: "",
    visible: true,
    email: "",
  },
  {
    name: "Dr. Piyush Kothari",
    rating: 5,
    reviews: 1,
    appointments: 49,
    department: "Family Medicine",
    online: false,
    onlineFrom: "4 years ago",
    visible: false,
    email: "",
  },
];

export const specialitesData = [
  {
    name: "Craniosacral Therapy",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "1500",
    priceSuccessive: "1500",
  },
  {
    name: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "10",
    priceSuccessive: "12",
  },
  {
    name: "General medicine",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "0",
    priceSuccessive: "0",
  },
  {
    name: "Test Department Image",
    image:
      "https://images.unsplash.com/photo-1512070679279-c3b6c3c7c9b2?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "20",
    priceSuccessive: "10",
  },
  {
    name: "Test department LIC",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "10",
    priceSuccessive: "10",
  },
  {
    name: "Pediatric",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "0",
    priceSuccessive: "0",
  },
  {
    name: "Sample Department",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "15",
    priceSuccessive: "20",
  },
  {
    name: "Emergency Doctor",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "0",
    priceSuccessive: "0",
  },
  {
    name: "testing service",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64",
    priceFirst: "0",
    priceSuccessive: "0",
  },
];
