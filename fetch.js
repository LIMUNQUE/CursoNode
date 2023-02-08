async function LoadData(){
    try{
        const rest = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await rest.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

LoadData();