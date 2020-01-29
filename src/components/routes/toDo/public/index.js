const BASE = '/to-do/'
const Membership = require('../../../../modules/membership/Model/Membership');
const responseObject = require('../../../../utils/responseObject');
const toDoCore = require('../../../core/toDo');
const membershipHandler = require('../../../../modules/membership/handler/handler');
const MembershipRepository = require('../../../../modules/membership/repository/MembershipRepository');

module.exports = (app) => {
    // fake membership db
    let db = new Map();
    db.set(1, new Membership(1, 'Wuriyanto', 'Musobar', 'wuriyanto@yahoo.co.id', '123456'));
    db.set(2, new Membership(2, 'Alex', 'Xander', 'alex@yahoo.co.id', '123456'));

    const membershipRepository = new MembershipRepository(db);

    app.post('/auth', membershipHandler.login(membershipRepository));

    app.post(`${BASE}new`, async function (req, res, next) {

        console.log(`-> [POST] ${req.originalUrl}`)

        let response = await toDoCore.newToDoItem(req.body)

        console.log(`<- [POST] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.put(`${BASE}edit-description/:id`, async function (req, res, next) {

        console.log(`-> [PUT] ${req.originalUrl}`)

        let response = await toDoCore.editDescription(req.params.id, req.body)

        console.log(`<- [PUT] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.put(`${BASE}set-as-done/:id`, async function (req, res, next) {

        console.log(`-> [PUT] ${req.originalUrl}`)

        let response = await toDoCore.setStatus(req.params.id, true)

        console.log(`<- [PUT] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.put(`${BASE}set-as-pending/:id`, async function (req, res, next) {

        console.log(`-> [PUT] ${req.originalUrl}`)

        let response = await toDoCore.setStatus(req.params.id, false)

        console.log(`<- [PUT] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.delete(`${BASE}remove`, async function (req, res, next) {

        console.log(`-> [DELETE] ${req.originalUrl}`)

        let response = await toDoCore.remove(req.body.noTelp)

        console.log(`<- [DELETE] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.delete(`${BASE}remove-all`, async function (req, res, next) {

        console.log(`-> [DELETE] ${req.originalUrl}`)

        let response = await toDoCore.removeAll(req.params.id)

        console.log(`<- [DELETE] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.get(`${BASE}`, async function (req, res, next) {

        console.log(`-> [GET] ${req.originalUrl}`)

        let response = await toDoCore.getAll()

        console.log(`<- [GET] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

}