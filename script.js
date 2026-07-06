// ==========================
// Landing Page
// ==========================

const button = document.getElementById("giftButton");

if(button){

    button.onclick = () =>{

        window.location.href = "story.html";

    };

}


// ==========================
// Letter Typing
// ==========================

const typing = document.getElementById("typing");

if(typing){

const text = `

Selamat ulang tahun ya, Mbg. 💜

Terima kasih karena sudah hadir di hidupku.

Mungkin aku belum bisa memberi hadiah yang mewah.

Tapi aku ingin memberikan sesuatu yang bisa kamu buka kapan pun.

Website kecil ini kubuat khusus untukmu.

Semoga setiap halaman yang kamu buka bisa mengingatkan bahwa ada seseorang yang selalu mendoakanmu bahagia.

Semoga semua impianmu satu per satu menjadi nyata.

Tetap jadi Dyas my mbg yang selalu aku kenal.

Happy Birthday.

💜

`;

let i = 0;

function type(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,35);

    }

}

type();

}