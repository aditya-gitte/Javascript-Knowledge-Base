/*
Async Await is the new way of writing asynchronous code. This allows the syntax to look much more like synchronous code making it easier to read and write. It is essentially syntactic sugar for promises.
*/



//all async functions return a promise
async function getWeatherData() {
    let DelhiWeather= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 degrees")
        }, 5000)
    });

    let BagloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("25 degrees")
        }, 5000)
    });

    let delhiW = await DelhiWeather;//this line actually stops the execution of the code until the promise is resolved.

    let bangW = await BagloreWeather;

    return [delhiW, bangW];
}
// So essentially async allowed us to stop the exucution of js which is not possible using any other method. This allows us to think in normal sync way and write code in async way. If we had to write the above code in promises then we would have to write change to structure of the code and also figure out what would go in the then function.



let weather = getWeatherData();
weather.then((data) => {
    console.log(data)
})
