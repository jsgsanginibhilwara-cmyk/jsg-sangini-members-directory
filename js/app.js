// ======================================
// LIVE API
// ======================================

const API_URL =
"https://script.google.com/macros/s/AKfycbyGrIXsURM3IaDp1Tym43D6YxHVQF2vO-VpmJglnYdaopzWOnn525YmM2Ru2zfgOxvo/exec";

// =====================================

window.onload = async function(){

    await loadMembers();

    setupSearch();

    showLastUpdated();

};

// =====================================

function setupSearch(){

    const search=document.getElementById("search");

    search.addEventListener("input",function(){

        const keyword=this.value.toLowerCase();

        const filtered=members.filter(member=>{

            return(

                member.fullName.toLowerCase().includes(keyword)

                ||

                member.memberId.toLowerCase().includes(keyword)

                ||

                member.whatsapp.includes(keyword)

            );

        });

        renderMembers(filtered);

    });

}

function showLastUpdated(){

    const time =
    localStorage.getItem(
        "JSG_LAST_UPDATED"
    );


    if(time){

        document.getElementById(
            "lastUpdated"
        ).innerHTML =
        "🔄 Data Updated: " + time;

    }

}