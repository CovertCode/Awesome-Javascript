// ENUMS should be used where there are several number of fixed values.

const errorCode = {
    IE211: "not authorized",
    IE312: "invalid card"
}

var paymentStatus = "not authorized";

console.log(errorCode.IE211);

if (paymentStatus == errorCode.IE211) {
    console.log(errorCode.IE211)
}

if (paymentStatus == errorCode.IE312) {
    console.log(errorCode.IE312)
}
