import config from "../config/config";
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // Database services
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("error :: createPost", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("error :: updatePost", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("error :: deletePost", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("error :: getPost", error);
    }
  }

  async getPosts() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("error :: getPosts", error);
    }
  }

  // Storage or file services
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("error :: uploadFile", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.createFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("error :: deleteFile", error);
    }
  }

  getFileForDownload(fileId) {
    try {
      return this.storage.getFileDownload(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("error :: getFileForDownload", error);
    }
  }

  getFileforPreview(fileId) {
    try {
      return this.storage.getFilePreview(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("error :: getFileForDownload", error);
    }
  }
}

const service = new Service();
export default service;
