export interface Hospital {
  hospitalId: number;
  hospitalFullName: string;
  password: string;
  email: string;
  phoneNumber: string;
  rating: number;
  area: string;
  city: string;
  certification: string;
  speciality: string;
  imageUrl : string;
  role: string;
}
const hospitalTable = [
  {
      "hospitalId": 0,
      "hospitalFullName": "Springfield General Hospital",
      "password": "$2b$10$abcd1234efgh5678ijkl90mnopqrstuvwx1234yzabcd5678efghijkl90",
      "email": "contact@springfieldgeneral.com",
      "phoneNumber": "1234567890",
      "rating": 4.5,
      "area": "Downtown",
      "city": "Springfield",
      "certification": "https://example.com/certifications/springfield_general.pdf",
      "speciality": "Cardiology",
      "imageUrl": "https://example.com/images/hospital.jpg",
      "role": "hospital"
  },
  {
      "hospitalId": 1,
      "hospitalFullName": "Metropolis Health Center",
      "password": "$2b$10$ijkl1234mnop5678qrst90uvwx1234yzabcd5678efghijkl90abcd1234",
      "email": "info@metropolishealth.com",
      "phoneNumber": "2345678901",
      "rating": 3.5,
      "area": "East Side",
      "city": "Metropolis",
      "certification": "https://example.com/certifications/metropolis_health.pdf",
      "speciality": "Neurology",
      "imageUrl": "https://example.com/images/hospital.jpg",
      "role": "hospital"
  },
  {
      "hospitalId": 2,
      "hospitalFullName": "Sunnyvale Medical Center",
      "password": "$2b$10$qrst1234uvwx5678yzab90cd1234efghijkl90mnop5678efghijkl90",
      "email": "support@sunnyvalemedical.com",
      "phoneNumber": "3456789012",
      "rating": 2.5,
      "area": "West End",
      "city": "Sunnyvale",
      "certification": "https://example.com/certifications/sunnyvale_medical.pdf",
      "speciality": "Orthopedics",
      "imageUrl": "https://example.com/images/hospital.jpg",
      "role": "hospital"
  },
  {
      "hospitalId": 3,
      "hospitalFullName": "Riverside Hospital",
      "password": "$2b$10$mnop1234qrst5678uvwx90abcd1234efghijkl90efghijkl90mnopqrst",
      "email": "hello@riversidehospital.com",
      "phoneNumber": "4567890123",
      "rating": 1.5,
      "area": "Riverfront",
      "city": "Riverside",
      "certification": "https://example.com/certifications/riverside_hospital.pdf",
      "speciality": "Pediatrics",
      "imageUrl": "https://example.com/images/hospital.jpg",
      "role": "hospital"
  },
  {
      "hospitalId": 4,
      "hospitalFullName": "Big City Hospital",
      "password": "$2b$10$uvwx1234yzab5678cdef90ghijkl90mnopqrst1234efghijkl90abcd56",
      "email": "bigcity@bigcityhospital.com",
      "phoneNumber": "5678901234",
      "rating": 3.6,
      "area": "Central",
      "city": "Big City",
      "certification": "https://example.com/certifications/big_city_hospital.pdf",
      "speciality": "Dermatology",
      "imageUrl": "https://example.com/images/hospital.jpg",
      "role": "hospital"
  },
  {
      "hospitalId": 5,
      "hospitalFullName": "dental Hospital",
      "password": "$2b$10$uvwx1234yzab5678cdef90ghijkl90mnopqrst1234efghijkl90abcd56",
      "email": "dental@dentalhospital.com",
      "phoneNumber": "539301234",
      "rating": 4.2,
      "area": "Left",
      "city": "Corner",
      "certification": "https://example.com/certifications/big_city_hospital.pdf",
      "speciality": "Dental",
      "imageUrl": "https://example.com/images/hospital.jpg",
      "role": "hospital"
  },
  {
      "hospitalId": 6,
      "hospitalFullName": "General Hospital",
      "password": "$2b$10$uvwx1234yzab5678cdef90ghijkl90mnopqrst1234efghijkl90abcd56",
      "email": "general@dentalhospital.com",
      "phoneNumber": "847301234",
      "rating": 4.2,
      "area": "there",
      "city": "bolo",
      "certification": "https://example.com/certifications/big_city_hospital.pdf",
      "speciality": "General",
      "imageUrl": "https://example.com/images/hospital.jpg",
      "role": "hospital"
  },
];

export default hospitalTable;
