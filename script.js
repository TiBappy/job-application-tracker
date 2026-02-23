let interviewedCount = [];
let rejectedCount = [];

const countTotal = document.getElementById("count-total");
const countTotalInterviewed = document.getElementById("count-interviewed");
const countTotalRejected = document.getElementById("count-rejected");

const allCardsSection = document.getElementById("all-cards-section");


// Get Filtered Btn 

const allFilterBtn =document.getElementById('filtered-btn-all');
const interviewedFilterBtn =document.getElementById('filtered-btn-interviewed');
const rejectedFilterBtn =document.getElementById('filtered-btn-rejected');
console.log(interviewedFilterBtn);

// Calculate Count
function calculateCount() {
    countTotal.innerText = allCardsSection.children.length;
    countTotalInterviewed.innerText = interviewedCount.length;
    countTotalRejected.innerText = rejectedCount.length;
}

calculateCount();

function toggleStyle(id) {

    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewedFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');


    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewedFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');

    


    const slectedToggleBtn = document.getElementById(id);
    slectedToggleBtn.classList.remove('bg-gray-300', 'text-black');
    slectedToggleBtn.classList.add('bg-blue-500', 'text-white');
}