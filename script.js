const leadForm = document.getElementById("leadForm");
const leadList = document.getElementById("leadList");

const leads = [];

function renderLeads() {
  leadList.innerHTML = "";

  leads.forEach((lead, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${index + 1}. ${lead.name}</strong><br>
      Service: ${lead.service}<br>
      Status: New Lead
    `;
    leadList.appendChild(listItem);
  });
}

leadForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const leadName = document.getElementById("leadName").value.trim();
  const leadService = document.getElementById("leadService").value.trim();

  if (!leadName || !leadService) {
    alert("Please fill both fields.");
    return;
  }

  leads.push({
    name: leadName,
    service: leadService
  });

  leadForm.reset();
  renderLeads();
});
