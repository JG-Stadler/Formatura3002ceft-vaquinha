// Mostruario de imagens
var pictures =[
    "renata.jpg","igulinho.jpg","joão.jpg","raycon.jpg",
    "robin.jpg","davi.jpg","pedro.jpg","vitinho.jpg","lala.jpg",
    "duzão.jpg","julia.jpg","luiz.jpg","carol.jpg","cadu.jpg",
    "sarah.g.jpg","sarah.f.jpg","enzzo.jpg","samuel.jpg"
]
var moldura = document.getElementById("foto-aluno");

let i = 0;
function ChangeImage(){
    setInterval(()=>{
        if(i===17){
            i=0;
        }
        moldura.src = `images/${pictures[i]}`;
        i++;
       },1500);
}