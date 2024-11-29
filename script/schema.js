const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr Arkadiusz Bieleninik - Neurolog Dziecięcy Szczecin | Specjalista Neurologii Dziecięcej",
  image:
    "https://bieleninikneurologdzieciecy.pl/assets/arkadiusz-bieleninik-min.webp",
  medicalSpecialty: ["Neurologia dziecięca", "Pediatria"],
  description:
    "Specjalista neurologii dziecięcej z ponad 25-letnim doświadczeniem w diagnostyce i leczeniu chorób neurologicznych u dzieci.",
  telephone: "+48531934855",
  email: "rejestracja@bieleninikneurologdzieciecy.pl",
  sameAs: [],
  workLocation: [
    {
      "@type": "MedicalClinic",
      name: "EuroMedis",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Powstańców Wielkopolskich 33a",
        addressLocality: "Szczecin",
        postalCode: "70-111",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "53.42498",
        longitude: "14.53211",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "Fizjoline",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Jagiellońska 67/68",
        addressLocality: "Szczecin",
        postalCode: "70-382",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "53.43843",
        longitude: "14.54744",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "MAMMA - Centrum Diagnostyki i Leczenia Chorób Piersi",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Stanisława Staszica 1",
        addressLocality: "Szczecin",
        postalCode: "70-784",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "53.42854",
        longitude: "14.55281",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "Akademia Malucha",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Bolesława Śmiałego 34/U2",
        addressLocality: "Szczecin",
        postalCode: "70-348",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "53.44794",
        longitude: "14.54161",
      },
    },
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Konsultacje neurologiczne dzieci",
      description: "Diagnostyka i leczenie chorób neurologicznych u dzieci",
    },
    {
      "@type": "MedicalProcedure",
      name: "Diagnostyka padaczki",
      description: "Diagnostyka i leczenie padaczki u dzieci",
    },
    {
      "@type": "MedicalProcedure",
      name: "Diagnostyka bólów głowy",
      description: "Diagnostyka i leczenie bólów głowy u dzieci",
    },
  ],
  qualification: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Specjalizacja",
      about: "Neurologia dziecięca",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Specjalizacja",
      about: "Pediatria",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "W jakich lokalizacjach przyjmuje Dr Bieleninik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EuroMedis (Poniedziałek 10:00-16:30, Czwartek 08:00-13:00), Fizjoline (1 i 3 Piątek miesiąca 08:00-15:00), MAMMA (2 i 4 Piątek miesiąca 08:00-14:00), Akademia Malucha (Wtorek 08:00-13:00)",
      },
    },
  ],
};

// Dodaj schematy do strony
const addSchemaScript = (schema) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
};

addSchemaScript(physicianSchema);
addSchemaScript(faqSchema);
