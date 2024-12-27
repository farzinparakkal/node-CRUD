// alert("hi")
async function getemployee() {
    const res = await fetch('http://localhost:3000/getemployee');
    const data = await res.json();
    let card = '';
    data.map((Datas) => {
        card += `
        <div class="card">
            <div class="cardimg"><img src="../image/icons8-user-90.png" alt=""></div><br>
            <div>id : ${Datas.empId}</div>
            <div>Name : ${Datas.name}</div>
            <div>Des : ${Datas.des}</div> <br>
            <button class="cardbtn" onclick="location.href='http://localhost:3000/info.html?empId=${Datas.empId}'">Info</button>
        </div>`;
    });
    document.getElementById("container").innerHTML = card;
}



getemployee()