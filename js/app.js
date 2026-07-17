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


// ======================================
// AUTO REFRESH EVERY 30 SECONDS
// ======================================

setInterval(async function () {

    console.log("Checking for latest data...");

    await loadMembers();

    showLastUpdated();

}, 30000);


// ======================================
// REFRESH WHEN USER RETURNS TO APP
// ======================================

document.addEventListener("visibilitychange", async function () {

    if (!document.hidden) {

        console.log("App Active - Refreshing");

        await loadMembers();

        showLastUpdated();

    }

});

// =====================================

function setupSearch(){

    console.log("Members:", members.length);

    const search=document.getElementById("search");

    search.addEventListener("input",function(){

        const keyword=this.value.toLowerCase();

        const filtered=members.filter(member=>{

           return (

    (
        ((member.firstName || "") + " " + (member.surname || ""))
        .toLowerCase()
        .includes(keyword)
    )

    ||

    (
        (member.memberId || "")
        .toLowerCase()
        .includes(keyword)
    )

    ||

    (
        String(member.whatsapp || "")
        .includes(keyword)
    )


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