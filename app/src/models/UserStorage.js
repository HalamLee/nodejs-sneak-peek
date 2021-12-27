'use strict';

class UserStorage {
  static #users = {
    id: ['haha', '홍길동', '둘리'],
    psword: ['hoho', '123', '또치'],
    name: ['하하', '홍길동', '이이'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
