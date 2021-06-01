const data = [
  {
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Pranav Tripathi",
    age: 20,
    city: "Kanpur",
    language: "JavaScript",
    technology: "MERN",
  },
  {
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Ayush Tripathi",
    age: 18,
    city: "Kanpur",
    language: "C++",
    technology: "STL",
  },
  {
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Yashi",
    age: 25,
    city: "Delhi",
    language: "Python",
    technology: "Django",
  },
  {
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Subham Choudhury",
    age: 20,
    city: "Orrisa",
    language: "JavaScript",
    technology: "MERN",
  },
  {
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    name: "Chetan Sharma",
    age: 20,
    city: "Haryana",
    language: "JavaScript",
    technology: "React-Native",
  },
];

let nextCV = () => {
  const currentApplicant = applicants.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentApplicant != undefined) {
    image.innerHTML = `<img src=${currentApplicant.image}>`;
    profile.innerHTML = `<ul class="list-group">
      <li class="list-group-item">Name : ${currentApplicant.name}</li>
      <li class="list-group-item">Age : ${currentApplicant.age}</li>
      <li class="list-group-item">Lives In : ${currentApplicant.city}</li>
      <li class="list-group-item">Primarily Works in : ${currentApplicant.language}</li>
      <li class="list-group-item">Technology : ${currentApplicant.technology}</li>
    </ul>`;
  } else {
    alert("You reviewed all the applications");
    window.location.reload();
  }
};

let cvIterator = (profiles) => {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
};
const applicants = cvIterator(data);
nextCV();
let button = document.getElementById("next");
button.addEventListener("click", nextCV);
