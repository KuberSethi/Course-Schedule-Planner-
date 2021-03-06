
exports.up = function(knex, Promise) {
    return knex.schema.createTable('requirements', function(t) {
        t.text('code').notNullable();
        t.text('name').notNullable();
        t.unique('code');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requirements');
};
