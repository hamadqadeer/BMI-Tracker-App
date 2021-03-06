"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");

const userStore = {
  store: new JsonStore("./models/user-store.json", { users: [] }),
  collection: "users",

  getAllUsers() {
    return this.store.findAll(this.collection);
  },

  addUser(user) {
    this.store.add(this.collection, user);
    this.store.save();
  },

  getUserById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  },
  updateUser(id,new_user){
    let user = this.getUserById(id);
    user.firstName = new_user.firstName;
    user.lastName = new_user.lastName;
    user.email = new_user.email;
    user.password = new_user.password;
    user.address = new_user.address;
    user.gender = new_user.gender;
    user.height = new_user.height;
    user.weight = new_user.weight;
    this.store.save();
  },
  removeUser(id) {
    const user = this.getUserById(id);
    this.store.remove(this.collection, user);
    this.store.save();
  },
  addUserGoals(id, goal){
    let user = this.getUserById(id);
    user.goals.push(goal);
    this.store.save();
  }

};

module.exports = userStore;
