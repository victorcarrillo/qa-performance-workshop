var faker = require('faker');

function createTaskName(context,events,done){
    context.vars.taskName = faker.commerce.productName();
    return done();
}

function createUpdateName(context,events,done){
    context.vars.updateName = faker.commerce.productMaterial();
    return done();

}



module.exports = { createTaskName, createUpdateName }