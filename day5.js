/*let arr=[10,20,30]
let [a,b,c]=arr;
console.log(a);
console.log(b);
console.log(c);
*/
/*
let stu={na:"Abu",city:"Chennai"}
let{na,city}=stu
console.log(na)
console.log(city)
*/

/*
function demo()
{
    console.log("two")
}
    */

/*
console.log("one");
setTimeout(()=>{
    console.log("Two");
}
,2000);
console.log("Three");
*/
/*
console.log("process1");
setTimeout(()=>{
    console.log("process2");
}
,2000);
console.log("process3");
*/
/*

let res=fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
    return res.json()
}).then(user=>{
    console.log(user)
});
console.log(res)
*/

/*
let res=fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        // console.log(data.json())
        return res.json()
    }
    )
    .then(user=>{
        console.log(user)
    })
    
console.log(res)

*/

// function demo()
// {
//     return "India"
// }
// let x=demo()

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width= , initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="pa"></p>
    <script>
        let st="Vijay"
        let para=document.getElementById("pa")
        para.innerHTML="<mark>"+"<b>"+st+"</b>"+"</mark>"
    </script>
</body>
</html>
*/

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="pa"></p>
    <script>
        let st={n:"vijay",c:"chennai",e:"abc123@gmail.com"}
        let para=document.getElementById("pa")
        para.innerHTML=<b>${st.n}</b>-${st.c}-${st.e}
    </script>
</body>
</html>*/

/*let fetch_API=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    console.log(data);
}
fetch_API()*/