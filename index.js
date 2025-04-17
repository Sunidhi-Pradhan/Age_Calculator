let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // Months are zero-based
    let y1 = birthDate.getFullYear();
    let today = new Date();
    let d2 = new Date().getDate();
    let m2 = new Date().getMonth() + 1; // Months are zero-based
    let y2 = new Date().getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 > m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = (12 + m2) - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    console.log(y3,m3,d3);

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
};