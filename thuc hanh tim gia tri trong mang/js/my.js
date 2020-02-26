let array=[1,2,3,4,5,6,7,8,9,10];
let number = parseInt(prompt('hay nhap vao gia tri can tim'));
for(i=0;i<array.length;i++){
    if(array[i]==number){
        alert('so '+ number+'thuoc vi tri '+ i +' trong mang');
        break;
    }
}