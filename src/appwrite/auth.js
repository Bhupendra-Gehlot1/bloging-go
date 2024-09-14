import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class userAuthentication {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async signup({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      console.log("error :: signup", error);
    }
    return null;
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("error :: login", error);
    }
    return null;
  }

  async getCurrentAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("error :: getCurrentAccount", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("error :: logout", error);
    }
    return null;
  }
}
const authService = new userAuthentication();
export default authService;
