let interviewedList = [];
let rejectedList = [];
let currentStatus = "all";

const TOTAL_JOBS = 8;

// All collected elements are here

const total = document.getElementById("count-total");
const interviewedCount = document.getElementById("count-interviewed");
const rejectedCount = document.getElementById("count-rejected");

const allFilterBtn = document.getElementById("filtered-btn-all");
const interviewedFilterBtn = document.getElementById(
  "filtered-btn-interviewed",
);
const rejectedFilterBtn = document.getElementById("filtered-btn-rejected");

const allCardsSection = document.getElementById("all-cards-section");
const mainContainer = document.getElementById("main-section");
const filterSection = document.getElementById("filtered-section");

const jobsHeadText = document.querySelector(".available-jobs-head p");

// Count Calculation

function calculateCount() {
  total.innerText = allCardsSection.children.length;
  interviewedCount.innerText = interviewedList.length;
  rejectedCount.innerText = rejectedList.length;

  updateJobsHead();
}

// Update Jobs Head

function updateJobsHead() {
  let visibleCount = 0;

  if (currentStatus === "filtered-btn-all") {
    visibleCount = allCardsSection.children.length;
  } else if (currentStatus === "filtered-btn-interviewed") {
    visibleCount = interviewedList.length;
  } else if (currentStatus === "filtered-btn-rejected") {
    visibleCount = rejectedList.length;
  }

  jobsHeadText.innerText = `${visibleCount} of ${TOTAL_JOBS} Jobs`;
}

calculateCount();

// Filterede Btn Style For Toggle

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-blue-500", "text-white");
  interviewedFilterBtn.classList.remove("bg-blue-500", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");

  allFilterBtn.classList.add("bg-gray-300");
  interviewedFilterBtn.classList.add("bg-gray-300");
  rejectedFilterBtn.classList.add("bg-gray-300");

  const selectedBtn = document.getElementById(id);

  selectedBtn.classList.remove("bg-gray-300");
  selectedBtn.classList.add("bg-blue-500", "text-white");

  currentStatus = id;

  if (id === "filtered-btn-all") {
    allCardsSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id === "filtered-btn-interviewed") {
    allCardsSection.classList.add("hidden");
    filterSection.classList.remove("hidden");

    renderInterviewed();
  } else if (id === "filtered-btn-rejected") {
    allCardsSection.classList.add("hidden");
    filterSection.classList.remove("hidden");

    renderRejected();
  }

  updateJobsHead();
}

// Event delegation

mainContainer.addEventListener("click", function (event) {
  const card = event.target.closest(".available-card");

  if (!card) return;

  const companyName =
    card.querySelector(".company-name")?.innerText ||
    card.querySelector("h1").innerText;

  const jobTitle =
    card.querySelector(".job-title")?.innerText ||
    card.querySelectorAll("p")[0].innerText;

  const address =
    card.querySelector(".address")?.innerText ||
    card.querySelectorAll("p")[1].innerText;

  const description =
    card.querySelector(".job-description")?.innerText ||
    card.querySelectorAll("p")[2].innerText;

  const statusBtn =
    card.querySelector(".not-applied-btn") || card.querySelector(".btn");

  // Cards Delete

  if (event.target.classList.contains("trash-btn")) {
    card.remove();

    interviewedList = interviewedList.filter(
      (job) => job.companyName !== companyName,
    );

    rejectedList = rejectedList.filter(
      (job) => job.companyName !== companyName,
    );

    calculateCount();

    if (currentStatus === "filtered-btn-interviewed") renderInterviewed();
    if (currentStatus === "filtered-btn-rejected") renderRejected();
  }

  //   InTerviewed Btn Cliked

  if (event.target.innerText === "Interviewed") {
    statusBtn.innerText = "Interviewed";
    statusBtn.classList.remove("text-red-500");
    statusBtn.classList.add("text-green-500");

    const jobInfo = {
      companyName,
      jobTitle,
      address,
      description,
      status: "Interviewed",
    };

    const exists = interviewedList.find(
      (job) => job.companyName === companyName,
    );

    if (!exists) interviewedList.push(jobInfo);

    rejectedList = rejectedList.filter(
      (job) => job.companyName !== companyName,
    );

    calculateCount();

    if (currentStatus === "filtered-btn-interviewed") renderInterviewed();
    if (currentStatus === "filtered-btn-rejected") renderRejected();
  }

  //  Rejected Btn Clicked

  if (event.target.innerText === "Rejected") {
    statusBtn.innerText = "Rejected";
    statusBtn.classList.remove("text-green-500");
    statusBtn.classList.add("text-red-500");

    const jobInfo = {
      companyName,
      jobTitle,
      address,
      description,
      status: "Rejected",
    };

    const exists = rejectedList.find((job) => job.companyName === companyName);

    if (!exists) rejectedList.push(jobInfo);

    interviewedList = interviewedList.filter(
      (job) => job.companyName !== companyName,
    );

    calculateCount();

    if (currentStatus === "filtered-btn-interviewed") renderInterviewed();
    if (currentStatus === "filtered-btn-rejected") renderRejected();
  }
});
// Rendre Interviewd
function renderInterviewed() {
  filterSection.innerHTML = "";

  interviewedList.forEach((job) => {
    const div = document.createElement("div");

    div.className = "available-card bg-white border p-4 space-y-2";

    div.innerHTML = `
    
      <div class="flex justify-between">
        <h1 class="text-xl font-bold">${job.companyName}</h1>
        <i class="trash-btn fa-regular fa-trash-can cursor-pointer"></i>
      </div>

      <p>${job.jobTitle}</p>
      <p>${job.address}</p>

      <button class="btn text-green-500">
        Interviewed
      </button>

      <p>${job.description}</p>
    `;

    filterSection.appendChild(div);
  });
}

// Render rejected

function renderRejected() {
  filterSection.innerHTML = "";

  rejectedList.forEach((job) => {
    const div = document.createElement("div");

    div.className = "available-card bg-white border p-4 space-y-2";

    div.innerHTML = `
    
      <div class="flex justify-between">
        <h1 class="text-xl font-bold">${job.companyName}</h1>
        <i class="trash-btn fa-regular fa-trash-can cursor-pointer"></i>
      </div>

      <p>${job.jobTitle}</p>
      <p>${job.address}</p>

      <button class="btn text-red-500">
        Rejected
      </button>

      <p>${job.description}</p>
    `;

    filterSection.appendChild(div);
  });
}
