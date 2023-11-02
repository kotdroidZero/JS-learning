/// Immediately Invoked Function Expressions (IIFE)


/// Named IIFI
(function chai() {
    console.log("DB Conected");
})();


/// unNamed Named IIFI (passsing name as arguments)
((name) => {
    console.log(`Hi ${name} , DB Conected Two`);
})("Pushkar");

// chai()


// /// TO Reduce the Global scope pollutions IIFFE is used    (
// (function a() { console.log("Hi") }
// )()  /// first () is function body and second is() function execution




