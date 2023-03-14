/* eslint-disable linebreak-style */
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (/\d{3,}/.test(this.name)) {
      return false;
    }
    return /[^a-z][a-z0-9_-]*[a-z]$/.test(this.name);
  }
}
