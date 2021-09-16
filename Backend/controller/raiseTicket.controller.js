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
    const email = request.body.email
    accountModel.updateOne({ email }, {
        $set: request.body
    }, (err, data) => {
        if (err) {
            throw err
        } else {
            response.json(data);
            console.log("Account User Unlocked Successfully!");
        }
    })
}

let deleteRaiseTicket = (request, response) => {
    let product = request.body;
    const userId = request.body.userId;
    console.log('userId', userId);
    RaiseTicketModel.deleteOne(
        { userId },
        (result, error) => {
            if (!error) {
                response.json(result);
            } else {
                response.json(error);
            }
        }
    )
}

module.exports = { getAllRaiseTicket, unlockUser, deleteRaiseTicket };