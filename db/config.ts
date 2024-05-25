import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config


const User = defineTable({
  columns: {

    id: column.text({ primaryKey: true }),
    Email: column.text({ unique: true}),
    username: column.text({ unique: true}),
    password: column.text(),
    
  },

});    

const Todo = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    userId: column.text({ references: () => User.columns.id }),
    categoryId: column.text({ references: () => Category.columns.id }),
  },

});

const Category = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text({ unique: true }),
  },
});



export default defineDb({
  tables: {
    User,
    Todo,
    Category,
  },
});
