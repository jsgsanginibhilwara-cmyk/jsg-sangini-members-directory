// =====================================
// UI Rendering
// =====================================

function renderMembers(list){

    const container =
        document.getElementById("memberList");

    container.innerHTML = "";

    list.forEach(member=>{

        const photo =
            member.memberPhoto && member.memberPhoto !== ""
            ? member.memberPhoto
            : "assets/placeholder.png";


        container.innerHTML += `

<div class="member-card">

<img

class="member-photo"

src="${photo}"

onclick="openMember('${member.memberId}')"

>


<div class="member-info">

<div class="member-name">

${member.fullName}

</div>


<div class="member-id">

${member.memberId}

</div>


<div class="action-row">


<a

class="whatsapp"

href="https://wa.me/91${member.whatsapp}"

target="_blank">

💬 WhatsApp

</a>


<a

class="phone"

href="tel:+91${member.whatsapp}">

📞 ${member.whatsapp}

</a>


</div>

</div>

</div>

`;

    });

}



// =====================================
// OPEN MEMBER PROFILE
// =====================================


function openMember(memberId){


    console.log("Clicked Member ID:", memberId);

    console.log("All Members:", members);



    const member = members.find(
        m => m.memberId === memberId
    );


    console.log("Selected Member:", member);



    if(!member){

        alert("Member not found");

        return;

    }



    document.getElementById("profilePhoto").src =

        member.memberPhoto || "assets/placeholder.png";



    document.getElementById("couplePhoto").src =

        member.couplePhoto || "assets/placeholder.png";



    document.getElementById("profileName").innerHTML =

        member.fullName;



    document.getElementById("profileId").innerHTML =

        member.memberId;



    document.getElementById("profileCity").innerHTML =

        member.city;



    document.getElementById("profileDob").innerHTML =

        formatDate(member.dob);



    document.getElementById("profileAge").innerHTML =

        member.age;



    document.getElementById("profileBlood").innerHTML =

        member.bloodGroup;



    document.getElementById("profileSpouse").innerHTML =

        member.spouseName || "-";



    document.getElementById("profileChildren").innerHTML =

        getChildrenCount(member.children);



    document.getElementById("profileAnniversary").innerHTML =

        formatDate(member.anniversary);


    document.getElementById("profileAddress").innerHTML =

        member.address + ", " + member.city;



    document.getElementById("callBtn").href =

        "tel:+91" + member.whatsapp;



    document.getElementById("whatsappBtn").href =

        "https://wa.me/91" + member.whatsapp;



    document.getElementById("memberModal").style.display = "flex";


}



// =====================================
// CLOSE PROFILE
// =====================================


function closeMember(){


    document.getElementById("memberModal")

    .style.display = "none";


}

// =====================================
// DATE FORMATTER
// =====================================

function formatDate(date){

    if(!date){
        return "-";
    }


    const d = new Date(date);


    if(isNaN(d)){
        return date;
    }


    const day =
        String(d.getDate()).padStart(2,"0");


    const month =
        String(d.getMonth()+1).padStart(2,"0");


    const year =
        d.getFullYear();


    return `${day}-${month}-${year}`;

}

/// =====================================
// CHILDREN COUNT
// =====================================

function getChildrenCount(children){

    if(!children){
        return "0";
    }


    try{

        const list = JSON.parse(children);


        return list.length;


    }
    catch(e){

        return "0";

    }

}

// ===============================
// FILTER FUNCTIONS
// ===============================


function sortAZ(){

let sorted =
[...members].sort(
(a,b)=>
a.fullName.localeCompare(
b.fullName
)
);

renderMembers(sorted);

}



function sortZA(){

let sorted =
[...members].sort(
(a,b)=>
b.fullName.localeCompare(
a.fullName
)
);

renderMembers(sorted);

}




function sortBirthday(){

let sorted =
[...members].sort(
(a,b)=>
new Date(a.dob)
-
new Date(b.dob)
);


renderMembers(sorted);

}





function sortAnniversary(){

let sorted =
[...members].sort(
(a,b)=>
new Date(a.anniversary)
-
new Date(b.anniversary)
);


renderMembers(sorted);

}




function bloodFilter(){

let group =
prompt(
"Enter Blood Group (Example: O+)"
);


if(!group) return;


let filtered =
members.filter(
m =>
m.bloodGroup
.toLowerCase()
.includes(
group.toLowerCase()
)
);


renderMembers(filtered);


}