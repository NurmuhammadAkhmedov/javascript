const harf = prompt("Ismingizni kiriting");
const ism = prompt("Bironta harf kiriting");
if (ism && harf.includes(harf)) {
    alert(`${harf} ismining ichida ${ism} harfi mavjud`);
} else {
    alert(`${harf} ismining ichida ${ism} harfi mavjud emas`);
}