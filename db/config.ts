import Email from '@auth/core/providers/email';
import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config


const User = defineTable({
  columns: {

    id: column.number({ primaryKey: true }),
    Email: column.text({ unique: true}),
    usename: column.text({ unique: true}),
    password: column.text(),
    registredAt: column.date(),
    lastLogin: column.date(),
  },

});    
const Roles = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const UserRoles = defineTable({
  columns: {
    userId: column.number({ references: () => User.columns.id }),
    roleId: column.number({ references: ()  => Roles.columns.id }),
  },
});
const PasswordResetTokens = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.id }),
    token: column.text({ unique: true }),
    expiresAt: column.date(),
  },
});
const UserDetails = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.id }),
    fullName: column.text(),
    address: column.text(),
    phoneNumber: column.text(),
    
  },
});
const UserActivity = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.id }),
    action: column.text(),
    timestamp: column.date(),
    // Add more columns as needed
  },
});
const Todo = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    userId: column.number({ references: () => User.columns.id }),
    categoryId: column.number({ references: () => Category.columns.id }),
  },

});

const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    label: column.text({ unique: true }),
  },
});



export default defineDb({
  tables: {
    User,
    Roles,
    UserRoles,
    PasswordResetTokens,
    UserDetails,
    UserActivity,
    Todo,
    Category,
  },
});
