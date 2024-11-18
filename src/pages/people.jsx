import React, { useEffect, useState } from "react";

// Function to shuffle the list
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// List of people
const peopleList = [
  "Juliet Ohankwere",
  "Chidimma Chukwu",
  "Egesie Juliet",
  "Nriaka Elizabeth",
  "Chikezie Chiamaka",
  "Ndukwe Chiemezikam",
  "Diala Chidimma",
  "Ezichi Angela Joseph",
  "Ihegworo Cynthia",
  "Anosike Favour",
  "Cynthia Nduka",
  "Nwanna Chiamaka",
  "Madugba Marysylvia",
  "Akpaka Onyinyechi",
  "Oparaji Rita",
  "Adigo Chizorom",
  "Okoroanyanwu Chioma",
  "Ekene Agonmuo",
  "Nwachukwu Lynda Amarachi",
  "Adiele Lynda",
  "Nwachukwu Camela Amarachi",
  "Eke Rosemary",
  "Nnodim Chiamaka",
  "Onuchukwu Deborah",
  "Ndukwu Ugochinyere",
  "Ihekuna Chioma",
  "Nzekwe Justina",
  "Claret Nwosu",
  "Jovita Uzosike",
  "Miriam Osondu",
  "Omemgboji Mercy",
  "Omenogu Chinemerem",
  "Nneji Chiamaka",
  "Ogu Georgia",
  "Uwaneme Regina",
  "Mbata Uchechi",
  "Ozims Jessica",
  "Okorie Chiamaka",
  "Ihuoma Immaculata",
  "Okorienta Jennifer",
  "Ukaegbu Jessica",
  "Anyanwu Julitha",
  "Kosi Okechukwu",
  "Ireoji Juliet",
  "Chiamaka Okoro",
  "Nwachukwu Uloma",
  "Oparanozie Chidera",
  "Anyanwu Miriam",
  "Tochi Odom",
  "Ngaobiwu Chimuanya",
  "Ekeji Munachiso",
  "Chinasa Osuagwu",
  "Iwuanyanwu Mary",
  "Anoruo Uchechi",
  "Obinna Favour",
  "Omenukor Lilian",
  "Ogwuegbu Emmanuella",
  "Okoroanyanwu Chisom",
  "Queendaline Okwukwe",
  "Onyeanusi Queeneth",
  "Esther Dike",
  "Ogu Sandra",
  "Osita Nkwocha",
  "Onwuboro Chiamaka",
  "Ufomba Chiamaka",
  "Nwachukwu Kachi",
  "Mgbeoduru Basilia",
  "Uwasomba Chiamaka",
  "Valentina Agonmuo",
  "Uzosike Oluchi",
  "Chioma Iweh",
  "Onukaogu Chiamaka",
  "Ndu-egbuchulem Onyinyechi",
  "Chikwendu Mirabel",
  "Ifunanya Loveth",
  "Assumpta Diala",
  "Ojilere Chinonso",
  "Ogbonna Chisom"
];

const People = () => {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    // Create a copy of the people list and shuffle it
    const shuffledPeople = [...peopleList];
    shuffleArray(shuffledPeople);

    // Create pairs from the shuffled list
    const generatedPairs = [];
    for (let i = 0; i < shuffledPeople.length; i += 2) {
      if (i + 1 < shuffledPeople.length) {
        generatedPairs.push([shuffledPeople[i], shuffledPeople[i + 1]]);
      } else {
        generatedPairs.push([shuffledPeople[i], "No Pair"]); // Handle odd number of people
      }
    }

    setPairs(generatedPairs);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Random Pairs</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Person 1</th>
            <th className="py-2 px-4 border-b">Person 2</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map((pair, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="py-2 px-4 border-b">{pair[0]}</td>
              <td className="py-2 px-4 border-b">{pair[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;

// List of people
// const people = [
//     "Juliet Ohankwere", "Chidimma Chukwu", "Egesie Juliet", "Nriaka Elizabeth",
//     "Chikezie Chiamaka", "Ndukwe Chiemezikam", "Diala Chidimma", "Ezichi Angela Joseph",
//     "Ihegworo Cynthia", "Anosike Favour", "Cynthia Nduka", "Nwanna Chiamaka",
//     "Madugba Marysylvia", "Akpaka Onyinyechi", "Oparaji Rita", "Okoroanyanwu Chioma",
//     "Ekene Agonmuo", "Nwachukwu Lynda Amarachi", "Adiele Lynda", "Nwachukwu Camela",
//     "Eke Rosemary", "Nnodim Chiamaka", "Onuchukwu Deborah", "Ndukwu Ugochinyere",
//     "Ihekuna Chioma", "Nzekwe Justina", "Claret Nwosu", "Jovita Uzosike", "Miriam Osondu",
//     "Omemgboji Mercy", "Chioma", "Omenogu Chinemerem", "Nneji Chiamaka", "Ogu Georgia",
//     "Uwaneme Regina", "Mbata Uchechi", "Ozims Jessica", "Okorie Chiamaka", "Ihuoma Immaculata",
//     "Okorienta Jennifer", "Ukaegbu Jessica", "Anyanwu Julitha", "Kesty Joseph", "Kosi Okechukwu",
//     "Ireoji Juliet", "Chiamaka Okoro", "Nwachukwu Uloma", "Oparanozie Chidera", "Anyanwu Miriam",
//     "Tochi Odom", "Ngaobiwu Chimuanya", "Ekeji Munachiso", "Chinasa Osuagwu", "Iwuanyanwu Mary",
//     "Anoruo Uchechi", "Obinna Favour", "Omenukor Lilian", "Ogwuegbu Emmanuella", "Okoroanyanwu Chisom",
//     "Queendaline Okwukwe", "Onyeanusi Queeneth", "Esther Dike", "Ogu Sandra", "Osita Nkwocha",
//     "Onwuboro Chiamaka", "Ufomba Chiamaka", "Nwachukwu Kachi", "Mgbeoduru Basilia", "Uwasomba Chiamaka",
//     "Valentina Agonmuo", "Uzosike Oluchi", "Chioma Iweh", "Onukaogu Chiamaka", "Ndu-egbuchulem Onyinyechi",
//     "Chikwendu Mirabel", "Ifunanya Loveth"
//   ];

//   // Function to shuffle the list
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
//       [array[i], array[j]] = [array[j], array[i]];  // Swap elements
//     }
//   }

//   // Shuffle the list of people
//   shuffle(people);

//   // Create pairs
//   const pairs = [];
//   for (let i = 0; i < people.length; i += 2) {
//     if (i + 1 < people.length) {
//       pairs.push([people[i], people[i + 1]]);
//     } else {
//       pairs.push([people[i], "No Pair"]); // Handle odd number of people
//     }
//   }

//   // Display the pairs
//   pairs.forEach(pair => {
//     console.log(pair[0] + " - " + pair[1]);
//   });
