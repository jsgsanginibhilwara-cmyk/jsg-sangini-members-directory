// ======================================
// LIVE API
// ======================================



// CACHE KEY

const CACHE_KEY = "JSG_MEMBERS_CACHE";


// ======================================
// LOAD MEMBERS
// ======================================

async function loadMembers(){


    // 1. LOAD CACHE FIRST

    const cached =
        localStorage.getItem(CACHE_KEY);


    if(cached){

        console.log("Loading from cache");

        members =
        JSON.parse(cached);

        renderMembers(members);

    }
document.getElementById("memberCount").innerHTML =
    "👥 Registered Members: " + members.length;


    // 2. FETCH LATEST DATA

    try{


        console.log("Updating from Google Sheet");


        const response =
        await fetch(API_URL);



        const data =
        await response.json();



        // SAVE NEW DATA
localStorage.setItem(
 CACHE_KEY,
 JSON.stringify(data)
);


localStorage.setItem(
"JSG_LAST_UPDATED",
new Date().toLocaleString()
        );



        members = data;



        // Refresh UI

        renderMembers(members);



        console.log(
            "Cache Updated",
            members.length
        );


    }

    catch(error){

        console.log(
            "Offline mode",
            error
        );

    }


}

