let RaiseTicketModel = require("../model/raiseTicket.model")
let accountModel = require("../model/account.model");

let getAllRaiseTicket = (request, response) => {

    RaiseTicketModel.find({}, (err, data) => {
        if (!err) {
            response.json(data);
        } else {
            response.json(err);
        }
    })

}

let unlockUser = async (request, response) => {
    // const result = accountModel.findOneAndUpdate(
    //     { _id: request.body },
    //     [{ $set: { lock: { $cond: { if: { $eq: ['$lock', true] }, then: false, else: '$lock' } } } }]
    // )

    //let lock = request.body;
    // accountModel.updateOne({ lock: true }, { $set: { lock: false } }, (err, result) => {
    //     if (err) {
    //         response.status(400).json({ "message": "Cannot unlock the user", "error": err });
    //     } else {
    //         response.json({
    //             result,
    //             "message": "user has been unlocked"
    //         })
    //     }
    // })
    accountModel.findByIdAndUpdate(request.params.id, {
        $set: { lock: false }
    }, (err, data) => {
        if (err) {
            throw err
        } else {
            response.json(data);
            console.log("Order Status Updated Successfully!");
        }
    })
}
// let unlockUser = function (request, response) {
//     accountModel.updateOne({ _id: request.params._id }, { "$set": { "lock": false } })
//         .then(result => response.json(result))
//         .catch(err => response.status(422).json(err));
// }

module.exports = { getAllRaiseTicket, unlockUser };